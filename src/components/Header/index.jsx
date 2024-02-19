import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import '../../styles/Header/Header.css'

const accueilLink = <Link to={"/"} className='navbar-accueil'>Accueil</Link>
const aproposLink = <Link to={"/a-propos"} className='navbar-apropos'>A propos</Link>

function Header() {
        return (<nav className='navbar'>
                    <Link to={"/"}> <img className='navbar-logo' src={ logo } alt='logo de Kasa'/> </Link>
                    <div className='navbar-link'>
                    { accueilLink }
                    { aproposLink }
                    </div>
                    {/* {underlineLink(accueilLink, aproposLink)} */}
        </nav>)
}

export default Header