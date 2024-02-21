import '../../styles/DisplayHousings/DisplayHousings.css'

function DisplayHousings({house}) {
    return (
        <div className='display-housings-card' key={ house.id }>
                <img className='display-housings-card-img' src={house.picture} alt='logements'/>
                <h2 className='display-housings-card-title'>{house.title}</h2>
                </div>
    )
}

export default DisplayHousings