import fullStar from '../../assets/star-active 1.png'
import emptyStar from '../../assets/star-inactive 2.png'

function Rating({rating}) {
    const totlaStar = 5
    const starNumber = parseInt(rating)
    const emptyStarNumber = totlaStar - starNumber

    return (
        <div>
            {[...Array(starNumber).map((i) => (
                <img key={'full-star-' + i} src={fullStar} alt="étoiles pleines"/>
            ))]}

            {[...Array(emptyStarNumber).map((i) => (
                <img key={'empty-star-' + i} src={emptyStar} alt="étoiles vides"/>
            ))]}
            
        </div>
    )
}

export default Rating