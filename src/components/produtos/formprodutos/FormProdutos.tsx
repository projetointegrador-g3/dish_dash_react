import  { ChangeEvent, useEffect, useState } from "react";  
import { useNavigate, useParams } from "react-router-dom";  
import { Categoria } from "../../../model/Categoria";  
import { Produto } from "../../../model/Produto";  
import { atualizar, buscar, cadastrar } from "../../../services/Service";  
import { ToastAlert } from "../../../utils/ToastAlert";  
import { RotatingLines } from "react-loader-spinner";  
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";

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
            <div className="container flex flex-col items-center bg-[var(--colorOffWhite)] text-[var(--colorGrey)]">  
                <h1 className=" text-4xl text-center my-8">  
                    {id !== undefined ? 'Editar Produto' : 'Cadastrar Produto'}  
                </h1>  

                <form className="flex flex-col w-1/2 gap-4" onSubmit={gerarNovoProduto}>  
                    <div>  
                        <Input  
                            type="text"  
                            placeholder="Nome"  
                            name="nome"  
                            required  
                            value={produto.nome}  
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)} />  
                    </div>  
                    <div>  
                        <Input  
                            type="number"  
                            placeholder="Preço"  
                            name="preco"  
                            required  
                            
                            value={produto.preco}  
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)} />  
                    </div>  
                    <div>  
                        <Input  
                            type="text"  
                            placeholder="Link da Imagem (https://imagem.png)"  
                            name="foto"  
                            required
                            value={produto.foto}  
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)} />  
                    </div>  
                    <div>  
                        <label htmlFor="">Informações Nutricionais</label>
                        <Input  
                            type="text"  
                            placeholder="Gluten: Sim; Lactose: Sim; Alergicos: Amendoim, Frutos do mar..."  
                            name="info_nutricionais"  
                            required
                            value={produto.info_nutricionais}  
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)} />  
                    </div>  
                    <div className="flex flex-col gap-2">  
                        <p>Categoria do Produto</p>  
                        <select  
                            name="categoria"  
                            id="categoria"  
                            className='flex h-10 w-full rounded-md border border-stone-400 bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'  
                            onChange={(e) => buscarCategoriaPorID(e.currentTarget.value)}>  
                            <option value="" selected disabled>Selecione uma Categoria</option>  

                            {categorias.map((categoria) => (  
                                <option key={categoria.id} value={categoria.id}>{categoria.categoria}</option>  
                            ))}  


                        </select>  
                    </div>  
                    <Button  
                        type='submit'  
                        className="cursor-pointer"  
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
                            <span>{id !== undefined ? 'Atualizar' : 'Cadastrar'}</span>  
                        )}  
                    </Button>  
                </form>  
            </div>  

        </>  
    )  
}  

export default FormProdutos  