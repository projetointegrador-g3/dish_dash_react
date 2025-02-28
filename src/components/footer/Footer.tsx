import { FacebookLogo, InstagramLogo, LinkedinLogo, YoutubeLogo, } from '@phosphor-icons/react'

function Footer() {
    return (
        <>
            <footer className='bg-[#d9291a] text-[#fef0e1] flex items-center justify-around gap-5 py-10 pr-20 rounded'>
                <div>
                    <img className='w-15' src="https://ik.imagekit.io/grupo03/DishDash/logo-dd.png?updatedAt=1740669256073" alt="" />
                    <p>Seu restaurante favorito, em casa.</p>
                </div>

                <div>
                    <p><a href="" className='hover:underline'>Termos e Condições</a></p>
                    <p><a href="" className='hover:underline'>Política de Prvacidade</a></p>
                    <p><a href="" className='hover:underline'>Trabalhe Conosco</a></p>
                </div>

                <div className='flex gap-3'>
                    <FacebookLogo className='size-8 rounded cursor-pointer hover:bg-[#fef0e1] hover:text-[#d9291a] transition duration-0.3 hover:scale-115'/>
                    <InstagramLogo className='size-8 rounded cursor-pointer hover:bg-[#fef0e1] hover:text-[#d9291a] transition duration-0.3 hover:scale-115'/>
                    <LinkedinLogo className='size-8 rounded cursor-pointer hover:bg-[#fef0e1] hover:text-[#d9291a] transition duration-0.3 hover:scale-115'/>
                    <YoutubeLogo className='size-8 rounded cursor-pointer hover:bg-[#fef0e1] hover:text-[#d9291a] transition duration-0.3 hover:scale-115'/>
                </div>
            </footer>
        </>
    )
}

export default Footer;