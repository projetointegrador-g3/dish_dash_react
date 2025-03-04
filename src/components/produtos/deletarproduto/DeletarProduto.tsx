
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
        <div className='container w-2/4 mx-auto border rounded-lg p-4 mt-20'>
            <h1 className='text-3xl text-center my-4'>Deletar Produto</h1>
            <p className='text-center mb-4'>
                Você tem certeza de que deseja apagar o produto a seguir?</p>

            <div className='flex flex-col overflow-hidden justify-between'>
                <p className='text-2xl h-full text-center p-6 relative'>{produto.nome}</p>

                <div className="flex gap-10">
                    <button 
                        className='flex justify-center text-center rounded-lg text-[var(--colorWhite)] bg-[var(--colorRed)] w-full py-2 hover:bg-[var(--colorRedDark)] cursor-pointer'
                        onClick={retornar}>
                        Não
                    </button>
                    <button 
                        className='flex justify-center text-center rounded-lg text-[var(--colorWhite)] bg-[var(--colorCyan)] w-full py-2 hover:bg-[var(--colorCyanDark)] cursor-pointer'
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