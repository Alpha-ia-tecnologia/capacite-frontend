import React from "react"
import { Sidebar } from "./Sidebar"
import { DecorativeBackground } from "@/components/ui/DecorativeBackground"

export function AppLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex h-screen overflow-hidden bg-[#000029]">
            <Sidebar />
            <div className="flex flex-1 flex-col overflow-hidden relative">
                {/* Decorative bg behind all content */}
                <DecorativeBackground />
                <main className="flex-1 overflow-y-auto relative z-10">
                    {children}
                </main>
            </div>
        </div>
    )
}
