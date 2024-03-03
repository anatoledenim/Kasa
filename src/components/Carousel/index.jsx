import '../../styles/Carousel/Carousel.css'
import arrowLeft from '../../assets/arrow-left.png'
import arrowRight from '../../assets/arrow-right.png'
import { useState } from 'react'

function Carousel({images}) {
    let [index, setIndex] = useState(1)
    let [image, setImage] = useState(images[0]) 
    let total = images.length
    let classNamePic = "carousel-pic"
    let classNameArrowLeft = "carousel-arrow-left"
    let classNameArrowRight = "carousel-arrow-right"
    let classNameIndex = "carousel-index"
    function changeIndexPlus() {
        if (index === total) {
            setIndex(1)
            setImage(images[0]) 
            classNamePic = "carousel-pic-slide-right"
        } else {
            setIndex(index + 1)
            setImage(images[index])
            classNamePic = "carousel-pic-slide-right"
        }
    }
    function changeIndexLess() {
        if (index === 1) {
            setIndex(total)
            setImage(images[total - 1])
        } else {
            setIndex(index - 1)
            setImage(images[index - 2])
        }
    }

    if (total === 1) {
        classNameArrowLeft = "carousel-arrow-left-hidden"
        classNameArrowRight = "carousel-arrow-right-hidden"
        classNameIndex = "carousel-index-hidden"
    }

    return (
        <div className='carousel'>
            <img className={classNamePic} src={image} alt="appartement"/> 
            <img className={classNameArrowLeft} src={arrowLeft} alt='flèche de gauche' onClick={() => changeIndexLess()}/>
            <img className={classNameArrowRight} src={arrowRight} alt='flèche de droite' onClick={() =>changeIndexPlus()}/>
            <p className={classNameIndex}>{index}/{total}</p>
        </div>
    )
}

export default Carousel