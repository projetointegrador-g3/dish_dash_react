import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Categoria } from "../../../model/Categoria";
import { atualizar, buscar, cadastrar } from "../../../services/Service";
import { RotatingLines } from "react-loader-spinner";
import { ToastAlert } from "../../../utils/ToastAlert";

function FormCategoria() {

    const navigate = useNavigate();

    const [categoria, setCategoria] = useState<Categoria>({} as Categoria);
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const { id } = useParams<{id: string}>();


    async function buscarPorID(id: string) {
        try {
            await buscar(`/categoria/${id}`, setCategoria)
        } catch (error) {
            ToastAlert('erro ao buscar produto', 'erro')
        }
    }

   useEffect(() => {
    if(id !== undefined){
        buscarPorID(id)
    }
   },[id])

   function atualizarEstado(e: ChangeEvent<HTMLInputElement>){
    setCategoria({
        ...categoria,
        [e.target.name]: e.target.value
    })
   }

   function retornar() {
    navigate("/categorias")
}
   async function gerarNovaCategoria(e: ChangeEvent<HTMLFormElement>){
    e.preventDefault();
    setIsLoading(true)
    console.log("Dados da categoria:", categoria); 

    if(id !== undefined){
        try {
            await atualizar('/categoria', categoria, setCategoria)
            ToastAlert('A Categoria foi atualizada com sucesso!', 'sucesso')
        } catch (error: any) {
            ToastAlert('Erro ao atualizar a categoria', 'erro')
        }
    } else {
         try {
            await cadastrar('/categoria', categoria, setCategoria)
            ToastAlert('A categoria foi cadastrada com sucesso!', 'sucesso')
         } catch (error) {
                ToastAlert('Erro ao Cadastrar a categoria', 'erro')
         }
      }
      setIsLoading(false)
      retornar()
   }


    return (
        <div className="text-amber-50 container flex flex-col items-center justify-center mx-auto bg-gray-950 p-4">
            <h1 className="text-4xl text-center my-8">
                 {id === undefined ? 'Cadastrar Categoria' : 'Editar Categoria'}
            </h1>

            <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovaCategoria}>
                <div className="flex flex-col gap-2">
                    <label htmlFor="categoria">Nome Categoria</label>
                    <input
                        type="text"
                        placeholder="Nome categoria "
                        name='categoria'
                        className="border-2 border-slate-700 rounded p-2"
                        value={categoria.categoria}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="descricao">Descrição</label>
                    <input
                        type="text"
                        placeholder="Descrição "
                        name='descricao'
                        className="border-2 border-slate-700 rounded p-2"
                        value={categoria.descricao}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>
                <button
                    className="rounded text-slate-100 bg-[var(--colorYellow)]
                               hover:bg-red-700 w-1/2 py-2 mx-auto flex justify-center"
                    type="submit">
                        {isLoading ?
                        <RotatingLines
                            strokeColor="white"
                            strokeWidth="5"
                            animationDuration="0.75"
                            width="24"
                            visible={true}
                        /> :
                        <span>{id === undefined ? 'Cadastrar' : 'Atualizar'}</span>
                        }
                </button>
            </form>
        </div>
    );
}

export default FormCategoria;