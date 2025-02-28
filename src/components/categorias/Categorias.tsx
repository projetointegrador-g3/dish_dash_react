import { PencilLine, PlusSquare, Trash } from "@phosphor-icons/react";
import { useCategoriaFunctions } from "./CategoriaFunction";
import "./Categorias.css"; 
import * as react from '@phosphor-icons/react';
import { Input } from "../ui/input";

const initialCategoria = [
  { id: 1, name: "Vegetariano", icon: <react.Archive /> },
  { id: 2, name: "Japonesa", icon: <react.ShoppingCart /> },
  { id: 3, name: "Mexicano", icon: <react.Receipt /> },
  { id: 4, name: "Italiano", icon: <react.CheckCircle /> },
  { id: 5, name: "Grega", icon: <react.Calculator /> },
  { id: 6, name: "Caseira", icon: <react.UsersThree /> },
  { id: 7, name: "Fast Food", icon: <react.Medal /> },
  { id: 8, name: "Indiana", icon: <react.Dresser /> },
  { id: 9, name: "Chinesa", icon: <react.Package /> },
];


export default function Produto() {
  const {
    categoriaList,
    isEditModalOpen,
    isDeleteModalOpen,
    isAddModalOpen,  
    editCategoria,
    categoriaToDelete,
    newCategoria,  
    openEditModal,
    closeEditModal,
    saveCategoria,
    openDeleteModal,
    closeDeleteModal,
    deleteCategoria,
    openAddModal,
    closeAddModal,  
    handleAddCategoria,
    handleInputChange, 
    handleNewCategoriaInputChange,   
  } = useCategoriaFunctions(initialCategoria);

  return (
    <div className="flex flex-col md:flex-row h-screen font-poppins">
      <main className="flex-1 p-8 bg-[var(--colorOffWhite)]">
        <h2 className="text-2xl font-semibold mb-3 flex flex-col items-center sm:flex-row sm:justify-between gap-4 sm:gap-0">
          <span>Categorias</span>
          <button 
            onClick={openAddModal}
            className="bg-[var(--colorYellow)]  px-4 py-3 rounded flex items-center gap-3 hover:text-[var(--colorOffWhite)] hover:bg-[var(--colorRed)] cursor-pointer hover:scale-105 transition duration-300 ease-in-out"
          >
            <PlusSquare className=""/> 
            <p className="text-sm font-semibold">Adicionar nova Categoria</p>
          </button>
        </h2>

        {/* Ajuste da grid para centralizar os itens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 pr-3 justify-center mt-10">
          {categoriaList.map((categoria) => (
            <div key={categoria.id} className="bg-white p-4 rounded-lg shadow-2xl relative">
              <h3 className="text-xl font-semibold mt-3 text-center">{categoria.name}</h3>
              <div className="absolute top-2 right-2 flex gap-2">
                {/* Botões de editar e excluir */}
                <button className="text-gray-500 hover:text-[var(--colorCyan)] cursor-pointer" onClick={() => openEditModal(categoria)}>
                  <PencilLine />
                </button>
                <button className="text-gray-500 hover:text-[var(--colorRed)] cursor-pointer" onClick={() => openDeleteModal(categoria)}>
                  <Trash />
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Modal Editar categoria */}
      {isEditModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center backdrop-blur-md bg-black/60">
          <div className="bg-[var(--colorOffWhite)] p-6 rounded-lg w-full sm:w-96 z-50">
            <h3 className="text-[var(--colorRed)] text-xl font-semibold mb-4">Editar Produto</h3>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="mb-4">
                <label className="block text-sm font-semibold"></label>
                <Input
                  type="text"
                  name="name"
                  value={editCategoria?.name || ""}
                  onChange={handleInputChange}
                  className="border px-4 py-2 rounded w-full bg-white"
                />
              </div>
              <div className="flex justify-center gap-5 mt-4 ">
                <button type="button" onClick={closeEditModal} className="bg-[var(--colorRed)] text-[var(--colorWhite)] cursor-pointer px-4 py-2 rounded hover:bg-[var(--colorRed1)]">
                  Cancelar
                </button>
                <button type="button" onClick={saveCategoria} className="bg-[var(--colorCyan)] text-[var(--colorWhite)] cursor-pointer px-4 py-2 rounded hover:bg-[var(--colorCyan1)]">
                  Salvar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal Deletar categoria */}
      {isDeleteModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center backdrop-blur-md bg-black/60">
          <div className="bg-[var(--colorOffWhite)] p-6 rounded-lg w-full sm:w-96 z-50">
            <h3 className="text-[var(--colorRed)] text-xl font-semibold mb-4">Deletar Produto</h3>
            <p>Você tem certeza que deseja excluir a categoria:<span className="font-semibold"> {categoriaToDelete?.name}</span>?</p>
            <div className="flex justify-center gap-5 mt-4 ">
              <button type="button" onClick={closeDeleteModal} className="bg-[var(--colorRed)] text-[var(--colorWhite)] cursor-pointer px-4 py-2 rounded hover:bg-[var(--colorRed1)]">
                Cancelar
              </button>
              <button type="button" onClick={() => deleteCategoria(categoriaToDelete?.id)} className="bg-[var(--colorCyan)] text-[var(--colorWhite)] cursor-pointer px-6 py-2 rounded hover:bg-[var(--colorCyan1)] ">
                Deletar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal Adicionar categoria */}
      {isAddModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center backdrop-blur-md bg-black/60">
          <div className="bg-[var(--colorOffWhite)] p-6 rounded-lg w-full sm:w-96 z-50">
            <h3 className="text-[var(--colorRed)] text-xl font-semibold mb-4">
              Adicionar categoria</h3>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="mb-4">
                <label className="block text-sm font-semibold"></label>
                <Input
                  type="text"
                  name="name"
                  placeholder="Digite a nova categoria"
                  value={newCategoria?.name || ""}
                  onChange={handleNewCategoriaInputChange}
                  className="w-full bg-[var(--colorWhite)]"
                />
              </div>
              <div className="flex justify-center gap-5 mt-4">
                <button type="button" onClick={closeAddModal} className="bg-[var(--colorRed)] text-[var(--colorWhite)] cursor-pointer px-4 py-2 rounded hover:bg-[var(--colorRed1)]">
                  Cancelar
                </button>
                <button type="button" onClick={handleAddCategoria} className="bg-[var(--colorCyan)] text-[var(--colorWhite)] cursor-pointer px-4 py-2 rounded hover:bg-[var(--colorCyan1)]">
                  Adicionar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
