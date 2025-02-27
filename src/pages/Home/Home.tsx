import { Bell } from "@phosphor-icons/react"
import { MagnifyingGlass } from "react-loader-spinner"
import Notificacao from "../../components/notifications/Notificacao"

function Home(){
  return (
    <> 
      <div className="flex items-center justify-between p-8 bg-[colorOffWhite] w-full">

        <div className="flex items-center">
          <div className="relative">
            <h1 className="font-bold mb-5 text-2xl">Dashboard</h1>  
            <input type="text" placeholder="Texto" className="w-170 h-60 pl-4 pb-40 rounded-lg border-0 bg-black/7 focus:outline-none"/>
          </div>
            <img className="relative right-[135px] w-130 mr-4" src="https://ik.imagekit.io/grupo03/DishDash/img-home.png?updatedAt=1740677662653"></img>
        </div>
      </div>

        <div className="relative pl-5">
          <h3 className="ml-3 flex items-center">
            <Bell className="mr-2"/>Notificações
          </h3>
          <Notificacao/>
        </div>

      
    </>
  )
}

export default Home
