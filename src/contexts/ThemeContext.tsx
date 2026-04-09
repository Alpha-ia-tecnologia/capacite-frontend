import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Theme = "dark" | "light"

interface ThemeState {
    theme: Theme
    toggleTheme: () => void
    setTheme: (t: Theme) => void
}

const ThemeContext = createContext<ThemeState | null>(null)

export function ThemeProvider({ children }: { children: ReactNode }) {
    const [theme, setThemeState] = useState<Theme>(() => {
        const saved = localStorage.getItem("capacite_theme") as Theme | null
        return saved || "dark"
    })

    useEffect(() => {
        localStorage.setItem("capacite_theme", theme)
        const root = document.documentElement
        if (theme === "light") {
            root.classList.add("light")
            root.classList.remove("dark")
        } else {
            root.classList.add("dark")
            root.classList.remove("light")
        }
    }, [theme])

    const toggleTheme = () => setThemeState(prev => prev === "dark" ? "light" : "dark")
    const setTheme = (t: Theme) => setThemeState(t)

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export function useTheme(): ThemeState {
    const ctx = useContext(ThemeContext)
    if (!ctx) throw new Error("useTheme must be used within ThemeProvider")
    return ctx
}
