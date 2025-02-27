import { useProdutoFunctions } from "./ProdutoFunctions"; 
import { FaSearch, FaEdit, FaTrash, FaPlus, FaSignOutAlt } from "react-icons/fa";
import "./produto.css";
import home from './assets/home.png';
import categorias from './assets/categorias.png';
import produtos from './assets/produtos.png';
import configuracoes from './assets/configuracoes.png';
import image from './assets/image.png';

const initialProducts = [
  {
    id: 1,
    name: "Hamburger",
    price: "R$25.90",
    category: "FastFood",
    image: "🍔",
  },
  {
    id: 2,
    name: "HotDog",
    price: "R$15.90",
    category: "FastFood",
    image: "🌭",
  },
];

export default function Produto() {
  const {
    productList,
    isEditModalOpen,
    isDeleteModalOpen,
    isAddModalOpen,  
    editedProduct,
    productToDelete,
    newProduct,  
    openEditModal,
    closeEditModal,
    saveProduct,
    openDeleteModal,
    closeDeleteModal,
    deleteProduct,
    openAddModal,
    closeAddModal,  
    handleInputChange,
    handleAddProduct,  
    handleNewProductInputChange, 
  } = useProdutoFunctions(initialProducts);

  return (
    <div className="flex flex-col md:flex-row h-screen font-poppins">
      {/* Sidebar */}
      {/* Pode adicionar a sidebar aqui, se necessário */}

      {/* Main Content */}
      <main className="flex-1 p-8 bg-[var(--colorOffWhite)]">
        <h2 className="text-2xl font-semibold mb-3 flex flex-col items-center sm:flex-row sm:justify-between gap-4 sm:gap-0">
          <span>Produtos</span>
          <button 
            onClick={openAddModal}
            className="bg-[var(--colorYellow)] text-black px-4 py-3 rounded flex items-center gap-3 hover:bg-[var(--colorYellowDark)] hover:scale-105 transition duration-300 ease-in-out"
          >
            <FaPlus /> Adicionar novo produto
          </button>
        </h2>

        {/* Ajuste da grid para centralizar os itens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 pr-3 justify-center">
          {productList.map((product) => (
            <div key={product.id} className="bg-white p-4 rounded-lg shadow-2xl relative">
              <span className="text-4xl block text-center">{product.image}</span>
              <h3 className="text-xl font-semibold mt-3 text-center">{product.name}</h3>
              <p className="text-gray-600 text-lg text-center mt-1">{product.price}</p>
              <p className="text-gray-500 text-lg text-center mt-1">Categoria: {product.category}</p>
              <div className="absolute top-2 right-2 flex gap-2">
                {/* Botões de editar e excluir */}
                <button className="text-gray-500 hover:text-blue-500" onClick={() => openEditModal(product)}>
                  <FaEdit />
                </button>
                <button className="text-gray-500 hover:text-red-500" onClick={() => openDeleteModal(product)}>
                  <FaTrash />
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Modal Editar Produto */}
      {isEditModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center backdrop-blur-md bg-black/60">
          <div className="bg-[var(--colorOffWhite)] p-6 rounded-lg w-full sm:w-96 z-50">
            <h3 className="text-[var(--colorRed)] text-xl font-semibold mb-4">Editar Produto</h3>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="mb-4">
                <label className="block text-sm font-semibold">Nome</label>
                <input
                  type="text"
                  name="name"
                  value={editedProduct?.name || ""}
                  onChange={handleInputChange}
                  className="border px-4 py-2 rounded w-full bg-white"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-semibold">Preço</label>
                <input
                  type="text"
                  name="price"
                  value={editedProduct?.price || ""}
                  onChange={handleInputChange}
                  className="border px-4 py-2 rounded w-full bg-white"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-semibold">Categoria</label>
                <input
                  type="text"
                  name="category"
                  value={editedProduct?.category || ""}
                  onChange={handleInputChange}
                  className="border px-4 py-2 rounded w-full bg-white"
                />
              </div>
              <div className="flex justify-between">
                <button type="button" onClick={closeEditModal} className="text-[var(--colorBlack)] bg-red-600 px-4 py-2 rounded">
                  Cancelar
                </button>
                <button type="button" onClick={saveProduct} className="bg-green-500 text-white px-4 py-2 rounded">
                  Salvar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal Deletar Produto */}
      {isDeleteModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center backdrop-blur-md bg-black/60">
          <div className="bg-[var(--colorOffWhite)] p-6 rounded-lg w-full sm:w-96 z-50">
            <h3 className="text-[var(--colorRed)] text-xl font-semibold mb-4">Deletar Produto</h3>
            <p>Você tem certeza que deseja excluir o produto: {productToDelete?.name}?</p>
            <div className="flex justify-between mt-4">
              <button type="button" onClick={closeDeleteModal} className="text-[var(--colorBlack)] bg-gray-300 px-4 py-2 rounded">
                Cancelar
              </button>
              <button type="button" onClick={() => deleteProduct(productToDelete?.id)} className="bg-red-600 text-white px-4 py-2 rounded">
                Deletar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal Adicionar Produto */}
      {isAddModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center backdrop-blur-md bg-black/60">
          <div className="bg-[var(--colorOffWhite)] p-6 rounded-lg w-full sm:w-96 z-50">
            <h3 className="text-[var(--colorRed)] text-xl font-semibold mb-4">Adicionar Produto</h3>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="mb-4">
                <label className="block text-sm font-semibold">Nome</label>
                <input
                  type="text"
                  name="name"
                  value={newProduct?.name || ""}
                  onChange={handleNewProductInputChange}
                  className="border px-4 py-2 rounded w-full bg-white"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-semibold">Preço</label>
                <input
                  type="text"
                  name="price"
                  value={newProduct?.price || ""}
                  onChange={handleNewProductInputChange}
                  className="border px-4 py-2 rounded w-full bg-white"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-semibold">Categoria</label>
                <input
                  type="text"
                  name="category"
                  value={newProduct?.category || ""}
                  onChange={handleNewProductInputChange}
                  className="border px-4 py-2 rounded w-full bg-white"
                />
              </div>
              <div className="flex justify-between">
                <button type="button" onClick={closeAddModal} className="bg-red-600 px-4 py-2 rounded">
                  Cancelar
                </button>
                <button type="button" onClick={handleAddProduct} className="bg-green-500 text-white px-4 py-2 rounded">
                  Adicionar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
