
import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { Categoria } from "../../../model/Categoria"
import { buscar, deletar } from "../../../services/Service"
import { RotatingLines } from "react-loader-spinner"
import { ToastAlert } from "../../../utils/ToastAlert"

function DeletarCategoria() {

    const navigate = useNavigate();

    const [categoria, setCategoria] = useState<Categoria>({} as Categoria);
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const { id } = useParams<{ id: string }>();


    async function buscarPorID(id: string) {
        try {
            await buscar(`/categoria/${id}`, setCategoria)
        } catch (error) {
            ToastAlert('erro ao buscar Categoria', 'erro')
        }
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarPorID(id)
        }
    }, [id])

    async function deletarCategoria() {
        setIsLoading(true)

        try {
            await deletar(`/categoria/${id}`)
            ToastAlert('Categoria apagado com sucesso','sucesso')

        } catch (error: any) {
             ToastAlert('Erro ao deletar o Categoria.', 'erro')
            }
         setIsLoading(false)
        retornar()
        }

    

    function retornar() {
    navigate("/categorias")
    }

    return (
        <div className='container w-1/3 mx-auto'>
            <h1 className='text-3xl text-center my-4'>Deletar Categoria</h1>
            <p className='text-center font-medium mb-4'>
                Você tem certeza de que deseja apagar o Categoria a seguir?</p>
            <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
                
                <p className=' text-2xl h-full text-center bg-white p-6 rounded-lg shadow-2xl relative'>{categoria.categoria}</p>
                <div className="flex ">
                    <button 
                        className='flex justify-center text-center text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2 hover:scale-105 transition duration-300  ease-in-out'
                        onClick={retornar}>
                        Não
                    </button>
                    <button 
                        className='w-full text-slate-100 hover:bg-[var(--colorYellow)] 
                                   bg-amber-400 hover:scale-105 transition duration-300 ease-in-out flex items-center justify-center'
                                   onClick={deletarCategoria}>
                        {isLoading ?
                            <RotatingLines
                                strokeColor="white"
                                strokeWidth="5"
                                animationDuration="0.75"
                                width="24"
                                visible={true}
                            /> :
                            <span>Sim</span>
                        }
                    </button>
                </div>
            </div>
        </div>
    )
}
export default DeletarCategoria