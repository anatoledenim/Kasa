import { Link } from "react-router-dom"
import '../../styles/Error/Error.css'

function Error() {
    return (
        <div className="error-div">
            <h1 className="error-div-title">404</h1>
            <h2 className="error-div-subtitle">Oups! La page que vous demandez n'existe pas.</h2>
            <Link className="error-div-link" to={'/'}>Retourner sur la page d’accueil</Link>
        </div>
    )
} 

export default Error