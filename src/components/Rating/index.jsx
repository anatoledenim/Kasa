import fullStar from '../../assets/star-active 1.png'
import emptyStar from '../../assets/star-inactive 2.png'
import '../../styles/Rating/Rating.css'

function Rating({rating}) {
        const totlaStar = 5
        let starNumber = (parseInt(rating))
        let emptyStarNumber = totlaStar - starNumber
        let arrayStarNumber = []
        let arrayEmptyStarNumber = []

        for (let i = 0; i < rating; i++) {
            arrayStarNumber.push(i)
        }
        for (let i = 0; i < emptyStarNumber; i++) {
            arrayEmptyStarNumber.push(i) 
        }

    return (
        <div className='rating'>
            {arrayStarNumber.map((i) => (
                <img className='rating-full-star' key={'full-star-' + i} src={fullStar} alt="étoiles pleines"/>
            ))} 
 
            {arrayEmptyStarNumber.map((i) => (
                <img className='rating-empty-star' key={'empty-star-' + i} src={emptyStar} alt="étoiles vides"/>
            ))}
            
        </div>
    )
}

export default Rating  