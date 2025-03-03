import  { ChangeEvent, useEffect, useState } from "react";  
import { useNavigate, useParams } from "react-router-dom";  
import { Categoria } from "../../../model/Categoria";  
import { Produto } from "../../../model/Produto";  
import { atualizar, buscar, cadastrar } from "../../../services/Service";  
import { ToastAlert } from "../../../utils/ToastAlert";  
import { RotatingLines } from "react-loader-spinner";  

function FormProdutos() {  
    const navigate = useNavigate();  
    const [isLoading, setIsLoading] = useState<boolean>(false);  
    const [categorias, setCategorias] = useState<Categoria[]>([]);  
    const [categoria, setCategoria] = useState<Categoria>({ id: 0, categoria: '', descricao: '' });  
    const [produto, setProduto] = useState<Produto>({} as Produto);  
    const { id } = useParams<{ id: string }>();  

    async function buscarProdutoPorID(id: string) {  
        try {  
            await buscar(`/produtos/${id}`, setProduto);  
        } catch (error) {  
            console.error("Erro ao buscar produto:", error);  
        }  
    }  

    async function buscarCategoriaPorID(id: string) {  
        try {  
            await buscar(`/categoria/${id}`, setCategoria);  
        } catch (error) {  
            console.error("Erro ao buscar categoria:", error);  
        }  
    }  

    async function buscarCategoria() {  
        try {  
            await buscar('/categoria', setCategorias);  
        } catch (error) {  
            console.error("Erro ao buscar categorias:", error);  
        }  
    }  

    useEffect(() => {  
        buscarCategoria();  
        if (id !== undefined) {  
            buscarProdutoPorID(id);  
        }  
    }, [id]);  

    useEffect(() => {  
        setProduto({  
            ...produto,  
            categoria: categoria,  
        });  
    }, [categoria]);  

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {  
        const { name, value } = e.target;  
        setProduto({  
            ...produto,  
            [name]: value,  
        });  
    }  

    function retornar() {  
        navigate('/produtos');  
    }  

    async function gerarNovoProduto(e: ChangeEvent<HTMLFormElement>) {  
        e.preventDefault();  
        setIsLoading(true);  

        const produtoParaEnviar = {  
            ...produto,  
            preco: parseFloat(produto.preco.toString()),  
            categoria: categoria // Envia o objeto categoria completo  
        };  

        try {  
            if (id !== undefined) {  
                await atualizar('/produtos', produtoParaEnviar, setProduto);  
                ToastAlert('Produto atualizado com sucesso!', 'sucesso'); 
               
            } else {  
                await cadastrar('/produtos', produtoParaEnviar, setProduto);  
                ToastAlert('Produto Cadastrado com Sucesso!', 'sucesso');  
                
            }  
        } catch (error: any) {  
            console.error("Erro ao cadastrar/atualizar o produto:", error);  
            ToastAlert('Erro ao cadastrar/atualizar o Produto!', 'erro');  
        }  
            
        setIsLoading(false);  
        retornar(); 
      
    }  

    const carregamentoCategoria = categoria.categoria === '';  

    return (  
        <>  
            <div className="container flex flex-col mx-auto items-center  bg-gray-950 text-amber-50">  
                <h1 className=" text-4xl text-center my-8">  
                    {id !== undefined ? 'Editar Produto' : 'Cadastrar Produto'}  
                </h1>  

                <form className="flex flex-col w-1/2 gap-4" onSubmit={gerarNovoProduto}>  
                    <div>  
                        <input  
                            type="text"  
                            placeholder="Nome"  
                            name="nome"  
                            required  
                            className="border-2 border-slate-700 rounded p-2"  
                            value={produto.nome}  
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)} />  
                    </div>  
                    <div>  
                        <input  
                            type="number"  
                            placeholder="preço"  
                            name="preco"  
                            required  
                            className="border-2 border-slate-700 rounded p-2"  
                            value={produto.preco}  
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)} />  
                    </div>  
                    <div>  
                        <input  
                            type="text"  
                            placeholder="imagem ex.:(https://ik.imagekit.io/oois5ivj4v/E-commece%20game/drive-download-20250117T181147Z-001/kena.png?updatedAt=1737137715314)"  
                            name="foto"  
                            required  
                            className="border-2 border-slate-700 rounded p-2"  
                            value={produto.foto}  
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)} />  
                    </div>  
                    <div>  
                        <input  
                            type="text"  
                            placeholder="info_nutricionais"  
                            name="info_nutricionais"  
                            required  
                            className="border-2 border-slate-700 rounded p-2"  
                            value={produto.info_nutricionais}  
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)} />  
                    </div>  
                    <div className="flex flex-col gap-2">  
                        <p>Categoria do Produto</p>  
                        <select  
                            name="categoria"  
                            id="categoria"  
                            className='border p-2 border-slate-800 rounded'  
                            onChange={(e) => buscarCategoriaPorID(e.currentTarget.value)}>  
                            <option value="" selected disabled>Selecione uma Categoria</option>  

                            {categorias.map((categoria) => (  
                                <option key={categoria.id} value={categoria.id}>{categoria.categoria}</option>  
                            ))}  


                        </select>  
                    </div>  
                    <button  
                        type='submit'  
                        className="hover:bg-[var(--colorYellow)] rounded disabled:bg-slate-200 bg-[var(--colorRed)]  
                               text-white font-bold w-1/2 mx-auto py-2 flex justify-center"  
                        disabled={carregamentoCategoria}  
                    >  
                        {isLoading ? (  
                            <RotatingLines  
                                strokeColor="white"  
                                strokeWidth="5"  
                                animationDuration="0.75"  
                                width="25"  
                                visible={true}  
                            />) : (  
                            <span>{id !== undefined ? 'Autalizar' : 'Cadastrar'}</span>  
                        )}  
                    </button>  
                </form>  
            </div>  

        </>  
    )  
}  

export default FormProdutos  