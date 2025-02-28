import { 
  ShoppingCart, Receipt, CheckCircle, Plus, Trash, Folder, Archive, PencilLine,
  Package,
  Calculator,
  Dresser,
  Medal,
  UsersThree, 
} from '@phosphor-icons/react';
import { ToastAlert } from '../../utils/ToastAlert';
import Navbar from '../navbar/Navbar';

const categorias = [
  { nome: "Vegetariano", icone: Archive },
  { nome: "Japonesa", icone: ShoppingCart },
  { nome: "Mexicano", icone: Receipt },
  { nome: "Italiano", icone: CheckCircle },
  { nome: "Grega", icone: Calculator },
  { nome: "Caseira", icone: UsersThree },
  { nome: "FestFood", icone: Medal },
  { nome: "Indiana", icone: Dresser },
  { nome: "Chinesa", icone: Package },
];

function Categorias() {
  return (
    <>
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-16">
      <div className="flex flex-col sm:flex-row items-center justify-between w-full max-w-7xl py-6">
        <h1 className="text-3xl font-bold flex items-center gap-2">
          <Folder /> Categorias
        </h1>
        <button 
          className="bg-zinc-200 border-none cursor-pointer rounded p-2 flex items-center text-zinc-500 hover:text-zinc-800 hover:scale-105 transition"
          onClick={() => alert('Adicionar novo departamento')}
        >
          Adicionar uma Categoria <Plus />
        </button>
      </div>

      <ul className="grid w-full max-w-7xl grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 place-items-center">
        {categorias.map(({ nome, icone: Icon }, index) => (
          <li key={index} className="bg-red-700 w-full max-w-xs p-8 rounded-lg hover:scale-105 transition"> 
            <div className="flex items-center justify-between bg-zinc-300 p-4 rounded-lg mt-4">
              <div className="flex items-center gap-2">
                <Icon className="size-8" />
                <strong>{nome}</strong>
              </div>
              <button className="flex gap-2 border-none cursor-pointer" onClick={() => ToastAlert(`Excluir departamento: ${nome}`, 'erro')}>
                <PencilLine className='size-6 hover:text-zinc-500' />
                <Trash className='size-6 text-red-700 hover:text-red-500' />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
    </>
  );
};

export default Categorias;
