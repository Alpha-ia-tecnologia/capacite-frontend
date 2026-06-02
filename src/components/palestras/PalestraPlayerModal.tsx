import { useEffect, useRef, useState } from "react"
import Hls from "hls.js"
import { Loader2, Volume2, VolumeX, X } from "lucide-react"
import type { Palestra } from "@/types"
import { parseGlsEmbed, resolveGlsStream } from "@/lib/glsnow-stream"

interface PalestraPlayerModalProps {
    palestra: Pick<Palestra, "title" | "speaker" | "duration" | "glsnowUrl">
    onClose: () => void
}

export function PalestraPlayerModal({ palestra, onClose }: PalestraPlayerModalProps) {
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") onClose()
        }

        window.addEventListener("keydown", handleKeyDown)
        return () => window.removeEventListener("keydown", handleKeyDown)
    }, [onClose])

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/80 px-4 py-4 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-labelledby="palestra-player-title"
        >
            <button
                type="button"
                className="absolute inset-0 cursor-default"
                aria-label="Fechar player"
                onClick={onClose}
            />

            <div
                className="relative z-10 max-h-[calc(100dvh-2rem)] overflow-hidden rounded-2xl border border-white/10 bg-[#07070A] shadow-2xl"
                style={{
                    width: "min(calc(100vw - 2rem), calc((100dvh - 7rem) * 16 / 9), 1024px)",
                }}
            >
                <div className="flex items-start justify-between gap-4 border-b border-white/10 px-4 py-3 sm:px-5">
                    <div className="min-w-0">
                        <h2 id="palestra-player-title" className="truncate text-sm font-semibold text-white sm:text-base">
                            {palestra.title}
                        </h2>
                        <p className="mt-0.5 truncate text-xs text-white/40">
                            {palestra.speaker} - {palestra.duration}
                        </p>
                    </div>
                    <button
                        type="button"
                        onClick={onClose}
                        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/10 text-white/60 transition-colors hover:bg-white/10 hover:text-white"
                        aria-label="Fechar player"
                    >
                        <X size={16} />
                    </button>
                </div>

                <div className="aspect-video w-full max-h-[calc(100dvh-7rem)] bg-black">
                    <PalestraVideoSurface palestra={palestra} />
                </div>
            </div>
        </div>
    )
}

/**
 * Toca o vídeo nativamente via HLS quando conseguimos resolver o stream da
 * GLS Now (autoplay garantido, sem o clique extra no botão "Assista" deles).
 * Se a resolução falhar (DRM, URL não reconhecida, rede), cai no iframe oficial
 * como fallback — assim o vídeo nunca fica indisponível.
 */
function PalestraVideoSurface({ palestra }: { palestra: PalestraPlayerModalProps["palestra"] }) {
    const videoRef = useRef<HTMLVideoElement>(null)
    const [status, setStatus] = useState<"loading" | "playing" | "fallback">("loading")
    const [isMuted, setIsMuted] = useState(true)

    useEffect(() => {
        const embed = parseGlsEmbed(palestra.glsnowUrl)
        if (!embed) {
            setStatus("fallback")
            return
        }

        const controller = new AbortController()
        let hls: Hls | null = null
        let cancelled = false

        resolveGlsStream(embed.articleId, embed.assetId, controller.signal)
            .then(stream => {
                if (cancelled) return
                const video = videoRef.current
                if (!video) return

                const startPlayback = () => {
                    // Tenta com áudio primeiro (a abertura do modal veio de um clique
                    // do usuário, então o navegador costuma permitir). Se bloquear,
                    // continua mudo — autoplay mudo é sempre aceito — e oferece o
                    // botão de ativar som.
                    video.muted = false
                    video.play()
                        .then(() => setIsMuted(false))
                        .catch(() => {
                            video.muted = true
                            setIsMuted(true)
                            video.play().catch(() => undefined)
                        })
                    setStatus("playing")
                }

                if (Hls.isSupported()) {
                    hls = new Hls({ enableWorker: true })
                    hls.loadSource(stream.hlsUrl)
                    hls.attachMedia(video)
                    hls.on(Hls.Events.MANIFEST_PARSED, startPlayback)
                    hls.on(Hls.Events.ERROR, (_e, data) => {
                        if (data.fatal && !cancelled) setStatus("fallback")
                    })
                } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
                    // Safari / iOS tocam HLS nativamente.
                    video.src = stream.hlsUrl
                    video.addEventListener("loadedmetadata", startPlayback, { once: true })
                } else {
                    setStatus("fallback")
                }
            })
            .catch(() => {
                if (!cancelled) setStatus("fallback")
            })

        return () => {
            cancelled = true
            controller.abort()
            hls?.destroy()
        }
    }, [palestra.glsnowUrl])

    const toggleMute = () => {
        const video = videoRef.current
        if (!video) return
        video.muted = !video.muted
        setIsMuted(video.muted)
        if (!video.muted) video.play().catch(() => undefined)
    }

    if (status === "fallback") {
        return (
            <iframe
                src={palestra.glsnowUrl}
                title={`Assistir ${palestra.title}`}
                className="h-full w-full"
                allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
                allowFullScreen
            />
        )
    }

    return (
        <div className="relative h-full w-full">
            <video
                ref={videoRef}
                className="h-full w-full bg-black"
                controls
                autoPlay
                playsInline
                muted={isMuted}
            />

            {status === "loading" && (
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black">
                    <Loader2 className="animate-spin text-white/70" size={32} />
                </div>
            )}

            {status === "playing" && isMuted && (
                <button
                    type="button"
                    onClick={toggleMute}
                    className="absolute bottom-16 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full bg-[#FF1493] px-4 py-2 text-sm font-bold text-white shadow-lg transition-colors hover:bg-[#FF1493]/90"
                >
                    <VolumeX size={16} /> Ativar som
                </button>
            )}

            {status === "playing" && !isMuted && (
                <button
                    type="button"
                    onClick={toggleMute}
                    className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-black/50 text-white/80 transition-colors hover:bg-black/70 hover:text-white"
                    aria-label="Silenciar"
                >
                    <Volume2 size={16} />
                </button>
            )}
        </div>
    )
}
