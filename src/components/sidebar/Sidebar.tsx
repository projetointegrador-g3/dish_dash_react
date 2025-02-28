import { House, List, Package, Gear } from "@phosphor-icons/react";
import { Link, useLocation } from "react-router-dom";

function Sidebar() {

    const location=useLocation()

        if (location.pathname === "/login" || location.pathname === "/" ||  location.pathname === "/sobre"){
            return (
            <>
            <div className="flex">
                <div className="hidden"></div>
            </div>
            </>
        )}

    return (
        <aside className="w-20 h-screen bg-[#d9291a] text-white flex flex-col items-center py-6 space-y-6 fixed left-0 top-0">

            <div className="w-12"><img src="https://ik.imagekit.io/grupo03/DishDash/logo-dd.png?updatedAt=1740669256073" alt="Logo da DishDash"/></div>

            <nav className="flex flex-col space-y-6 mt-10">
            <Link to="/home"><House size={24} className="cursor-pointer"/></Link>
            <Link to="/categorias"><List size={24} className="cursor-pointer"/></Link>
            <Link to="/produtos"><Package size={24} className="cursor-pointer"/></Link>
            <Link to="/configuracoes"><div className="mt-60"><Gear size={24} className="cursor-pointer"/></div></Link>
            </nav>

        </aside>
    )
} export default Sidebar