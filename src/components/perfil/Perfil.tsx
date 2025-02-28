import { PencilLine } from "@phosphor-icons/react";


function Perfil(){
    return(
        <>
        <div className="flex flex-col gap-10 p-5">

            <div>
                <h1 className="text-3xl font-semibold mb-2">Perfil</h1>
                <p>Foto de Perfil</p>

                <div className="flex gap-1 mt-5">
                    <img className="rounded-full w-50" src="https://i.pinimg.com/736x/38/c5/5d/38c55dd9ba326014ce40004adfaf5561.jpg" alt="Foto de perfil naruto" />
                </div>
            </div>
            
            <div>
                <h1 className="text-3xl font-semibold mb-2">Informações do usuário</h1>
                <div className="flex items-center gap-2">
                    <p>Usuário</p>
                    <PencilLine className="left-20"/>
                </div>
                <input className="bg-black/10 p-2 rounded-md" type="text" placeholder="Narutinho3000" /> 

                <div className="flex items-center gap-2 mt-5">
                    <p>Senha</p>
                    <PencilLine className="left-20"/>
                </div>
                <input className="bg-black/10 p-2 rounded-md" type="password" placeholder="************" /> 
            </div>            
        </div>
        </>
    )
}

export default Perfil;