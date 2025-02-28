import { MagnifyingGlass, SignOut } from "@phosphor-icons/react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {

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
                            <li><a href="#service">Serviços</a></li>
                            <li><Link to="/sobre"> Sobre Nós</Link></li>
                            <li><a href="#contact">Contato</a></li>
                        </ul>
                        <button className="bg-[#ffa314] p-1.5 px-5 rounded-md cursor-pointer text-[#fef0e1] hover:bg-[#d9291a] hover:scale-105"><Link to="/login">Login</Link></button>
                    </nav>
                </header>
            </div>
            </>
        )}
    return (
        <header className="flex justify-between items-center p-8 pb-0 w-full mb-3">

            <div className="relative pl-5">
                <input type="text" placeholder="Buscar..." className="bg-black/7 pl-4 pr-10 py-2 rounded-lg border-0 focus:outline-none"/>
                <MagnifyingGlass className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#d9291a]" size={20}/>
            </div>

            <div className="flex items-center space-x-6 text-[#d9291a] pr-5">
                <span className="cursor-pointer font-bold"><Link to="/perfil">Perfil</Link></span>
                <span className="cursor-pointer flex items-center gap-1 font-bold"><Link to="/">Sair</Link><SignOut size={20}/></span>
            </div>

        </header>
    )
} export default Navbar
