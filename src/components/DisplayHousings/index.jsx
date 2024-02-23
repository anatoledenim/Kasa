import '../../styles/DisplayHousings/DisplayHousings.css'
import { Link } from 'react-router-dom'

function DisplayHousings({house, id}) {
    const path = id === undefined ? "/" : `/logement/${id}`
    return (
        <Link to={path} className='display-housings-card'>
            <img className='display-housings-card-img' src={house.cover} alt='logement'/>
            <h2 className='display-housings-card-title'>{house.title}</h2>
        </Link>
    )
}

export default DisplayHousings