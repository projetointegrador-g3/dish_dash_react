import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
})

export const cadastrar = async (url: string, dados: Object, setDados: Function, header: Object) => {
const resposta = await api.post(url, dados, header)
    setDados(resposta.data)
}


export const atualizar = async (url: string, dados: Object, setDados: Function, header: Object) => {
    const resposta = await api.put(url, dados, header)
    setDados(resposta.data)
}


export const buscar = async (url: string, setDados: Function, header: Object) => {
    const resposta = await api.get( url, header )
    setDados(resposta.data)
}

export const deletar = async(url: string, header: Object) => {
    await api.delete(url, header)
}

export const listar = async(url: string, setDados: Function) => {
    const resposta = await api.get(url)
    setDados(resposta.data)
  }