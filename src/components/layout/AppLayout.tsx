import React from "react"
import { Sidebar } from "./Sidebar"

export function AppLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex h-screen overflow-hidden" style={{ backgroundColor: "var(--surface-bg)" }}>
            <Sidebar />
            <div className="flex flex-1 flex-col overflow-hidden relative">
                <main className="flex-1 overflow-y-auto relative">
                    {children}
                </main>
            </div>
        </div>
    )
}
