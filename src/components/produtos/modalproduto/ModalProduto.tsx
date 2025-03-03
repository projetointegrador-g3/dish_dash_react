import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './ModalProduto.css'
import FormProdutos from '../formprodutos/FormProdutos';
import { FaPlus } from 'react-icons/fa';

function ModalProduto() {
    return (
        <>
            <Popup
                trigger={
                    <h2 className="text-2xl font-semibold mb-3 flex flex-col items-center sm:flex-row sm:justify-between gap-4 sm:gap-0">
                        <span>Produtos</span>

                        <button
                            className="bg-[var(--colorYellow)] text-black px-4 py-3 rounded flex
                                           items-center gap-3 hover:bg-[var(--colorYellowDark)] hover:scale-105 transition duration-300 ease-in-out"
                        >
                            <FaPlus className="text-xs font-semibold" />
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