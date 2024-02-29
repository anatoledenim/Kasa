import '../../styles/Carousel/Carousel.css'
import arrowLeft from '../../assets/arrow-left.png'
import arrowRight from '../../assets/arrow-right.png'
import { useState } from 'react'

function Carousel({images}) {
    let [index, setIndex] = useState(1)
    let [image, setImage] = useState(images[0]) 
    let total = images.length
    function changeIndexPlus() {
        if (index === total) {
            setIndex(1)
            setImage(images[index - 1])
            console.log(index, image)
        } else {
            setIndex(index + 1)
            setImage(images[index + 1])
            console.log(index, image)
        }
    }
    function changeIndexLess() {
        if (index === 1) {
            setIndex(total)
            setImage(images[index - 1])
            console.log(index, image)
        } else {
            setIndex(index - 1)
            setImage(images[index - 1])
            console.log(index, image)
        }
    }

    return (
        <div className='carousel'>
            <img className='carousel-pic' src={image} alt="appartement"/> 
            <img className='carousel-arrow-left' src={arrowLeft} alt='flèche de gauche' onClick={() => changeIndexLess()}/>
            <img className='carousel-arrow-right' src={arrowRight} alt='flèche de droite' onClick={() =>changeIndexPlus()}/>
            <p className='carousel-index'>{index}/{total}</p>
        </div>
    )
}

export default Carousel