import { Plus, Filter, MoreHorizontal, ArrowUpDown } from "lucide-react"
import { AppLayout } from "@/components/layout/AppLayout"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export function TasksScreen() {

    const tasks = [
        { id: "1", title: "Desenvolver API de Autenticação", project: "App Mobile v2.0", status: "Em Progresso", priority: "Alta", assignee: "RP", dueDate: "Amanhã" },
        { id: "2", title: "Revisar Design System", project: "Envisionar Base", status: "Concluído", priority: "Média", assignee: "AS", dueDate: "Ontem" },
        { id: "3", title: "Planejamento Q3", project: "Marketing Global", status: "Pendente", priority: "Baixa", assignee: "CH", dueDate: "Em 3 dias" },
        { id: "4", title: "Atualizar Dependências", project: "App Mobile v2.0", status: "Pendente", priority: "Média", assignee: "RP", dueDate: "Em 5 dias" },
        { id: "5", title: "Criar Landing Page", project: "Novo Produto X", status: "Em Progresso", priority: "Alta", assignee: "MC", dueDate: "Semana que vem" },
    ]

    const getStatusBadge = (status: string) => {
        switch (status) {
            case "Em Progresso": return <Badge className="bg-[#173DED]/15 text-[#5B8DEF] border-0">Em Progresso</Badge>
            case "Concluído": return <Badge className="bg-[#40E0D0]/15 text-[#40E0D0] border-0">Concluído</Badge>
            case "Pendente": return <Badge className="bg-[#FF1493]/15 text-[#FF1493] border-0">Pendente</Badge>
            default: return <Badge variant="outline">{status}</Badge>
        }
    }

    const getPriorityBadge = (priority: string) => {
        switch (priority) {
            case "Alta": return <Badge className="bg-[#FF1493]/10 text-[#FF1493] border-0">Alta</Badge>
            case "Média": return <Badge className="bg-white/10 text-white/60 border-0">Média</Badge>
            case "Baixa": return <Badge className="bg-white/5 text-white/40 border-0">Baixa</Badge>
            default: return <Badge variant="outline">{priority}</Badge>
        }
    }

    return (
        <AppLayout>
            <div className="flex flex-col gap-6">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight text-white">Tarefas</h1>
                        <p className="text-white/40 mt-1">Gerencie suas atividades e acompanhe os prazos.</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <Button variant="outline" className="gap-2 border-white/10 text-white/60 bg-transparent hover:bg-white/5 hover:text-white">
                            <Filter className="h-4 w-4" />
                            Filtrar
                        </Button>
                        <button
                            className="flex items-center gap-2 rounded-full py-2 px-5 font-semibold text-white text-sm transition-all duration-300 hover:scale-[1.02]"
                            style={{
                                background: 'linear-gradient(135deg, #FF1493, #FF6B35, #FF1493)',
                                boxShadow: '0 0 15px rgba(255, 20, 147, 0.3)',
                            }}
                        >
                            <Plus className="h-4 w-4" />
                            Nova Tarefa
                        </button>
                    </div>
                </div>

                <div className="rounded-xl border border-white/5 bg-[#000051] text-white shadow-xl shadow-black/20 overflow-hidden">
                    <Table>
                        <TableHeader>
                            <TableRow className="border-white/5 hover:bg-transparent">
                                <TableHead className="w-12 text-center text-white/30">
                                    <Checkbox />
                                </TableHead>
                                <TableHead className="w-[300px] text-white/50 font-medium">Título da Tarefa</TableHead>
                                <TableHead className="text-white/50 font-medium">Projeto</TableHead>
                                <TableHead className="text-white/50 font-medium">Status</TableHead>
                                <TableHead className="text-white/50 font-medium">
                                    <div className="flex items-center gap-1 cursor-pointer hover:text-white transition-colors">
                                        Prioridade
                                        <ArrowUpDown className="h-3 w-3" />
                                    </div>
                                </TableHead>
                                <TableHead className="text-white/50 font-medium">Responsável</TableHead>
                                <TableHead className="text-white/50 font-medium">Prazo</TableHead>
                                <TableHead className="text-right"></TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {tasks.map((task) => (
                                <TableRow key={task.id} className="group cursor-pointer border-white/5 hover:bg-white/5">
                                    <TableCell className="text-center">
                                        <Checkbox />
                                    </TableCell>
                                    <TableCell className="font-medium text-white">{task.title}</TableCell>
                                    <TableCell className="text-white/40">{task.project}</TableCell>
                                    <TableCell>{getStatusBadge(task.status)}</TableCell>
                                    <TableCell>{getPriorityBadge(task.priority)}</TableCell>
                                    <TableCell>
                                        <Avatar className="h-8 w-8 border border-white/10">
                                            <AvatarFallback className="text-xs bg-[#173DED]/20 text-[#5B8DEF]">{task.assignee}</AvatarFallback>
                                        </Avatar>
                                    </TableCell>
                                    <TableCell className="text-white/40 text-sm">{task.dueDate}</TableCell>
                                    <TableCell className="text-right">
                                        <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition-opacity text-white/40 hover:text-white hover:bg-white/5">
                                            <MoreHorizontal className="h-4 w-4" />
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </AppLayout>
    )
}
