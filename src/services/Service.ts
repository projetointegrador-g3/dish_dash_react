import axios from "axios";


const api = axios.create({
    baseURL: 'https://dish-dash-1.onrender.com/'
    
})


// header: Object => Só passamos esse método quando o backend tem security
export const cadastrar = async (url: string, dados: Object, setDados: Function) => {  
const resposta = await api.post(url, dados)
    setDados(resposta.data)
}


// header: Object => Só passamos esse método quando o backend tem security
export const atualizar = async (url: string, dados: Object, setDados: Function ) => { 
    const resposta = await api.put(url, dados)
    setDados(resposta.data)
}

// header: Object => Só passamos esse método quando o backend tem security
export const buscar = async (url: string, setDados: Function) => {      
    const resposta = await api.get( url)
    setDados(resposta.data)
}


export const deletar = async(url: string) => {
    await api.delete(url)
}


export const curtir = async (url: string, setDados: Function) => {  
    const resposta = await api.put(url); // Endpoint para curtir  
    setDados(resposta.data); 
}

//Não precisa desse método pq ele faz exatamente a mesma coisa que o buscar
// export const listar = async(url: string, setDados: Function) => {
//     const resposta = await api.get(url)
//     setDados(resposta.data)
//   }
