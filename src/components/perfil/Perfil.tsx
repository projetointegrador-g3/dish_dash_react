import { PencilLine } from "@phosphor-icons/react";


function Perfil(){
    return(
        <>
        <div className="flex flex-col gap-10 p-20">

            <div>
                <h1 className="text-3xl font-semibold mb-2">Perfil</h1>
                <p>Foto de Perfil</p>

                <div className="flex gap-1 mt-5">
                    <img src="https://i.pinimg.com/736x/38/c5/5d/38c55dd9ba326014ce40004adfaf5561.jpg" alt="Foto de perfil naruto" />
                </div>
            </div>
            
            <div>
                <h1 className="text-3xl font-semibold mb-2">Informações do usuário</h1>
                <p>Usuário  
                <PencilLine />
                </p>
                <input className="bg-black/10" type="text" placeholder="Narutinho3000"/> 

                <p>Senha  
                <PencilLine />
                </p>
                <input className="bg-black/10" type="text" placeholder="*************" /> 
            </div>            
        </div>
        </>
    )
}

export default Perfil;