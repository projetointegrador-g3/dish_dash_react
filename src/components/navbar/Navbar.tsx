import { Link } from "react-router-dom"
import styles from './Navbar.module.css'

function Navbar() {
    return (
        <>
            <div className={styles.navbar_style}>
                <div className="container flex justify-between text-lg">

                    <div className='flex gap-4 items-center'>
                        <Link to='/categorias'>categorias</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
