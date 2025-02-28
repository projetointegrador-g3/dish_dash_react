import { PencilLine } from "@phosphor-icons/react";
import { Button } from "../ui/button";


function Perfil(){
    return(
        <>
        <div className="flex flex-col gap-10 p-5">
            <div className="mr-40">
                <h1 className="text-3xl font-semibold mb-2">Perfil</h1>

                <div className="flex gap-1">
                    <img className="rounded-lg w-50" src="https://i.pinimg.com/736x/38/c5/5d/38c55dd9ba326014ce40004adfaf5561.jpg" alt="Foto de perfil naruto" />
                </div>
            </div>
            
            <div>
                <h1 className="text-3xl font-semibold mb-2">Informações do usuário</h1>
                <div className="flex items-center gap-2">
                    <p>Usuário</p>
                    <PencilLine className="left-20"/>
                </div>
                <input className="bg-black/10 p-2 rounded-md w-100" type="text" placeholder="Narutinho3000" /> 

                <div className="flex items-center gap-2 mt-5">
                    <p>Senha</p>
                    <PencilLine className="left-20"/>
                </div>
                <input className="bg-black/10 p-2 rounded-md w-100" type="password" placeholder="************" /> 
                
            </div>            
                <Button className="w-100">Salvar</Button>
        </div>
        </>
    )
}

export default Perfil;