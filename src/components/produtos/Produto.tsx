import { useEffect, useState } from "react";
import { useProdutoFunctions } from "./ProdutoFunctions";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";
import "./produto.css";

export default function Produto() {
  const [listaProdutos, setListaProdutos] = useState([]);
  const [categorias, setCategorias] = useState([]); // Estado para as categorias
  const [erroCarregamento, setErroCarregamento] = useState(false); // Estado para erro
  const {
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

  const Categorias = {};

  // Carregar os produtos e categorias da API ao montar o componente
  useEffect(() => {
    // Função de carregamento de produtos
    const fetchProdutos = async () => {
      try {
        const response = await fetch("https://dish-dash-1.onrender.com/produtos");
        const data = await response.json();

        if (!response.ok) {
          throw new Error("Falha ao carregar produtos");
        }

        // Parse 'info_nutricionais' dentro de cada produto
        const produtosComInfoNutricionais = data.map((produto: any) => ({
          ...produto,
          info_nutricionais: produto.info_nutricionais
            ? produto.info_nutricionais.startsWith("{")
              ? JSON.parse(produto.info_nutricionais)
              : produto.info_nutricionais
            : {},
        }));

        setListaProdutos(produtosComInfoNutricionais);
        setErroCarregamento(false);
      } catch (error) {
        console.error("Erro ao carregar os produtos:", error);
        setErroCarregamento(true);
      }
    };

    // Função de carregamento de categorias
    const fetchCategorias = async () => {
      try {
        const response = await fetch("https://dish-dash-1.onrender.com/categoria");

        if (!response.ok) {
          throw new Error("Erro ao carregar categorias");
        }

        const textResponse = await response.text();
        console.log("Resposta das categorias:", textResponse); // Para depuração

        try {
          const data = JSON.parse(textResponse); // Tente parsear manualmente
          setCategorias(data);
        } catch (e) {
          console.error("Erro ao parsear categorias:", e);
        }
      } catch (error) {
        console.error("Erro ao carregar as categorias:", error);
      }
    };

    fetchProdutos();
    fetchCategorias();
  }, []); // O array vazio garante que a chamada ocorra uma vez

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

        {erroCarregamento && (
          <p className="text-red-500 text-center mb-4">
            Houve um erro ao carregar os produtos. Tente novamente.
          </p>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 pr-3 justify-center">
          {listaProdutos.map((produto, index) => (
            <div
              key={produto.id || index}
              className="bg-white p-4 rounded-lg shadow-2xl relative"
            >
              {/* Exibição da imagem do produto */}
              {produto.foto && (
                <img
                  src={produto.foto} // A URL da foto do produto
                  alt={produto.nome || "Imagem do Produto"}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
              )}

              <h3 className="text-xl font-semibold mt-3 text-center">
                {produto.nome || "Sem Nome"}
              </h3>
              <p className="text-gray-600 text-lg text-center mt-1">
                {produto.preco ? `R$ ${produto.preco}` : "Preço indisponível"}
              </p>
              <p className="text-gray-500 text-lg text-center mt-1">
                {produto.categoria
                  ? `Categoria: ${produto.categoria}`
                  : "Categoria não informada"}
              </p>
              <p className="text-gray-500 text-lg text-center mt-1">
                {produto.info_nutricionais &&
                typeof produto.info_nutricionais === "object"
                  ? Object.entries(produto.info_nutricionais).map(([key, value]) => (
                      <span key={key} className="block">{`${key}: ${value}`}</span>
                    ))
                  : produto.info_nutricionais
                  ? produto.info_nutricionais // Se for uma string (caso de dado não-objeto)
                  : "Sem informações nutricionais"}
              </p>

              <div className="absolute top-2 right-2 flex gap-2">
                <button
                  className="text-gray-500 hover:text-blue-500"
                  onClick={() => abrirModalEdicao(produto)}
                >
                  <FaEdit />
                </button>
                <button
                  className="text-gray-500 hover:text-red-500"
                  onClick={() => abrirModalExclusao(produto)}
                >
                  <FaTrash />
                </button>
              </div>
            </div>
          ))}
        </div>

      </main>

      {/* Modal de edição */}
      {estaAbertoModalEdicao && (
        <div className="fixed inset-0 flex justify-center items-center backdrop-blur-md bg-black/60">
          <div className="bg-[var(--colorOffWhite)] p-6 rounded-lg w-full sm:w-96 z-50">
            <h3 className="text-[var(--colorRed)] text-xl font-semibold mb-4">
              Editar Produto
            </h3>
            <form onSubmit={(e) => e.preventDefault()}>
              {/* Campos de edição */}
              <div className="mb-4">
                <label className="block text-sm font-semibold">Nome</label>
                <input
                  type="text"
                  name="nome"
                  value={produtoEditado?.nome || ""}
                  onChange={lidarComMudancaDeInput}
                  className="border px-4 py-2 rounded w-full bg-white"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-semibold">Preço</label>
                <input
                  type="text"
                  name="preco"
                  value={produtoEditado?.preco || ""}
                  onChange={lidarComMudancaDeInput}
                  className="border px-4 py-2 rounded w-full bg-white"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-semibold">Categoria</label>
                <select
                  name="categoria"
                  value={produtoEditado?.categoria || ""}
                  onChange={lidarComMudancaDeInput}
                  className="border px-4 py-2 rounded w-full bg-white"
                >
                  <option value="" disabled>
                    Selecione uma categoria
                  </option>
                  {categorias.map((categoria) => (
                    <option key={categoria.id} value={categoria.id}>
                      {categoria.categoria}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-semibold">
                  Informações Nutricionais
                </label>
                <input
                  type="text"
                  name="info_nutricionais"
                  value={produtoEditado?.info_nutricionais || ""}
                  onChange={lidarComMudancaDeInput}
                  className="border px-4 py-2 rounded w-full bg-white"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-semibold">Foto (URL)</label>
                <input
                  type="text"
                  name="foto"
                  value={produtoEditado?.foto || ""}
                  onChange={lidarComMudancaDeInput}
                  className="border px-4 py-2 rounded w-full bg-white"
                  placeholder="Insira o link da imagem"
                />
              </div>
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={fecharModalEdicao}
                  className="text-[var(--colorBlack)] bg-red-600 px-4 py-2 rounded"
                >
                  Cancelar
                </button>
                <button
                  type="button"
                  onClick={salvarProduto}
                  className="bg-green-500 text-white px-4 py-2 rounded"
                >
                  Salvar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal de adição */}
      {estaAbertoModalAdicao && (
        <div className="fixed inset-0 flex justify-center items-center backdrop-blur-md bg-black/60">
          <div className="bg-[var(--colorOffWhite)] p-6 rounded-lg w-full sm:w-96 z-50">
            <h3 className="text-[var(--colorRed)] text-xl font-semibold mb-4">
              Adicionar Produto
            </h3>
            <form onSubmit={(e) => e.preventDefault()}>
              {/* Campos de adição */}
              <div className="mb-4">
                <label className="block text-sm font-semibold">Nome</label>
                <input
                  type="text"
                  name="nome"
                  value={novoProduto.nome || ""}
                  onChange={lidarComMudancaDeInputNovoProduto}
                  className="border px-4 py-2 rounded w-full bg-white"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-semibold">Preço</label>
                <input
                  type="text"
                  name="preco"
                  value={novoProduto.preco || ""}
                  onChange={lidarComMudancaDeInputNovoProduto}
                  className="border px-4 py-2 rounded w-full bg-white"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-semibold">Categoria</label>
                <select
                  name="categoria"
                  value={novoProduto.categoria || ""}
                  onChange={lidarComMudancaDeInputNovoProduto}
                  className="border px-4 py-2 rounded w-full bg-white"
                >
                  <option value="" disabled>
                    Selecione uma categoria
                  </option>
                  {categorias.map((categoria) => (
                    <option key={categoria.id} value={categoria.id}>
                      {categoria.categoria}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-semibold">
                  Informações Nutricionais
                </label>
                <input
                  type="text"
                  name="info_nutricionais"
                  value={novoProduto.info_nutricionais || ""}
                  onChange={lidarComMudancaDeInputNovoProduto}
                  className="border px-4 py-2 rounded w-full bg-white"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-semibold">Foto (URL)</label>
                <input
                  type="text"
                  name="foto"
                  value={novoProduto.foto || ""}
                  onChange={lidarComMudancaDeInputNovoProduto}
                  className="border px-4 py-2 rounded w-full bg-white"
                  placeholder="Insira o link da imagem"
                />
              </div>
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={fecharModalAdicao}
                  className="text-[var(--colorBlack)] bg-red-600 px-4 py-2 rounded"
                >
                  Cancelar
                </button>
                <button
                  type="button"
                  onClick={adicionarProduto}
                  className="bg-green-500 text-white px-4 py-2 rounded"
                >
                  Adicionar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal de exclusão */}
      {estaAbertoModalExclusao && produtoParaExcluir && (
        <div className="fixed inset-0 flex justify-center items-center backdrop-blur-md bg-black/60">
          <div className="bg-[var(--colorOffWhite)] p-6 rounded-lg w-full sm:w-96 z-50">
            <h3 className="text-red-600 text-xl font-semibold mb-4">
              Confirmar Exclusão
            </h3>
            <p>
              Tem certeza de que deseja excluir o produto{" "}
              <span className="font-bold">{produtoParaExcluir.nome}</span>?
            </p>
            <div className="flex justify-between mt-4">
              <button
                type="button"
                onClick={fecharModalExclusao}
                className="text-[var(--colorBlack)] bg-red-600 px-4 py-2 rounded"
              >
                Cancelar
              </button>
              <button
                type="button"
                onClick={() => excluirProduto(produtoParaExcluir.id)}
                className="bg-green-500 text-white px-4 py-2 rounded"
              >
                Excluir
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
