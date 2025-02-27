import { House, List, Package, Gear } from "@phosphor-icons/react";

function Sidebar() {
    return (
        <aside className="w-20 h-screen bg-[#d9291a] text-white flex flex-col items-center py-6 space-y-6 fixed left-0 top-0">

            <div className="w-12"><img src="https://ik.imagekit.io/grupo03/DishDash/logo-dd.png?updatedAt=1740669256073" alt="Logo da DishDash"/></div>

            <nav className="flex flex-col space-y-6 mt-10">
                <House size={24} className="cursor-pointer"/>
                <List size={24} className="cursor-pointer"/>
                <Package size={24} className="cursor-pointer"/>
                <div className="mt-60"><Gear size={24} className="cursor-pointer"/></div>
            </nav>

        </aside>
    )
} export default Sidebar
