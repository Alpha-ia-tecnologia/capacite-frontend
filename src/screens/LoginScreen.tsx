import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "@/contexts/AuthContext"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import logoImg from "@/assets/logo.png"

export function LoginScreen() {
    const navigate = useNavigate()
    const { login } = useAuth()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [submitting, setSubmitting] = useState(false)

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault()
        setError("")
        setSubmitting(true)
        try {
            const success = await login(email, password)
            if (success) {
                navigate("/dashboard")
            } else {
                setError("E-mail ou senha inválidos")
            }
        } catch {
            setError("Erro ao conectar. Tente novamente.")
        } finally {
            setSubmitting(false)
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#000029] relative overflow-hidden">

            <div className="w-full max-w-md px-4 relative z-10">
                {/* Brand */}
                <div className="mb-8 flex justify-center items-center gap-3">
                    <img
                        src={logoImg}
                        alt="Capacite Logo"
                        className="h-12 w-12 object-contain"
                    />
                    <span className="text-3xl font-bold tracking-tight text-white">Capacite</span>
                </div>

                <Card className="border-white/10 bg-[#000051]/80 backdrop-blur-xl shadow-2xl">
                    <CardHeader className="space-y-1 pb-6">
                        <CardTitle className="text-2xl text-center text-white">Acesse sua conta</CardTitle>
                        <CardDescription className="text-center text-white/40">
                            Insira suas credenciais para continuar
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleLogin} className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="email" className="text-white/70">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="seu@email.com"
                                    className="bg-white/5 border-white/10 text-white placeholder:text-white/25 focus-visible:ring-[#173DED]"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                    <Label htmlFor="password" className="text-white/70">Senha</Label>
                                    <a href="#" className="text-sm font-medium text-[#FF1493] hover:text-[#FF1493]/80">
                                        Esqueceu a senha?
                                    </a>
                                </div>
                                <Input
                                    id="password"
                                    type="password"
                                    className="bg-white/5 border-white/10 text-white focus-visible:ring-[#173DED]"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="flex items-center space-x-2 pt-2 pb-4">
                                <div className="h-4 w-4 rounded border border-white/20 bg-white/5 flex items-center justify-center" />
                                <Label htmlFor="remember" className="text-sm font-medium leading-none text-white/50">
                                    Manter conectado
                                </Label>
                            </div>
                            {error && (
                                <p className="text-red-400 text-sm text-center">{error}</p>
                            )}
                            {/* Neon gradient button matching mockup buttons */}
                            <button
                                type="submit"
                                disabled={submitting}
                                className="w-full relative overflow-hidden rounded-full py-3 px-6 font-semibold text-white text-md transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50"
                                style={{
                                    background: 'linear-gradient(135deg, #FF1493, #FF6B35, #FF1493)',
                                    boxShadow: '0 0 20px rgba(255, 20, 147, 0.4), 0 0 40px rgba(255, 20, 147, 0.1)',
                                }}
                            >
                                {submitting ? "Entrando..." : "Entrar"}
                            </button>
                        </form>
                    </CardContent>
                </Card>

                <p className="text-center text-white/20 text-xs mt-6">
                    Just Keep <span className="font-bold text-white/40">Learning</span>
                </p>
            </div>
        </div>
    )
}
