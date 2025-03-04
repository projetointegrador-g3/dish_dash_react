import { useEffect, useState } from "react"  
import { Produto } from "../../../model/Produto"  
import { useParams } from "react-router-dom"  
import { buscar } from "../../../services/Service"  
import { ToastAlert } from "../../../utils/ToastAlert"  
import CardProdutos from "../cardprodutos/CardProdutos"  
import { DotLottieReact } from "@lottiefiles/dotlottie-react"  


function ListarProdutosPorNome() {  

    const [produtos, setProdutos] = useState<Produto[]>([])// Retorna todos os produtos   

    const [produtosFiltrados, setProdutosFiltrados] = useState<Produto[]>([]) // Produtos filtrado  

    const [filtroPreco, setFiltroPreco] = useState<string>("")  
    const [filtroSaudavel, setFiltroSaudavel] = useState<string>("")  
    const [filtroSobremesa, setFiltroSobremesa] = useState<string>("")  
	  
    const [isLoading, setIsLoading] = useState(false)  

	  const { nome } = useParams<{ nome: string }>()  

    async function buscarTodosProdutos(){  
      try {  
          setIsLoading(true)  
          await buscar("/produtos", setProdutos)  
        } catch (error) {  
          ToastAlert("Erro ao listar todos os Produtos!", 'erro')  
        } finally {  
          setIsLoading(false)  
        }  
    }  

    function filtrarProdutos(){  
      let produtosFiltrados = produtos  
  
      if(produtosFiltrados && nome){  
          produtosFiltrados = produtosFiltrados.filter((produto) =>  
              produto.nome.toUpperCase().includes(nome.toUpperCase())  
          );  
      }  
      if(filtroPreco){  
          produtosFiltrados = produtosFiltrados.filter((produto) =>{  
              const preco = produto.preco  
              if(filtroPreco === '19.99'){  
                  if(produto.categoria?.categoria?.toLowerCase().includes('prato principal')){  
                      return preco <= 19.99;  
                  } else {  
                      return false;  
                  }  
              }  
              if(filtroPreco === '50') return preco <= 50  
              if(filtroPreco === '100') return preco > 50 && preco <= 100  
              return true  
          })            
      }  
  
      // Lógica de filtro de categoria EXCLUSIVA  
      if (filtroSaudavel === "Saúdavel") {  
          produtosFiltrados = produtosFiltrados.filter((produto) => {  
              const categoria = produto.categoria?.categoria;  
              return categoria?.toLowerCase().includes('saudavel') && !categoria?.toLowerCase().includes('sobremesa');  
          });  
      } else if (filtroSobremesa === "Sobremesa") {  
          produtosFiltrados = produtosFiltrados.filter((produto) => {  
              const categoria = produto.categoria?.categoria;  
              return categoria?.toLowerCase().includes('sobremesa') && !categoria?.toLowerCase().includes('saudavel');  
          });  
      }  
  
      setProdutosFiltrados(produtosFiltrados);  
  }  

    function limparFiltroPreco() {  
        setFiltroPreco("");  
        setFiltroSaudavel("");  
        setFiltroSobremesa("");  

        // Desmarcar os radio buttons de preço  
        const radioButtonsPreco = document.getElementsByName("preco");  
        radioButtonsPreco.forEach((radio) => {  
            (radio as HTMLInputElement).checked = false;  
        });  

        // Desmarcar os radio buttons de categoria  
        const radioButtonsCategoria = document.getElementsByName("categoria");  
        radioButtonsCategoria.forEach((radio) => {  
            (radio as HTMLInputElement).checked = false;  
        });  
    }  

    // Carrega todos os produtos na primeira vez  
	useEffect(() => {  
		buscarTodosProdutos()  
	}, [])  

	// Filtra os produtos de acordo com o termo da busca  
	useEffect(() => {  
        filtrarProdutos();  
    }, [nome, produtos, filtroPreco, filtroSaudavel, filtroSobremesa]);  

  return (  
    <>  
			<div className="bg-[var(--colorWhite)] rounded flex flex-col justify-center container">  
				<div className="flex flex-col mx-4 p-4">  
					<h1 className="text-4xl text-center my-4">  
						Resultados da busca por <span className="italic text-[var(--colorCyan)]">{nome}</span>  
					</h1>  

					{isLoading && (  
						<DotLottieReact  
            src="https://lottie.host/a6fa5f6b-c53a-412c-a307-29d8d5230d3e/rCiEj96Aay.lottie"  
            loop  
            autoplay  
          />  
					)}  

					{!isLoading && produtosFiltrados.length === 0 && (  
						<div className="text-center my-4">  
							<h2 className="text-2xl text-gray-600">Nenhum produto encontrado para "{nome}"</h2>  
						</div>  
					)}  

					<div className="flex gap-4">  
						<div className="flex flex-col w-1/5 ml-4 my-15 p-8 border rounded-lg border-slate-400">  
              <h3 className="text-base font-bold py-2">Preço:</h3>  
              <div className="flex gap-2">  
                  <input  
                      type="radio"  
                      name="preco"  
                      value="19.99"  
                      onChange={(e) => setFiltroPreco(e.target.value)}  
                  />  
                  <label htmlFor="19.99">Promoção do dia</label>  
              </div>  
              <div className="flex gap-2">  
                  <input  
                      type="radio"  
                      name="preco"  
                      value="50"  
                      onChange={(e) => setFiltroPreco(e.target.value)}  
                  />  
                  <label htmlFor="50">Até R$ 50,00</label>  
              </div>  
              <div className="flex gap-2">  
                  <input  
                      type="radio"  
                      name="preco"  
                      value="100"  
                      onChange={(e) => setFiltroPreco(e.target.value)}  
                  />  
                  <label htmlFor="100">R$ 50,00 - R$100,00</label>  
              </div>  
              <h3 className="text-base font-bold py-2 mt-4">Categoria:</h3>  
              <div className="flex gap-2">  
                  <input  
                      type="radio"  
                      name="categoria"  
                      value="Saudável"  
                      onChange={(e) => {  
                          setFiltroSaudavel(e.target.value);  
                          setFiltroSobremesa(""); // Limpa o filtro de Sobremesa  
                      }}  
                  />  
                  <label htmlFor="saudavel">Saudável</label>  
              </div>  
              <div className="flex gap-2">  
                  <input  
                      type="radio"  
                      name="categoria"  
                      value="Sobremesa"  
                      onChange={(e) => {  
                          setFiltroSobremesa(e.target.value);  
                          setFiltroSaudavel(""); // Limpa o filtro de Saudável  
                      }}  
                  />  
                  <label htmlFor="sobremesa">Sobremesa</label>  
              </div>  
							<div className="mt-8">  
								<button  
									className="flex justify-center w-2/2 py-2 mx-auto font-bold text-white rounded bg-[var(--colorRed)] hover:bg-[var(--colorYellow)]"  
									onClick={limparFiltroPreco}>  
									Limpar  
								</button>  
							</div>  
						</div>  

						{!isLoading && produtosFiltrados.length > 0 && (  
							<div className="container mx-auto my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-60">  
								{produtosFiltrados.map((produto) => (  
									<CardProdutos key={produto.id} produto={produto} />  
								))}  
							</div>  
						)}  
					</div>  
				</div>  
			</div>  
		</>  
   
  )  
}  

export default ListarProdutosPorNome  