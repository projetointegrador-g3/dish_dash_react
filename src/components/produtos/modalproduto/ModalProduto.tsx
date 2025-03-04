import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './ModalProduto.css'
import FormProdutos from '../formprodutos/FormProdutos';
import { PlusSquare } from '@phosphor-icons/react';

function ModalProduto() {
    return (
        <>
            <Popup
                trigger={
                    <h2 className="text-2xl font-semibold mb-3 flex flex-col items-center sm:flex-row sm:justify-between gap-4 sm:gap-0">
                        <span>Produtos</span>

                        <button
                            className="bg-[var(--colorYellow)] text-[var(--colorGrey)] px-4 py-2 rounded flex
                                           items-center gap-3 hover:bg-[var(--colorRed)] hover:scale-105 ease-in-out cursor-pointer"
                        >
                            <PlusSquare className="size-6" />
                            <p className="text-sm font-semibold">Adicionar novo produto</p>
                        </button>
                    </h2>
                }
                modal
            >
                <FormProdutos />
            </Popup>
        </>
    );
}

export default ModalProduto;