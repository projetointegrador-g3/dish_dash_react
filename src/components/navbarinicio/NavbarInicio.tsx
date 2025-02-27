
function NavbarInicio (){
    return (
        <>
        <div>
            <header className="flex justify-around">
                <img className="w-30" src="https://i.imgur.com/pxKDdcY.png" alt="" />
                <nav className="flex items-center gap-4">
                    <ul className="flex gap-4">
                        <li><a href="#">Dashboard</a></li>
                        <li><a href="#Service">Serviços</a></li>
                        <li><a href="#About">Sobre Nós</a></li>
                        <li><a href="#Contact">Contato</a></li>
                    </ul>
                    <button className="bg-[#ffa314] p-1.5 px-5 rounded-md cursor-pointer text-[#fef0e1] hover:bg-[#d9291a] hover:scale-105">Login</button>
                </nav>
            </header>
        </div>
        </>
    )
}
export default NavbarInicio;