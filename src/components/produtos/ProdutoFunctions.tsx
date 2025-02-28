import { useState } from "react";

export const useProdutoFunctions = (initialProducts) => {
  const [listaProdutos, setListaProdutos] = useState(initialProducts);
  const [estaAbertoModalEdicao, setEstaAbertoModalEdicao] = useState(false);
  const [estaAbertoModalExclusao, setEstaAbertoModalExclusao] = useState(false);
  const [estaAbertoModalAdicao, setEstaAbertoModalAdicao] = useState(false);
  const [produtoEditado, setProdutoEditado] = useState(null);
  const [produtoParaExcluir, setProdutoParaExcluir] = useState(null);
  const [novoProduto, setNovoProduto] = useState({ nome: "", preco: "", foto: "", info_nutricionais: "" });

  // Função para formatar o preço
  const formatarPreco = (value) => {
    const parsedValue = parseFloat(value.replace(',', '.')).toFixed(2);  // Garantir que a vírgula seja tratada corretamente
    return `R$${parsedValue.replace('.', ',')}`;  // Substitui o ponto por vírgula
  };

  // Função para abrir o modal de edição
  const abrirModalEdicao = (produto) => {
    setProdutoEditado(produto);
    setEstaAbertoModalEdicao(true);
  };

  // Função para fechar o modal de edição
  const fecharModalEdicao = () => {
    setEstaAbertoModalEdicao(false);
    setProdutoEditado(null);
  };

  // Função para salvar o produto editado
  const salvarProduto = () => {
    const produtosAtualizados = listaProdutos.map((produto) =>
      produto.id === produtoEditado.id ? produtoEditado : produto
    );
    setListaProdutos(produtosAtualizados);
    fecharModalEdicao();
  };

  // Função para abrir o modal de exclusão
  const abrirModalExclusao = (produto) => {
    setProdutoParaExcluir(produto);
    setEstaAbertoModalExclusao(true);
  };

  // Função para fechar o modal de exclusão
  const fecharModalExclusao = () => {
    setEstaAbertoModalExclusao(false);
    setProdutoParaExcluir(null);
  };

  // Função para excluir o produto
  const excluirProduto = () => {
    const produtosAtualizados = listaProdutos.filter((produto) => produto.id !== produtoParaExcluir.id);
    setListaProdutos(produtosAtualizados);
    fecharModalExclusao();
  };

  // Função para lidar com mudanças no formulário de edição
  const lidarComMudancaDeInput = (e) => {
    const { name, value } = e.target;
    if (name === "preco") {
      setProdutoEditado((prevProduto) => ({
        ...prevProduto,
        [name]: formatarPreco(value),
      }));
    } else {
      setProdutoEditado((prevProduto) => ({
        ...prevProduto,
        [name]: value,
      }));
    }
  };

  // Função para abrir o modal de adição
  const abrirModalAdicao = () => {
    setNovoProduto({ nome: "", preco: "", foto: "", info_nutricionais: "" });
    setEstaAbertoModalAdicao(true);
  };

  // Função para fechar o modal de adição
  const fecharModalAdicao = () => {
    setEstaAbertoModalAdicao(false);
  };

  // Função para adicionar um novo produto
  const adicionarProduto = () => {
    const produtosAtualizados = [...listaProdutos, { ...novoProduto, id: Date.now() }];
    setListaProdutos(produtosAtualizados);
    fecharModalAdicao();
  };

  // Função para lidar com mudanças no formulário de novo produto
  const lidarComMudancaDeInputNovoProduto = (e) => {
    const { name, value } = e.target;
    if (name === "preco") {
      setNovoProduto((prevProduto) => ({
        ...prevProduto,
        [name]: formatarPreco(value),
      }));
    } else {
      setNovoProduto((prevProduto) => ({
        ...prevProduto,
        [name]: value,
      }));
    }
  };

  return {
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
  };
};
