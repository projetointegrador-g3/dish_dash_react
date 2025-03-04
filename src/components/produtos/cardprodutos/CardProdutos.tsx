import { Heart, PencilLine, Trash } from '@phosphor-icons/react'
import  { Link } from 'react-router-dom'
import { Produto } from '../../../model/Produto'
import { useState } from 'react';
import { curtir } from '../../../services/Service';
import { Button } from '../../ui/button';

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
            <div className="bg-[var(--colorWhite)] p-4 rounded-lg shadow-2xl relative w-70">

                <header className="flex items-center justify-end gap-3">
                    {/* Botão de curtir (coração) fora do card */} 
                    <div className='transform'> 
                        <button onClick={handleCurtir} className="text-[var(--colorRed)] hover:text-[var(--colorRedDark)] focus:outline-none flex items-center mb-1.25 cursor-pointer">  
                            <Heart className='size-5 mb-0.25' /> {/* Ícone de coração */}  
                            <span className="ml-1">{curtidas}</span> {/* Número de curtidas */}  
                        </button> 
                    </div> 
                           
                    {/* Botões de editar e excluir */}
                    <Link to={`/editarproduto/${produto.id}`} >
                        <button className="text-gray-500 hover:text-[var(--colorCyan)] cursor-pointer hover:animate-bounce ">
                            <PencilLine className='size-5'/>
                        </button>
                    </Link>

                    <Link to={`/deletarproduto/${produto.id}`}>
                        <button className="text-gray-500 hover:text-[var(--colorRed)] cursor-pointer hover:animate-bounce">
                            <Trash className='size-5'/>
                        </button>
                    </Link>
                </header>

                <main className="flex gap-2">
                    <div className="flex flex-col justify-center">
                        <img src={produto.foto} alt="produto" className='w-100 h-40' />
                        <p className="text- font-bold mt-3 text-center">{produto.nome}</p>
                        <p className='text-[var(--colorCyan)] font-semibold text-center'>R${produto.preco.toFixed(2)} </p>         
                        <p className='text-[var(--colorGrey)] text-sm text-center'>Categoria: {produto.categoria?.categoria}</p>
                        <p className=' text-sm text-center'>{produto.info_nutricionais}</p>

                        <p className="text-sm text-center text-[var(--colorRed)]">
                        { produto.preco > 19.00 && 
                        produto.categoria?.categoria === "Prato Principal" ? 
                        'Promoção do dia!' : ''}
                        </p>
                        
                        <Button className="mt-5 w-full py-2 px-4 cursor-pointer ">
                        Comprar  
                        </Button>
                        
                    </div>
                </main>
            </div>
        </>
    )
}

export default CardProdutos