import fullStar from '../../assets/star-active 1.png'
import emptyStar from '../../assets/star-inactive 2.png'
import '../../styles/Rating/Rating.css'

function Rating({rating}) {
        const totlaStar = 5
        let starNumber = (parseInt(rating))
        let arrayStarNumber = new Array(starNumber)
        let emptyStarNumber = totlaStar - starNumber
        let arrayEmptyStarNumber = [...Array(emptyStarNumber)].length  

        console.log(arrayStarNumber)
        // for (let i = 0; i < arrayStarNumber.length; i++) {
        //     arrayStarNumber.push("oui") 
        // }   
        console.log(arrayStarNumber)

    return (
        <div className='rating'>
            {/* {[...Array(arrayStarNumber.length)].map((i) => (
                <img className='rating-full-star' key={'full-star-' + i} src={fullStar} alt="étoiles pleines"/>
            ))} 

            {[...Array (arrayEmptyStarNumber.length)].map((i) => (
                <img className='rating-empty-star' key={'empty-star-' + i} src={emptyStar} alt="étoiles vides"/>
            ))} */}
            
        </div>
    )
}

export default Rating  