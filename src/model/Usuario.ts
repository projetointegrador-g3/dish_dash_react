import { Produto } from "./Produto"

export interface Usuario{

    id: number
    nome: string 
    usuario: string
    data_nasc: string
    senha: string
    foto: string 
    produto?: Produto | null
    
}
/** Obrigatoriamente tem que receber os dados conforme estão no  backend "SWAGGER" 
 * 
Usuario{
id*	[...]
nome*	string
usuario*	string
example: email@email.com.br
data_nasc*	string
senha*	string
foto*	string
produto*	[[...]]
}
*/