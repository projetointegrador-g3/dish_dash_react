
import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { buscar, deletar } from "../../../services/Service"
import { RotatingLines } from "react-loader-spinner"
import { ToastAlert } from "../../../utils/ToastAlert"
import { Produto } from "../../../model/Produto"

function DeletarProduto() {

    const navigate = useNavigate();

    const [produto, setProduto] = useState<Produto>({} as Produto);
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const { id } = useParams<{ id: string }>();


    async function buscarPorID(id: string) {
        try {
            await buscar(`/produtos/${id}`, setProduto)
        } catch (error) {
            ToastAlert('erro ao buscar Produto', 'erro')
        }
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarPorID(id)
        }
    }, [id])

    async function deletarProduto() {
        setIsLoading(true)

        try {
            await deletar(`/produtos/${id}`)
            ToastAlert('Produto apagado com sucesso','sucesso')

        } catch (error: any) {
             ToastAlert('Erro ao deletar o Produto.', 'erro')
            }
         setIsLoading(false)
        retornar()
        }

    

    function retornar() {
    navigate("/produtos")
    }

    return (
        <div className='container w-1/3 mx-auto'>
            <h1 className='text-3xl text-center my-4'>Deletar Produto</h1>
            <p className='text-center font-medium mb-4'>
                Você tem certeza de que deseja apagar o produto a seguir?</p>
            <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
                
                <p className=' text-2xl h-full text-center bg-white p-6 rounded-lg shadow-2xl relative'>{produto.nome}</p>
                <div className="flex ">
                    <button 
                        className='flex justify-center text-center text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2 hover:scale-105 transition duration-300  ease-in-out'
                        onClick={retornar}>
                        Não
                    </button>
                    <button 
                        className='w-full text-slate-100 hover:bg-[var(--colorYellow)] 
                                   bg-amber-400 hover:scale-105 transition duration-300 ease-in-out flex items-center justify-center'
                                   onClick={deletarProduto}>
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
export default DeletarProduto