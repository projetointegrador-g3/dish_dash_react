import { ChartDonut, Devices, Video } from '@phosphor-icons/react'

function Inicio (){
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
            <main>
                <section className="flex justify-around items-center pl-40 gap-4">
                    <div>
                        <h1 className="text-6xl font-bold mb-4">Pedido fácil,</h1>
                        <h1 className="text-6xl font-bold mb-4">entrega ágil!</h1>
                        
                        <p className='text-xl'>Cadastre o seu restaurante e ganhe mais clientes <br />
                         e impulsione suas vendas com o Dish Dash</p>
                        <div className="flex">
                            <p>🟨</p>
                            <p>🟩</p>
                            <p>🟥</p>
                            <p>🟪</p>
                        </div>
                    </div>

                    <img className="w-130" src="/inicio.gif" alt="Delivery Boy" />
                </section>

                <section className="text-center">
                    <div className="bg-[#d9291a] p-20 flex items-center justify-around text-[#fef0e1]">
                        <img className="w-100" src="https://ik.imagekit.io/grupo03/DishDash/gestao.svg?updatedAt=1740670005773" alt="" />
                        <div className="flex flex-col gap-4 text-start ">
                            <div className=''>
                                <p className='text-sm mb-2'>Sobre o projeto</p>
                                <h2 className="text-3xl font-semibold mb-2">Para Empresas</h2>
                                <p className='flex items-center gap-2 text-xl mb-2'><ChartDonut />Dashboards Personalizados para melhor gestão do seu negócio</p>
                                <p className='flex items-center gap-2 text-xl mb-2'><Devices />Sistema intuitivo e com ótimo custo benefício</p>
                                <p className='flex items-center gap-2 text-xl mb-2'><Video />Treinamento e suporte facilitado para toda a equipe</p>
                            </div>
                            <div>
                                <button className="bg-[#fef0e1] text-[#d9291a] p-2 rounded-md w-30 m-auto cursor-pointer hover:bg-[#d9291a] border border-[#fef0e1] hover:text-[#fef0e1]"> Ver mais </button>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                        <div className='mt-20'>
                            <h1 className="text-[#d9291a] text-3xl font-bold mb-4 text-center">Para o seu cliente</h1>
                        </div>
                    <div className='flex items-center justify-center gap-20 px-20 py-10'>
                        

                        <div className='flex flex-col items-center'>
                            <img className='w-60' src="https://ik.imagekit.io/grupo03/DishDash/pedido.svg?updatedAt=1740677098036" alt="Ilustração de uma jovem fazendo pedido no aplicativo" />
                            <h2 className='text-lg font-semibold'>Economia e variedade</h2>
                            <p>Promoções para todo tipo de refeição</p>
                        </div>

                        <div className='flex flex-col items-center'>
                            <img className='w-60 m-10' src="https://ik.imagekit.io/grupo03/DishDash/restaurantes.svg?updatedAt=1740677098949" alt="Ilustração de uma jovem fazendo pedido no aplicativo" />
                            <h2 className='text-lg font-semibold'>Restaurantes Verificados</h2>
                            <p>Promoções para todo tipo de refeição</p>
                        </div>

                        <div className='flex flex-col items-center'>
                            <img className='w-60' src="https://ik.imagekit.io/grupo03/DishDash/entrega.svg?updatedAt=1740677098857" alt="Ilustração de uma jovem fazendo pedido no aplicativo" />
                            <h2 className='text-lg font-semibold'>Economia e variedade</h2>
                            <p>Promoções para todo tipo de refeição</p>
                        </div>

                    </div>

                    
                </section>
            </main>
            <footer></footer>
        </div>
        </>
    )
}
export default Inicio;