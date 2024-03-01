import fullStar from '../../assets/star-active 1.png'
import emptyStar from '../../assets/star-inactive 2.png'
import '../../styles/Rating/Rating.css'

function Rating({rating}) {
    const totlaStar = 5
    const starNumber = new Array(parseInt(rating))
    const emptyStarNumber = totlaStar - starNumber
    console.log([...Array(starNumber)])

    return (
        <div className='rating'>
            {[...Array(starNumber).map((i) => (
                <img className='rating-full-star' key={'full-star-' + i} src={fullStar} alt="étoiles pleines"/>
            ))]}

            {/* {[...Array(emptyStarNumber).map((i) => (
                <img className='rating-empty-star' key={'empty-star-' + i} src={emptyStar} alt="étoiles vides"/>
            ))]} */}
            
        </div>
    )
}

export default Rating