import { Search, Bell, Settings } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function Header() {
    return (
        <header className="flex h-16 shrink-0 items-center justify-between border-b border-white/5 bg-[#000029] px-6">
            {/* Search */}
            <div className="flex items-center gap-2 w-80">
                <div className="relative w-full">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/30" />
                    <Input
                        type="search"
                        placeholder="Anywhere, anytime."
                        className="pl-10 bg-white/5 border-white/10 text-white placeholder:text-white/30 focus-visible:ring-[#173DED]"
                    />
                </div>
            </div>

            {/* Right side */}
            <div className="flex items-center gap-4">
                <button className="relative rounded-lg p-2 text-white/50 hover:bg-white/5 hover:text-white transition-colors">
                    <Bell className="h-5 w-5" />
                </button>
                <button className="rounded-lg p-2 text-white/50 hover:bg-white/5 hover:text-white transition-colors">
                    <Settings className="h-5 w-5" />
                </button>
                <div className="ml-2 flex items-center gap-3 border-l border-white/10 pl-6">
                    <div className="flex flex-col text-right">
                        <span className="text-sm font-semibold leading-none text-white">Vinicius</span>
                        <span className="text-xs text-white/40 mt-1">Concierge</span>
                    </div>
                    <Avatar className="border-2 border-[#173DED]/50">
                        <AvatarImage src="https://ui.shadcn.com/avatars/01.png" alt="@user" />
                        <AvatarFallback className="bg-[#173DED] text-white">VP</AvatarFallback>
                    </Avatar>
                </div>
            </div>
        </header>
    )
}
