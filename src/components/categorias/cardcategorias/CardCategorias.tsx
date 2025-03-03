import { PencilLine, Trash } from "@phosphor-icons/react/dist/ssr"
import { Link } from "react-router-dom"
import { Categoria } from "../../../model/Categoria"


interface CardCategoriasProps{
    categoria: Categoria;
}

function CardCategorias({ categoria }: CardCategoriasProps) {
    return (
        
        <>
            
            <div className="flex flex-col md:flex-row h-screen">
                
                <main className="flex-1 p-3">
                    

                    {/* Ajuste da grid para centralizar os itens */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-1 gap-1 pr-3 justify-center mt-10">

                        <div className="bg-white p-4 rounded-lg shadow-2xl relative">
                            <p className="text-xl font-semibold mt-3 text-center">{categoria.categoria}</p>
                               <p className="text-sm font-light mt-3 text-center">{categoria.descricao}</p>
                            <div className="absolute top-2 right-2 flex gap-2">
                               
                                <Link to={`/editarcategoria/${categoria.id}`} >
                                <button className="text-gray-500 hover:text-[var(--colorCyan)] cursor-pointer hover:animate-bounce">
                                    <PencilLine />
                                </button>
                                </Link>
                                <Link to={`/deletarcategoria/${categoria.id}`}>
                                <button className="text-gray-500 hover:text-[var(--colorRed)] cursor-pointer hover:animate-bounce">
                                    <Trash />
                                </button>
                                </Link>
                            </div>
                        </div>

                    </div>
                </main>
            </div>
        </>
    )
}

export default CardCategorias


{/* <button 
                    
                    className="bg-[var(--colorYellow)]  px-4 py-3 rounded 
                    flex items-center gap-3 hover:text-[var(--colorOffWhite)] hover:bg-[var(--colorRed)] cursor-pointer hover:scale-105 transition duration-300 ease-in-out"
                  >
                    <FaPlus className="text-xs font-semibold"/> 
                    <p className="text-sm font-semibold">Adicionar nova categoria</p>
                  </button> */}