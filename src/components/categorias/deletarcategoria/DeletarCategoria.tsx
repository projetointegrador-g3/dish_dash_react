
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
        <div className='container w-2/4 mx-auto border rounded-lg p-4 mt-20'>
            <h1 className='text-3xl text-center my-4'>Deletar Categoria</h1>
            <p className='text-center font-medium mb-4'>
                Você tem certeza de que deseja apagar o Categoria a seguir?</p>

            <div className='flex flex-col overflow-hidden justify-between'>
                <p className='text-2xl h-full text-center p-6 relative'>{categoria.categoria}</p>
                <div className="flex gap-10">
                    <button 
                        className='flex justify-center text-center rounded-lg text-[var(--colorWhite)] bg-[var(--colorRed)] w-full py-2 hover:bg-[var(--colorRedDark)] cursor-pointer'
                        onClick={retornar}>
                        Não
                    </button>
                    <button 
                        className='flex justify-center text-center rounded-lg text-[var(--colorWhite)] bg-[var(--colorCyan)] w-full py-2 hover:bg-[var(--colorCyanDark)] cursor-pointer'
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