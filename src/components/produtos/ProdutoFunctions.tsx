import { useState, useEffect } from "react";
import axios from 'axios';

export const useProdutoFunctions = () => {
  const [listaProdutos, setListaProdutos] = useState([]);
  const [estaAbertoModalEdicao, setEstaAbertoModalEdicao] = useState(false);
  const [estaAbertoModalExclusao, setEstaAbertoModalExclusao] = useState(false);
  const [estaAbertoModalAdicao, setEstaAbertoModalAdicao] = useState(false);
  const [produtoEditado, setProdutoEditado] = useState(null);
  const [produtoParaExcluir, setProdutoParaExcluir] = useState(null);
  const [novoProduto, setNovoProduto] = useState({ nome: "", preco: "", foto: "", info_nutricionais: "" });

  // Função para formatar o preço de entrada
  const formatarPreco = (value) => {
    // Verifica se o valor está vazio ou se é um valor inválido
    if (!value) return 'R$0,00';
  
    // Remove qualquer caractere que não seja número ou vírgula (para permitir vírgulas em valores decimais)
    const cleanedValue = value.replace(/[^\d,]/g, '');
  
    // Se o valor tiver algum formato inválido, retorna 'R$0,00'
    if (isNaN(cleanedValue) || cleanedValue === '') {
      return 'R$0,00';
    }
  
    // Garantir que o valor tenha pelo menos 2 casas decimais
    let valorFormatado = cleanedValue.replace(',', '.'); // Substitui vírgula por ponto para tratar como número
  
    // Adiciona o prefixo 'R$' ao valor
    return `R$${valorFormatado}`;
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
    if (!Array.isArray(listaProdutos)) {
      console.error("listaProdutos não é um array!");
      return;
    }
  
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

  const excluirProduto = async (id) => {
    try {
      const response = await fetch(`https://dish-dash-1.onrender.com/produtos/${id}`, {
        method: 'DELETE',
      });
  
      if (!response.ok) {
        throw new Error('Erro ao excluir o produto');
      }
  
      console.log('Produto excluído com sucesso');
  
      // Atualizar a lista de produtos após a exclusão
      await fetchProdutos();  // Aqui você chama a função que busca os produtos novamente
  
      // Fechar o modal de exclusão
      fecharModalExclusao();
    } catch (error) {
      console.error('Erro ao excluir o produto:', error);
    }
  };
  
  
  
  
  // Função para buscar os produtos novamente
  const fetchProdutos = async () => {
    try {
      const response = await axios.get('https://dish-dash-1.onrender.com/produtos');
      setListaProdutos(response.data);
    } catch (error) {
      console.error('Erro ao buscar os produtos', error);
    }
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
  const adicionarProduto = async () => {
    try {
      // Remover o símbolo "R$" e garantir que o valor seja um número
      const precoNumerico = parseFloat(novoProduto.preco.replace("R$", "").trim());
  
      // Validando se o preço é um número positivo
      if (isNaN(precoNumerico) || precoNumerico <= 0) {
        throw new Error("Preço deve ser um número positivo.");
      }
  
      // Validando a foto
      if (!novoProduto.foto || novoProduto.foto.trim() === "") {
        throw new Error("A foto não pode estar vazia.");
      }
  
      const response = await fetch("https://dish-dash-1.onrender.com/produtos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nome: novoProduto.nome,
          preco: precoNumerico, // Enviar preço já como número
          info_nutricionais: novoProduto.info_nutricionais,
          foto: novoProduto.foto,
          usuario: {
            id: 1,
            nome: "Seu nome",
            usuario: "email@exemplo.com",
            data_nasc: "1990-01-01",
            senha: "sua_senha",
            foto: "url_da_foto",
            produto: []
          }
        }),
      });
  
      if (!response.ok) {
        const errorMessage = await response.text();
        console.log("Erro no servidor:", errorMessage);
        throw new Error("Erro ao adicionar produto");
      }
  
      const data = await response.json();
      console.log("Produto adicionado com sucesso:", data);
    } catch (error) {
      console.error("Erro ao adicionar produto:", error);
    }
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

  // Buscar produtos da API quando o componente for montado
  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        const response = await axios.get('https://dish-dash-1.onrender.com/produtos');  
        setListaProdutos(response.data);
      } catch (error) {
        console.error('Erro ao buscar os produtos', error);
      }
    };
    fetchProdutos();
  }, []); // Array vazio significa que a requisição será feita apenas uma vez, quando o componente for montado.

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
