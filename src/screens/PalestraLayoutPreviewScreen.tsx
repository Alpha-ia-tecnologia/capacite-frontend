import { ArrowLeft, Sparkles } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { AppLayout } from "@/components/layout/AppLayout"
import { PalestraRichDetail } from "@/components/palestras/PalestraRichDetail"
import { RICH_CONTENT } from "@/data/palestra-rich-content"

/* Rota fixa /palestras/preview — pré-visualização do layout com dados de exemplo. */
export function PalestraLayoutPreviewScreen() {
    const navigate = useNavigate()
    const data = RICH_CONTENT["gls17_1"]

    return (
        <AppLayout>
            <div className="mx-auto min-h-full max-w-5xl px-8 py-6">
                <div className="mb-6 flex items-center justify-between gap-3">
                    <button
                        type="button"
                        onClick={() => navigate(-1)}
                        className="flex items-center gap-2 rounded-lg border px-3 py-2 text-xs font-semibold transition-colors hover:bg-white/5"
                        style={{ borderColor: "var(--surface-border)", color: "var(--text-secondary)" }}
                    >
                        <ArrowLeft size={14} />
                        Voltar
                    </button>
                    <span className="flex items-center gap-1.5 rounded-full border border-[#FF1493]/20 bg-[#FF1493]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#FF1493]">
                        <Sparkles size={12} />
                        Pré-visualização de layout
                    </span>
                </div>

                <PalestraRichDetail data={data} />
            </div>
        </AppLayout>
    )
}
