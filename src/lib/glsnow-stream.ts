/**
 * Resolve a URL de stream tocável a partir de uma URL de embed da GLS Now.
 *
 * A GLS Now é, na prática, uma plataforma OTT da AudiencePlayer (project 110).
 * O player oficial deles (iframe `/_embed/video-player`) NÃO autoplay de forma
 * confiável — ele exige um clique manual no botão "Assista" que, por ser
 * cross-origin, não conseguimos acionar via JS.
 *
 * Em vez de embutir o iframe deles, replicamos a chamada que o player faz:
 * a mutation GraphQL `ArticleAssetPlay`, que devolve o manifesto HLS/DASH do
 * vídeo. O endpoint aceita a chamada anonimamente (sem auth) e libera CORS para
 * a nossa origem, e o stream é sem DRM — então conseguimos tocar o vídeo no
 * nosso próprio <video> + hls.js, com autoplay (mudo) garantido pelo navegador.
 *
 * Tudo isso foi verificado contra o asset real (articleId=505/assetId=1482):
 * GraphQL anônimo OK, CORS para localhost OK, segmentos com `ACAO: *`, sem DRM.
 */

const AUDIENCEPLAYER_GRAPHQL = "https://api.audienceplayer.com/graphql/110/user"

const ARTICLE_ASSET_PLAY = `
    mutation ArticleAssetPlay($articleId: Int, $assetId: Int, $protocols: [ArticlePlayProtocolEnum]) {
        ArticleAssetPlay(article_id: $articleId, asset_id: $assetId, protocols: $protocols) {
            entitlements {
                protocol
                mime_type
                manifest
                encryption_type
            }
            subtitles {
                url
                locale
                locale_label
            }
        }
    }
`

export interface GlsSubtitle {
    url: string
    locale: string
    label: string
}

export interface GlsStream {
    /** URL do manifesto HLS (.m3u8). */
    hlsUrl: string
    subtitles: GlsSubtitle[]
}

/**
 * Extrai `articleId` e `assetId` de uma URL de embed da GLS Now.
 * Retorna `null` se a URL não for um embed reconhecível (ex.: "#").
 */
export function parseGlsEmbed(url: string | undefined | null): { articleId: number; assetId: number } | null {
    if (!url) return null
    try {
        const parsed = new URL(url, window.location.origin)
        if (!/glsnow\.com$/i.test(parsed.hostname)) return null
        const articleId = Number(parsed.searchParams.get("articleId"))
        const assetId = Number(parsed.searchParams.get("assetId"))
        if (!Number.isFinite(articleId) || !Number.isFinite(assetId) || !articleId || !assetId) return null
        return { articleId, assetId }
    } catch {
        return null
    }
}

/**
 * Busca o manifesto HLS (e legendas) do vídeo via AudiencePlayer.
 * Lança um erro se o vídeo estiver protegido por DRM ou se nenhum HLS vier.
 */
export async function resolveGlsStream(
    articleId: number,
    assetId: number,
    signal?: AbortSignal,
): Promise<GlsStream> {
    const res = await fetch(AUDIENCEPLAYER_GRAPHQL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            query: ARTICLE_ASSET_PLAY,
            variables: { articleId, assetId, protocols: ["hls", "dash"] },
        }),
        signal,
    })

    if (!res.ok) {
        throw new Error(`Falha ao resolver stream da GLS Now (HTTP ${res.status})`)
    }

    const json = await res.json()
    const play = json?.data?.ArticleAssetPlay
    const entitlements: Array<{ protocol: string; manifest: string; encryption_type: string | null }> =
        play?.entitlements ?? []

    const hls = entitlements.find(e => e.protocol === "hls")
    if (!hls?.manifest) {
        throw new Error("Nenhum stream HLS disponível para esta palestra")
    }
    if (hls.encryption_type) {
        // Não temos como tocar streams com DRM no player nativo.
        throw new Error(`Stream protegido por DRM (${hls.encryption_type})`)
    }

    const subtitles: GlsSubtitle[] = (play?.subtitles ?? [])
        .filter((s: { url?: string }) => Boolean(s?.url))
        .map((s: { url: string; locale: string; locale_label?: string }) => ({
            url: s.url,
            locale: s.locale,
            label: s.locale_label || s.locale,
        }))

    return { hlsUrl: hls.manifest, subtitles }
}
