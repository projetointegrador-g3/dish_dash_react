import { BowlSteam, Carrot, ChartDonut, Devices, Hamburger, Popcorn, Video } from '@phosphor-icons/react'
import Footer from '../../components/footer/Footer';

function Inicio (){
    return (
        <>
        <div>
            
            <main>
                <section className="flex justify-around items-center py-5 pl-22">
                    <div>
                        <h1 className="text-6xl font-bold mb-4">Pedido fácil,</h1>
                        <h1 className="text-6xl font-bold mb-4">entrega ágil!</h1>
                        
                        <p className='text-xl'>Cadastre o seu restaurante e ganhe mais clientes <br />
                         e impulsione suas vendas com o Dish Dash</p>
                        <div className="flex gap-3 mt-5">
                            <p className='bg-[#ffa314] rounded p-2 hover:scale-110'>
                                <Hamburger className='size-6'/>
                            </p>

                            <p className='bg-[#209DA8] rounded p-2 hover:scale-110'>
                                <Carrot className='size-6'/>
                            </p>

                            <p className='bg-[#D9291A] rounded p-2 hover:scale-110 '>
                                <BowlSteam  className='size-6'/>
                            </p>

                            <p className='bg-[#8F20A8] rounded p-2 hover:scale-110'>
                                <Popcorn className='size-6'/>
                            </p>
                            
                        </div>
                    </div>

                    <img className="w-130" src="/inicio.gif" alt="Delivery Boy" />
                </section>

                <section id="service" className="text-center ">
                    <div className="bg-[#d9291a] p-20 flex items-center justify-around text-[#fef0e1] pl-25">
                        <img className="w-90" src="https://ik.imagekit.io/grupo03/DishDash/gestao.svg?updatedAt=1740670005773" alt="" />
                        <div className="flex flex-col gap-4 text-start ">
                            <div>
                                <p className='text-sm mb-2'>Sobre o projeto</p>
                                <h2 className="text-3xl font-semibold mb-2">Para Empresas</h2>
                                <p className='flex items-center gap-2 text-md mb-2'><ChartDonut />Dashboards personalizados para melhor gestão do seu negócio</p>
                                <p className='flex items-center gap-2 text-md mb-2'><Devices />Sistema intuitivo e com ótimo custo benefício</p>
                                <p className='flex items-center gap-2 text-md mb-2'><Video />Treinamento e suporte facilitado para toda a equipe</p>
                            </div>
                            <div>
                                <button className="bg-[#fef0e1] text-[#d9291a] p-2 rounded-md w-30 m-auto cursor-pointer hover:bg-[#d9291a] border border-[#fef0e1] hover:text-[#fef0e1]"> Ver mais </button>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='py-20'>
                        <div>
                            <h1 className="text-[#d9291a] text-3xl font-bold mb-4 text-center">Para o seu cliente</h1>
                        </div>
                    <div className='flex items-center justify-center gap-25 py-10'>
                        

                        <div className='flex flex-col items-center'>
                            <img className='w-60 hover:scale-110 hover:animate-wiggle' src="https://ik.imagekit.io/grupo03/DishDash/pedido.svg?updatedAt=1740677098036" alt="Ilustração de uma jovem fazendo pedido no aplicativo" />
                            <h2 className='text-lg font-semibold'>Economia e variedade</h2>
                            <p>Promoções para todo tipo de refeição</p>
                        </div>

                        <div className='flex flex-col items-center'>
                            <img className='w-60 m-10 hover:scale-110 hover:animate-wiggle' src="https://ik.imagekit.io/grupo03/DishDash/restaurantes.svg?updatedAt=1740677098949" alt="Ilustração de uma jovem fazendo pedido no aplicativo" />
                            <h2 className='text-lg font-semibold'>Restaurantes Verificados</h2>
                            <p>Para sua segurança e satisfação</p>
                        </div>

                        <div className='flex flex-col items-center'>
                            <img className='w-60 hover:scale-110 hover:animate-wiggle' src="https://ik.imagekit.io/grupo03/DishDash/entrega.svg?updatedAt=1740677098857" alt="Ilustração de uma jovem fazendo pedido no aplicativo" />
                            <h2 className='text-lg font-semibold'>Fácil de pedir</h2>
                            <p>Rápido de chegar</p>
                        </div>

                    </div>

                    
                </section>
            </main>
            <Footer />
        </div>
        </>
    )
}
export default Inicio;