<<<<<<< HEAD
import { Link } from "react-router-dom"
import styles from './Navbar.module.css'

function Navbar() {
    return (
        <>
            <div className={styles.navbar_style}>
                <div className="container flex justify-between text-lg">

                    <div className='flex gap-4 items-center'>
                        <Link to='/categorias'>categorias</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
=======
import { MagnifyingGlass, SignOut } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

function Navbar() {
    if (location.pathname === "/login" || location.pathname === "/cadastro" || location.pathname === "/")
    return (
        <header className="flex justify-between items-center p-8 pb-0 w-full">

            <div className="relative pl-5">
                <input type="text" placeholder="Buscar..." className="bg-black/7 pl-4 pr-10 py-2 rounded-lg border-0 focus:outline-none"/>
                <MagnifyingGlass className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#d9291a]" size={20}/>
            </div>

            <div className="flex items-center space-x-6 text-[#d9291a] pr-5">
                <span className="cursor-pointer font-bold"><Link to="/perfil">Perfil</Link></span>
                <span className="cursor-pointer flex items-center gap-1 font-bold"><Link to="/sair">Sair</Link><SignOut size={20}/></span>
            </div>

        </header>
    )
} export default Navbar
>>>>>>> 01_home_busca_navbar
