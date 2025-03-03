import { Categoria } from "./Categoria"
import { Usuario } from "./Usuario"

export interface Produto{

id: number;
nome: string;
preco: number;
foto: string;
curtir: number;
info_nutricionais: string ;
categoria: Categoria | null;
usuario: Usuario | null;
}
/** Obrigatoriamente tem que receber os dados conforme estão no  backend "SWAGGER" 
 * 
Produto{
id*	[...]
nome*	[...]
preco*	[...]
foto*	[...]
info_nutricionais*	[...]
categoria*	Categoria{...}
usuario*	Usuario{...}
*/