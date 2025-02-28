import { Bell } from "@phosphor-icons/react"
import Notificacao from "../../components/notifications/Notificacao"

function Home(){

  return (
    <> 
      <div className="flex items-center justify-between p-8 pt-0 pb-0 bg-[colorOffWhite] mt-5">

        <div className="flex items-center">
          <div className="relative">
            <h1 className="font-bold text-2xl mb-5">Dashboard</h1>

            {/* Tabela */}
            <div className="h-110 pl-4 pb-40 rounded-lg border-0 bg-black/7 focus:outline-none">
                <img src="https://ik.imagekit.io/grupo03/DishDash/Dashboard.png?updatedAt=1740705847653" 
                className="pt-2 "/>
            </div>

          </div>

            {/* Foto motorista */}
            <img className="relative right-[vh] top-25 w-130" 
            src="https://ik.imagekit.io/grupo03/DishDash/img-home.png?updatedAt=1740677662653"/>
        </div>
      </div>

        <div className="relative pl-5 mt-10">
          <h3 className="ml-3 flex items-center">
            <Bell className="mr-2"/>Notificações
          </h3>
          <Notificacao/>
        </div>


    </>
  )
}

export default Home