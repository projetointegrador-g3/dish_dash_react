import { Circle, CircleHalfTilt, CircleWavy, CircleWavyCheck, CircleWavyWarning, Dot } from "@phosphor-icons/react";
import { useState } from "react";

interface Notificacao {
    id: number;
    mensagem: string;
    lida: boolean;
}

const Notificacao = () => {
    const [notificacoes, setNotificacoes] = useState<Notificacao[]>([
        { id: 1, mensagem: "5 novos resturantes cadastrados nas ultimas 5 horas", lida: false },
        { id: 2, mensagem: "12  novas sugestões de categorias para cadastrar", lida: false },
    ]);

    const marcarComoLida = (id: number) => {
        setNotificacoes((prev) =>
        prev.map((notif) =>
        notif.id === id ? { ...notif, lida: true } : notif
        )
    )}

    return (
        <div className="mt-4 space-y-3 ml-3 mr-50">
            {notificacoes.map((notif) => (
            <div
                key={notif.id}
                className={`p-2 rounded-md border-0 ${notif.lida ? 'bg-gray-200' : 'bg-black/7'}`}
            >
            
            <p className="text-sm">{notif.mensagem}</p>
            {!notif.lida && (
            
            <button
                onClick={() => marcarComoLida(notif.id)}
                className="mt-2 text-xs text-blue-600"
                >
                <Circle className="text-[#d9291a] flex items-center justify-center fill-[#d9291a]"/>
            </button>
            )}
        </div>
    ))}
    </div>
)}; export default Notificacao
