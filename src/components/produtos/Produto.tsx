import { useProdutoFunctions } from "./ProdutoFunctions";
import { FaSearch, FaEdit, FaTrash, FaPlus } from "react-icons/fa";
import "./produto.css";

export default function Produto() {
  const {
    listaProdutos,
    estaAbertoModalEdicao,
    estaAbertoModalExclusao,
    estaAbertoModalAdicao,
    produtoEditado,
    produtoParaExcluir,
    novoProduto,
    abrirModalEdicao,
    fecharModalEdicao,
    salvarProduto,
    abrirModalExclusao,
    fecharModalExclusao,
    excluirProduto,
    abrirModalAdicao,
    fecharModalAdicao,
    lidarComMudancaDeInput,
    adicionarProduto,
    lidarComMudancaDeInputNovoProduto,
  } = useProdutoFunctions();

  return (
    <div className="flex flex-col md:flex-row h-screen font-poppins">
      <main className="flex-1 p-8 bg-[var(--colorOffWhite)]">
        <h2 className="text-2xl font-semibold mb-3 flex flex-col items-center sm:flex-row sm:justify-between gap-4 sm:gap-0">
          <span>Produtos</span>
          <button 
            onClick={abrirModalAdicao}
            className="bg-[var(--colorYellow)] text-black px-4 py-3 rounded flex items-center gap-3 hover:bg-[var(--colorYellowDark)] hover:scale-105 transition duration-300 ease-in-out"
          >
            <FaPlus /> Adicionar novo produto
          </button>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 pr-3 justify-center">
          {listaProdutos.map((produto) => (
            <div key={produto.id} className="bg-white p-4 rounded-lg shadow-2xl relative">
              <h3 className="text-xl font-semibold mt-3 text-center">{produto.nome}</h3>
              <p className="text-gray-600 text-lg text-center mt-1">{produto.preco}</p>
              <p className="text-gray-500 text-lg text-center mt-1">Categoria: {produto.categoria}</p>
              <p className="text-gray-500 text-lg text-center mt-1">Info Nutricionais: {produto.info_nutricionais}</p>
              <div className="absolute top-2 right-2 flex gap-2">
                <button className="text-gray-500 hover:text-blue-500" onClick={() => abrirModalEdicao(produto)}>
                  <FaEdit />
                </button>
                <button className="text-gray-500 hover:text-red-500" onClick={() => abrirModalExclusao(produto)}>
                  <FaTrash />
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {estaAbertoModalEdicao && (
        <div className="fixed inset-0 flex justify-center items-center backdrop-blur-md bg-black/60">
          <div className="bg-[var(--colorOffWhite)] p-6 rounded-lg w-full sm:w-96 z-50">
            <h3 className="text-[var(--colorRed)] text-xl font-semibold mb-4">Editar Produto</h3>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="mb-4">
                <label className="block text-sm font-semibold">Nome</label>
                <input type="text" name="nome" value={produtoEditado?.nome || ""} onChange={lidarComMudancaDeInput} className="border px-4 py-2 rounded w-full bg-white" />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-semibold">Preço</label>
                <input type="text" name="preco" value={produtoEditado?.preco || ""} onChange={lidarComMudancaDeInput} className="border px-4 py-2 rounded w-full bg-white" />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-semibold">Categoria</label>
                <input type="text" name="categoria" value={produtoEditado?.categoria || ""} onChange={lidarComMudancaDeInput} className="border px-4 py-2 rounded w-full bg-white" />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-semibold">Informações Nutricionais</label>
                <input type="text" name="info_nutricionais" value={produtoEditado?.info_nutricionais || ""} onChange={lidarComMudancaDeInput} className="border px-4 py-2 rounded w-full bg-white" />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-semibold">Foto</label>
                <input type="file" name="foto" onChange={(e) => lidarComMudancaDeInput(e, 'foto')} className="border px-4 py-2 rounded w-full bg-white" />
              </div>
              <div className="flex justify-between">
                <button type="button" onClick={fecharModalEdicao} className="text-[var(--colorBlack)] bg-red-600 px-4 py-2 rounded">Cancelar</button>
                <button type="button" onClick={salvarProduto} className="bg-green-500 text-white px-4 py-2 rounded">Salvar</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {estaAbertoModalAdicao && (
        <div className="fixed inset-0 flex justify-center items-center backdrop-blur-md bg-black/60">
          <div className="bg-[var(--colorOffWhite)] p-6 rounded-lg w-full sm:w-96 z-50">
            <h3 className="text-[var(--colorRed)] text-xl font-semibold mb-4">Adicionar Produto</h3>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="mb-4">
                <label className="block text-sm font-semibold">Nome</label>
                <input type="text" name="nome" value={novoProduto.nome || ""} onChange={lidarComMudancaDeInputNovoProduto} className="border px-4 py-2 rounded w-full bg-white" />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-semibold">Preço</label>
                <input type="text" name="preco" value={novoProduto.preco || ""} onChange={lidarComMudancaDeInputNovoProduto} className="border px-4 py-2 rounded w-full bg-white" />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-semibold">Categoria</label>
                <input type="text" name="categoria" value={novoProduto.categoria || ""} onChange={lidarComMudancaDeInputNovoProduto} className="border px-4 py-2 rounded w-full bg-white" />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-semibold">Informações Nutricionais</label>
                <input type="text" name="info_nutricionais" value={novoProduto.info_nutricionais || ""} onChange={lidarComMudancaDeInputNovoProduto} className="border px-4 py-2 rounded w-full bg-white" />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-semibold">Foto</label>
                <input type="file" name="foto" onChange={(e) => lidarComMudancaDeInputNovoProduto(e, 'foto')} className="border px-4 py-2 rounded w-full bg-white" />
              </div>
              <div className="flex justify-between">
                <button type="button" onClick={fecharModalAdicao} className="text-[var(--colorBlack)] bg-red-600 px-4 py-2 rounded">Cancelar</button>
                <button type="button" onClick={adicionarProduto} className="bg-green-500 text-white px-4 py-2 rounded">Adicionar</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
