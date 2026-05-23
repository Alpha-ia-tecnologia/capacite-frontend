import { useEffect } from "react"
import { X } from "lucide-react"
import type { Palestra } from "@/types"

interface PalestraPlayerModalProps {
    palestra: Palestra
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
                    <iframe
                        src={palestra.glsnowUrl}
                        title={`Assistir ${palestra.title}`}
                        className="h-full w-full"
                        frameBorder="0"
                        allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
                        allowFullScreen
                        scrolling="no"
                    />
                </div>
            </div>
        </div>
    )
}
