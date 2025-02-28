import { GithubLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'

function Sobre() {
    return(
        <>
        {/*<NavbarInicio />*/}

        <section className='py-30 px-20 flex flex-col gap-10 items-center justify-center'>
            <div className='text-center'>
                <h1 className='text-3xl font-bold'>Conheça nosso talentoso time</h1>
                <p>Esse é o grupo de pessoas que transformou o Dish Dash em realidade, um time de <br />
                desenvolvedores altamente capacitados para trazer benefícios para você e o seu negócio!</p>
            </div>

            <div className='grid grid-cols-2 gap-10'>

                <section>
                    <div className='flex gap-3 items-center'>

                        <img src="https://ik.imagekit.io/grupo03/perfis/Andressa.png?updatedAt=1740534607718" alt="Foto de perfil" className='w-42 h-42 object-cover ' />

                        <div className='w-full'>
                            <h3 className='text-xl font-semibold mt-2'>Andressa Ferreira</h3>
                            <p className='text-md font-medium'>✨Desenvolvedora Full Stack JS</p>
                            <p className='text-sm'>Desenvolvedora FullStack e estudante de Segurança da Informação.
                            Ao longo da minha jornada, aprendi novas tecnologias que levaram esse projeto a realidade.</p>

                            <div className='flex gap-2 mt-3'>
                                <LinkedinLogo className='hover:text-[var(--colorCyan)] size-6 cursor-pointer'/>
                                <InstagramLogo className='hover:text-[var(--colorCyan)] size-6 cursor-pointer'/>
                                <GithubLogo className='hover:text-[var(--colorCyan)] size-6 cursor-pointer'/>
                            </div>
                        </div>

                    </div>
                </section>

                <section>
                    <div className='flex gap-3 items-center'>

                        <img src="https://ik.imagekit.io/grupo03/perfis/Beatriz.png?updatedAt=1740534608059" alt="Foto de perfil" className='w-42 h-42 object-cover ' />

                        <div className='w-full'>
                            <h3 className='text-xl font-semibold'>Beatriz Rodrigues</h3>
                            <p className='text-md font-medium'>✨Desenvolvedora Full Stack JS</p>
                            <p className='text-sm'>Jornalista em transição para a área de tecnologia e atualmente estudo Desenvolvimento FullStack.
                            Dedicada nessa nova jornada a dominar linguagens, frameworks e ferramentas que transformam ideias em realidade.</p>

                            <div className='flex gap-2 mt-3'>
                                <LinkedinLogo className='hover:text-[var(--colorCyan)] size-6 cursor-pointer'/>
                                <InstagramLogo className='hover:text-[var(--colorCyan)] size-6 cursor-pointer'/>
                                <GithubLogo className='hover:text-[var(--colorCyan)] size-6 cursor-pointer'/>
                            </div>
                        </div>

                    </div>
                </section>

                <section>
                    <div className='flex gap-3 items-center'>

                        <img src="https://ik.imagekit.io/grupo03/perfis/Emily.png?updatedAt=1740535030736" alt="Foto de perfil" className='w-42 h-42 object-cover ' />

                        <div className='w-full'>
                            <h3 className='text-xl font-semibold mt-2'>Emily Cristiny</h3>
                            <p className='text-md font-medium'>✨Desenvolvedora Full Stack JS</p>
                            <p className='text-sm'>Estudante de Engenharia de Software e desenvolvedora FullStack em mais de 3 linguagens de programação.
                            Autodidata e curiosa sobre a área da tecnologia.</p>

                            <div className='flex gap-2 mt-3'>
                                <LinkedinLogo className='hover:text-[var(--colorCyan)] size-6 cursor-pointer'/>
                                <InstagramLogo className='hover:text-[var(--colorCyan)] size-6 cursor-pointer'/>
                                <GithubLogo className='hover:text-[var(--colorCyan)] size-6 cursor-pointer'/>
                            </div>
                        </div>

                    </div>
                </section>

                <section>
                    <div className='flex gap-3 items-center'>

                        <img src="https://ik.imagekit.io/grupo03/perfis/Bruno.png?updatedAt=1740534609140" alt="Foto de perfil" className='w-42 h-42 object-cover ' />

                        <div className='w-full'>
                            <h3 className='text-xl font-semibold mt-1'>Bruno Lima</h3>
                            <p className='text-md font-medium'>✨Desenvolvedor Full Stack JS</p>
                            <p className='text-sm'>Como alguém que veio da área acadêmica e está migrando para a tecnologia, não deixo o TDAH me limitar, uso-o como meu superpoder para resolver problemas e criar projetos que se destacam.</p>

                            <div className='flex gap-2 mt-2'>
                                <LinkedinLogo className='hover:text-[var(--colorCyan)] size-6 cursor-pointer'/>
                                <InstagramLogo className='hover:text-[var(--colorCyan)] size-6 cursor-pointer'/>
                                <GithubLogo className='hover:text-[var(--colorCyan)] size-6 cursor-pointer'/>
                            </div>
                        </div>

                    </div>
                </section>

                <section>
                    <div className='flex gap-3 items-center'>

                        <img src="https://ik.imagekit.io/grupo03/perfis/Josadaque.png?updatedAt=1740534610231" alt="Foto de perfil" className='w-45 h-45 object-cover ' />

                        <div className='w-full'>
                            <h3 className='text-xl font-semibold mt-2'>Josadaque Ferreira</h3>
                            <p className='text-md font-medium'>✨Desenvolvedor Full Stack JS</p>
                            <p className='text-sm'>Como ex-ajudante de obra, migrei para a tecnologia. Sou apaixonado por back-end, autodidata e dedicado a aprender. Sempre me esforço para evoluir e transformar desafios em oportunidades.</p>

                            <div className='flex gap-2 mt-3'>
                                <LinkedinLogo className='hover:text-[var(--colorCyan)] size-6 cursor-pointer'/>
                                <InstagramLogo className='hover:text-[var(--colorCyan)] size-6 cursor-pointer'/>
                                <GithubLogo className='hover:text-[var(--colorCyan)] size-6 cursor-pointer'/>
                            </div>
                        </div>

                    </div>
                </section>

                <section>
                    <div className='flex gap-3 items-center'>

                        <img src="https://ik.imagekit.io/grupo03/perfis/Victor.png?updatedAt=1740534610684" alt="Foto de perfil" className='w-42 h-42 object-cover ' />

                        <div className='w-full'>
                            <h3 className='text-xl font-semibold mt-2'>Victor Pestana</h3>
                            <p className='text-md font-medium'>✨Desenvolvedor Full Stack JS</p>
                            <p className='text-sm'>Vivendo anos na Europa, adquiri inglês fluente. Jovem e ávido por aprendizado, estudo segurança da informação, determinado a conseguir minha primeira oportunidade no mercado e buscar novas experiências.</p>

                            <div className='flex gap-2 mt-3'>
                                <LinkedinLogo className='hover:text-[var(--colorCyan)] size-6 cursor-pointer'/>
                                <InstagramLogo className='hover:text-[var(--colorCyan)] size-6 cursor-pointer'/>
                                <GithubLogo className='hover:text-[var(--colorCyan)] size-6 cursor-pointer'/>
                            </div>
                        </div>

                    </div>
                </section>

                <section>
                    <div className='flex gap-3 items-center'>

                        <img src="https://ik.imagekit.io/grupo03/perfis/Fernanda.png?updatedAt=1740534608841" alt="Foto de perfil" className='w-42 h-42 object-cover ' />

                        <div className='w-full'>
                            <h3 className='text-xl font-semibold mt-2'>Fernanda Ribeiro</h3>
                            <p className='text-md font-medium'>✨Desenvolvedora Full Stack JS</p>
                            <p className='text-sm'>Formada em Adm, com expertise na área de design, e fazendo transição de carreira para a área da tecnologia.</p>

                            <div className='flex gap-2 mt-3'>
                                <LinkedinLogo className='hover:text-[var(--colorCyan)] size-6 cursor-pointer'/>
                                <InstagramLogo className='hover:text-[var(--colorCyan)] size-6 cursor-pointer'/>
                                <GithubLogo className='hover:text-[var(--colorCyan)] size-6 cursor-pointer'/>
                            </div>


                    </div>
                
                </div>
            </section>
        </div>

        </section>
        </>
    )
}
export default Sobre;