import { MagnifyingGlass, SignOut } from "@phosphor-icons/react";
import { useState, ChangeEvent, FormEvent } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

// Regra para não aparecer no Login, Sobre e page Inicial
function Navbar() {

    const navigate = useNavigate()

	const [nome, setNome] = useState<string>("")

	function handleBuscarProdutos(e: ChangeEvent<HTMLInputElement>){
		setNome(e.target.value)
	}

	function buscarProdutos(e: FormEvent<HTMLFormElement>){
		e.preventDefault()
		navigate(`/consultarnome/${nome}`)
		setNome('')
	}

    const location=useLocation()

    if (location.pathname === "/login" || location.pathname === "/" || location.pathname === "/sobre") {
        return (
            <>
            <div>
                <header className="flex justify-around">
                    <img className="w-30" src="https://i.imgur.com/pxKDdcY.png" alt="" />
                    <nav className="flex items-center gap-4">
                        <ul className="flex gap-4">
                            <li><Link to="/home">Dashboard</Link></li>
                            <li><a href="/servicos">Serviços</a></li>
                            <li><Link to="/sobre"> Sobre Nós</Link></li>
                            <li><a href="#contact">Contato</a></li>
                        </ul>
                        <button className="bg-[#ffa314] p-1.5 px-5 rounded-md cursor-pointer text-[#fef0e1] hover:bg-[#d9291a] hover:scale-105"><Link to="/login">Login</Link></button>
                    </nav>
                </header>
            </div>
            </>
        )}
    
    // Navbar com Busca, Perfil e Sair
    return (
        <>
        <header className="flex justify-between items-center navbar_dash
        p-8 pb-0 w-full mb-3 transition-all">
            
            <div className="relative pl-5">

            <form 
				className="flex items-center justify-center w-full"
				onSubmit={buscarProdutos}
			>
                <input 
                type="text" 
                placeholder="Buscar... "
                name="nome"
				required
				value={nome}
				onChange={(e: ChangeEvent<HTMLInputElement>) => handleBuscarProdutos(e)} 
                className="bg-black/7 pl-4 pr-10 py-2 rounded-lg border-0 text-stone-600 focus:outline-none"/>
                
                <button
                 type="submit">
                <MagnifyingGlass 
                className="absolute right-3 top-1/2 transform -translate-y-1/2 
                text-[#d9291a]" size={20}/>
                </button>


            </form>
                
            </div>

            <div className="flex items-center space-x-6 text-[#d9291a] pr-5">
                <span className="cursor-pointer font-bold">
                    <Link to="/perfil">Perfil</Link>
                </span>
                <span className="cursor-pointer flex items-center gap-1 font-bold"><Link to="/">Sair</Link><SignOut size={20}/></span>
            </div>
        </header>

        </>
    )
} export default Navbar
