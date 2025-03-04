import { Heart, PencilLine, Trash } from '@phosphor-icons/react'
import  { Link } from 'react-router-dom'
import { Produto } from '../../../model/Produto'
import { useState } from 'react';
import { curtir } from '../../../services/Service';

interface CardProdutosProps{
    produto: Produto
}

function CardProdutos({produto}: CardProdutosProps) {

    const [curtidas, setCurtidas] = useState(produto.curtir || 0);  

    const handleCurtir = async () => {  
        try {  
            await curtir(`/produtos/curtir/${produto.id}`, (data: any) => {  
                setCurtidas(data.curtir);  
            });  
        } catch (error) {  
            console.error('Erro ao curtir o produto', error);  
        }  
    };    

  return (

     <>
            
            <div className="flex flex-col md:flex-row h-screen">
                
                <main className="flex-1 p-3">
                    

                    {/* Ajuste da grid para centralizar os itens */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-1 gap-1 pr-3 justify-center mt-10">

                        <div className="bg-white p-4 rounded-lg shadow-2xl relative">
                            <img src={produto.foto}
                                  alt="produto"
                                  className='mt-1.5' />
                            <p className="text- font-bold mt-3 text-center">{produto.nome}</p>
                            <p className='text-green-700 font-semibold text-center'>R${produto.preco.toFixed(2)}</p>         
                            <p className='text-gray-700 text-sm text-center'>{produto.categoria?.categoria}</p>
                            <p className=' text-sm text-center'>{produto.info_nutricionais}</p>
                            <p className="text-sm text-center text-red-800">
                            { produto.preco > 19.00 && produto.categoria?.categoria === "Prato Principal" ? 'Promoção do dia!' : ''}
                            </p>
                            
                            
                            <button className="mt-5 w-full bg-[var(--colorRed)] text-white py-2 px-4 rounded-b-lg hover:bg-[var(--colorYellow)]">
                            Comprar  
                            </button>

                            {/* Botão de curtir (coração) fora do card */}  
                            <div className="absolute left-3 transform ">  
                              <button onClick={handleCurtir} className="text-red-500 hover:text-red-700 focus:outline-none flex items-center">  
                              <Heart size={24} /> {/* Ícone de coração */}  
                              <span className="ml-1">{curtidas}</span> {/* Número de curtidas */}  
                              </button>  
                            </div>    
                           
                            <div className="absolute top-2 right-1 flex gap-2">
                                {/* Botões de editar e excluir */}
                                <Link to={`/editarproduto/${produto.id}`} >
                                <button className="text-gray-500 hover:text-[var(--colorCyan)] cursor-pointer hover:animate-bounce ">
                                    <PencilLine />
                                </button>
                                </Link>
                                <Link to={`/deletarproduto/${produto.id}`}>
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

export default CardProdutos