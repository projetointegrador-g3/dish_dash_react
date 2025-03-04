
import { useEffect, useState } from 'react'
import CardProdutos from '../cardprodutos/CardProdutos'
import { Produto } from '../../../model/Produto'
import { buscar } from '../../../services/Service'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import ModalProduto from '../modalproduto/ModalProduto'

function ListaProdutos() {

    const [produtos, setProdutos] = useState<Produto[]>([])

    async function buscarProduto(){
        try {
            await buscar('/produtos', setProdutos)
        } catch (error) {
            
        }
    }

    useEffect(() => {
        buscarProduto()
    },[])

  return (
    <>

    <h1>
        <ModalProduto />
    </h1>

    {produtos.length === 0 && (
             <DotLottieReact
             src="https://lottie.host/a6fa5f6b-c53a-412c-a307-29d8d5230d3e/rCiEj96Aay.lottie"
             loop
             autoplay
           />
        )}
        <div className='flex justify-center w-full my-4'>
            <div className='container flex flex-col mx-2'>
                <div className='container mx-auto my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                    {produtos.map((produto) => (
                        <CardProdutos key={produto.id} produto={produto}/>
                    ))}
                    
                </div>
            </div>
        </div>
    </>
  )
}

export default ListaProdutos