import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { ThemeProvider } from "./contexts/ThemeContext"
import { AuthProvider } from "./contexts/AuthContext"
import { DiagnosticoProvider } from "./contexts/DiagnosticoContext"
import { TrilhasProvider } from "./contexts/TrilhasContext"
import { LoginScreen } from "./screens/LoginScreen"
import { DashboardScreen } from "./screens/DashboardScreen"
import { DiagnosticoScreen } from "./screens/DiagnosticoScreen"
import { BuscaInteligenteScreen } from "./screens/BuscaInteligenteScreen"
import { PerguntasPalestrasScreen } from "./screens/PerguntasPalestrasScreen"
import { PalestraDetalheScreen } from "./screens/PalestraDetalheScreen"
import { PalestraLayoutPreviewScreen } from "./screens/PalestraLayoutPreviewScreen"

import { GrandesAreasScreen } from "./screens/GrandesAreasScreen"
import { MinhasTrilhasScreen } from "./screens/MinhasTrilhasScreen"
import { MinhaContaScreen } from "./screens/MinhaContaScreen"
import { AdminScreen } from "./screens/AdminScreen"

export function App() {
  return (
    <ThemeProvider>
    <AuthProvider>
      <DiagnosticoProvider>
        <TrilhasProvider>
            <BrowserRouter>
              <Routes>
                <Route path="/login" element={<LoginScreen />} />
                <Route path="/dashboard" element={<DashboardScreen />} />
                <Route path="/diagnostico" element={<DiagnosticoScreen />} />
                <Route path="/busca" element={<BuscaInteligenteScreen />} />
                <Route path="/palestras/preview" element={<PalestraLayoutPreviewScreen />} />
                <Route path="/palestras/:id" element={<PalestraDetalheScreen />} />
                <Route path="/perguntas" element={<PerguntasPalestrasScreen />} />

                <Route path="/areas" element={<GrandesAreasScreen />} />
                <Route path="/trilhas" element={<MinhasTrilhasScreen />} />
                <Route path="/conta" element={<MinhaContaScreen />} />
                <Route path="/admin" element={<AdminScreen />} />
                <Route path="/" element={<Navigate to="/login" replace />} />
              </Routes>
            </BrowserRouter>
        </TrilhasProvider>
      </DiagnosticoProvider>
    </AuthProvider>
    </ThemeProvider>
  )
}

export default App
