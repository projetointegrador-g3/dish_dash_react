import Popup from 'reactjs-popup';
import FormCategoria from '../formcategoria/FormCategoria';
import 'reactjs-popup/dist/index.css';
import './ModalCategoria.css'
import { FaPlus } from 'react-icons/fa';
import { PlusSquare } from '@phosphor-icons/react';





function ModalCategoria() {
    
  return (
    <> 

      <Popup
         trigger={
              <h2 className="text-2xl font-semibold mb-3 flex flex-col items-center sm:flex-row sm:justify-between gap-4 sm:gap-0">
                      <span>Categoria</span>
                      
                      <button
                        className="bg-[var(--colorYellow)] px-4 py-2 rounded flex
                         items-center gap-3 hover:bg-[var(--colorRed)] hover:scale-105 ease-in-out cursor-pointer"
                      >
                        <PlusSquare className="size-6" />
                        <p className="text-sm font-semibold">Adicionar nova categoria</p>
                      </button>
                    </h2>
         }
         modal
         >
            <FormCategoria />
      </Popup>
  
    </>
  )
}

export default ModalCategoria