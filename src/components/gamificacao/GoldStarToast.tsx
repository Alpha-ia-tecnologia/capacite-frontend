import { useEffect, useState } from "react"
import { useGamificacao } from "@/contexts/GamificacaoContext"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"

export function GoldStarToast() {
    const { pendingNotification, dismissNotification } = useGamificacao()
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        if (pendingNotification) {
            // Small delay for animation
            const timer = setTimeout(() => setVisible(true), 100)
            return () => clearTimeout(timer)
        } else {
            setVisible(false)
        }
    }, [pendingNotification])

    const handleDismiss = () => {
        setVisible(false)
        setTimeout(dismissNotification, 300)
    }

    if (!pendingNotification) return null

    return (
        <div
            className={cn(
                "fixed bottom-6 right-6 z-50 transition-all duration-500 ease-out",
                visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            )}
        >
            <div className="rounded-2xl border border-yellow-400/20 bg-[#0a0a3a]/95 backdrop-blur-xl shadow-2xl shadow-yellow-400/10 p-5 max-w-sm flex items-start gap-4">
                <div className="text-4xl animate-bounce">⭐</div>
                <div className="flex-1">
                    <h4 className="text-sm font-bold text-yellow-400">{pendingNotification.title}</h4>
                    <p className="text-xs text-white/40 mt-1 leading-relaxed">{pendingNotification.message}</p>
                </div>
                <button onClick={handleDismiss} className="text-white/20 hover:text-white/50 transition-colors">
                    <X size={14} />
                </button>
            </div>
        </div>
    )
}
