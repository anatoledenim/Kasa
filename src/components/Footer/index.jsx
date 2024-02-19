import '../../styles/Footer/Footer.css'
import logo from '../../assets/logo-black_white.png'

function Footer() {
    return (
        <div className="footer">
            <img className="footer-img" src={logo} alt="logo de Kasa"/>
            <h3 className="footer-h3">© 2020 Kasa. All rights reserved</h3>
        </div>
    )
}

export default Footer