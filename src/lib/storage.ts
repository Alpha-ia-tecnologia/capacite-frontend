/**
 * localStorage wrapper with JSON serialization and namespace prefix.
 */
const PREFIX = "capacite_"

function key(name: string): string {
    return `${PREFIX}${name}`
}

export const storage = {
    get<T>(name: string): T | null {
        try {
            const raw = localStorage.getItem(key(name))
            return raw ? (JSON.parse(raw) as T) : null
        } catch {
            return null
        }
    },

    set<T>(name: string, value: T): void {
        localStorage.setItem(key(name), JSON.stringify(value))
    },

    remove(name: string): void {
        localStorage.removeItem(key(name))
    },

    clear(): void {
        Object.keys(localStorage)
            .filter(k => k.startsWith(PREFIX))
            .forEach(k => localStorage.removeItem(k))
    },
}
