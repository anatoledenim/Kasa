import { Link, useLocation } from 'react-router-dom'
import logo from '../../assets/logo.png'
import '../../styles/Header/Header.css'
import { useEffect, useState } from 'react'

function changeClass(location, setNavClassAccueil, setNavClassApropos) {
        if (location.pathname === "/") {
                setNavClassAccueil("navbar-accueil underline-link")
                setNavClassApropos("navbar-apropos")
        } else if (location.pathname === "/a-propos") {
                setNavClassAccueil("navbar-accueil")
                setNavClassApropos("navbar-apropos underline-link")
        } else {
                setNavClassAccueil("navbar-accueil")
                setNavClassApropos("navbar-apropos")
        }
}

function Header() {
        const [navClassAccueil, setNavClassAccueil] = useState("navbar-accueil")
        const [navClassApropos, setNavClassApropos] = useState("navbar-apropos")
        const location = useLocation()
        useEffect(() => {
                changeClass(location, setNavClassAccueil, setNavClassApropos)
        }, [location])
        return (<nav className='navbar'>
                    <Link to={"/"}> <img className='navbar-logo' src={ logo } alt='logo de Kasa'/> </Link>
                    <div className='navbar-link'>
                    <Link to={"/"} className={navClassAccueil}>Accueil</Link>
                    <Link to={"/a-propos"} className={navClassApropos}>A propos</Link>
                    </div>
        </nav>)
}

export default Header