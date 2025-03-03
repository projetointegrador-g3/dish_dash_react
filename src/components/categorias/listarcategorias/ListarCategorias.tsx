
import CardCategorias from "../cardcategorias/CardCategorias"
import { useEffect, useState } from "react";
import { Categoria } from "../../../model/Categoria";
import { buscar } from "../../../services/Service";
import ModalCategoria from "../modalcategoria/ModalCategoria";
import { DotLottieReact } from "@lottiefiles/dotlottie-react"
 

function ListarCategorias() {

    const [categorias, setCategorias] = useState<Categoria[]>([])

    async function buscarCategoria(){
        try {
            await buscar('/categoria', setCategorias,)
        } catch (error) {
           
        }
    }

    useEffect(() => {
        buscarCategoria()
    }, [])

  return (
    <>
       <h1>
      <ModalCategoria/>
    </h1>
    {categorias.length === 0 && (
             <DotLottieReact
             src="https://lottie.host/a6fa5f6b-c53a-412c-a307-29d8d5230d3e/rCiEj96Aay.lottie"
             loop
             autoplay
           />
        )}
   
    <div className="flex justify-center w-full my-4">
        <div className="container flex flex-col">
            <div className="grid grid-cols-1  
                            lg:grid-cols-4 gap-8">
                    {categorias.map((categoria) => (
                         <CardCategorias key={categoria.id} categoria={categoria} />
                    ))}
                 
            </div>
        </div>
    </div>
</>
  )
}

export default ListarCategorias