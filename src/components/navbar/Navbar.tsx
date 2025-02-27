import { MagnifyingGlass, SignOut } from "@phosphor-icons/react";

function Navbar() {
    return (
        <header className="flex justify-between items-center p-8 w-full">

            <div className="relative pl-5">
                <input type="text" placeholder="Buscar..." className="bg-black/7 pl-4 pr-10 py-2 rounded-lg border-0 focus:outline-none"/>
                <MagnifyingGlass className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#d9291a]" size={20}/>
            </div>

            <div className="flex items-center space-x-6 text-[#d9291a] pr-5">
                <span className="cursor-pointer font-bold">Perfil</span>
                <span className="cursor-pointer flex items-center gap-1 font-bold">Sair <SignOut size={20}/></span>
            </div>

        </header>
    )
} export default Navbar
