import housings from '../../assets/housings.json'
import '../../styles/DisplayHousings/DisplayHousings.css'

function DisplayHousings() {
    return (
        <div className="display-housings">
            {housings.map((housing) => ( 
            <div className='display-housings-card' key={ housing.id }>
                <img className='display-housings-card-img' src={housing.pictures[0]} alt='logements'/>
                <h2 className='display-housings-card-title'>{housing.title}</h2>
                </div>
            ))}
        </div>
    )
}

export default DisplayHousings