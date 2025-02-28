import { AlignLeft, Circle, Hamburger } from "@phosphor-icons/react";
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
        <div className="mt-4 space-y-3 ml-3 mr-150">
            {notificacoes.map((notif) => (
            <div
                key={notif.id}
                className={`p-2 rounded-md border-0 ${notif.lida ? 'bg-[#d9291a]/7 text-gray-500' : 'bg-black/7'}`}
            >
            
            <div className="flex items-center">
                <p className="text-sm ml-8">{notif.mensagem}</p>
                {!notif.lida && (
                    
                    <div className="absolute ml-115">
                        <button onClick={() => marcarComoLida(notif.id)}>
                            <Circle weight="fill" className="text-[#d9291a] flex items-center justify-center text-xs cursor-pointer"/>
                        </button>
                    </div>
                )}
                
                <div className="absolute"> 
                    {notif.id ===1 ? (
                        <Hamburger className="bg-[#FFA314] rounded w-6 h-5 flex items-center justify-center"/>
                    ):(<AlignLeft className="bg-[#209DA8] rounded w-6 h-5 flex items-center justify-center"/>)}
                </div>
            </div>
        </div>
    ))}
    </div>
)}; export default Notificacao
