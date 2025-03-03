export interface Categoria{
  

id: number;
categoria: string;
descricao: string ;
produto?: Categoria | null;
}
/** Obrigatoriamente tem que receber os dados conforme estão no  backend "SWAGGER" 
Categoria{
id*	[...]
categoria*	[...]
descricao*	[...]
produto*	[...]
}
*/