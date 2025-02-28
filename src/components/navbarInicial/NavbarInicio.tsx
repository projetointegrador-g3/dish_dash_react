import { Link } from "react-router-dom";

function NavbarInicio (){
    return (
        <>
            <header className="flex justify-around gap-70 border-b border-stone-400" >
                <a href="/">
                <img className="w-20" src="https://i.imgur.com/pxKDdcY.png" alt="" />
                </a>
                
                <nav className="flex items-center gap-4 ">
                    <ul className="flex gap-4">
                        <li><Link to="/home">Dashboard</Link></li>
                        <li><a href="/#service">Serviços</a></li>
                        <li><Link to="/sobre"> Sobre Nós</Link></li>
                        <li><a href="#contact">Contato</a></li>
                    </ul>
                    <button className="bg-[#ffa314] p-1.5 px-5 rounded-md cursor-pointer text-[#fef0e1] hover:bg-[#d9291a] hover:scale-105"><Link to="/login">Login</Link></button>
                </nav>
            </header>
        </>
    )
}
export default NavbarInicio;