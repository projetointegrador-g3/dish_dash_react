import { Bell } from "@phosphor-icons/react"
import Notificacao from "../../components/notifications/Notificacao"

function Home(){

  return (
    <>
      <div className="flex items-center justify-between p-8 pt-0 pb-0 bg-[colorOffWhite] mt-5">
        <div className="flex items-center w-full">
          <div className="relative flex-1">
            <h1 className="font-bold text-2xl mb-5">Dashboard</h1>

            {/* Tabela */}
            <div className="h-110  pl-4 pb-40 rounded-lg border-0 shadow-md bg-black/7 focus:outline-none">
              <img
                src="https://ik.imagekit.io/grupo03/DishDash/Dashboard.png?updatedAt=1740705847653"
                className="pt-2 "
              />
            </div>
          </div>

          {/* Notificações no lugar da imagem do motorista */}
          <div className="relative w-130 px-4 mx-4 rounded-lg">
            <h3 className="flex items-center mb-2 text-lg font-semibold mt-10">
              <Bell className="mr-2" /> Notificações
            </h3>
            <Notificacao />  
            
            {/* Foto motorista */}
            <div className="mt-15">
              <img className=" w-130" 
              src="https://ik.imagekit.io/grupo03/DishDash/img-home.png?updatedAt=1740677662653"/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home