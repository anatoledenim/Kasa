import { useState } from 'react'
import arrow from '../../assets/arrow.png'
import '../../styles/FoldingMenu/FoldingMenu.css'

function FoldingMenu({title, children}) {
    const [isOpen, setIsOpen] = useState(false)
    let classNameArrow = "folding-menu-arrow"
    let classNameMenu = "folding-menu-second-section"
    let classNameText = "folding-menu-description"
    if (isOpen) {
        classNameArrow = "folding-menu-arrow-reverse"
        classNameMenu = "folding-menu-second-section-slide"
        classNameText = "folding-menu-description-fade"
    }
    return (
        <div className="folding-menu">
            <div className='folding-menu-first-section'>
                <h1 className='folding-menu-title'>{title}</h1>
                <img className={classNameArrow} src={arrow} alt='flèche pour dérouler le menu' onClick={()=>setIsOpen(!isOpen)}/>
            </div>
                <div className={classNameMenu}>
                    <p className={classNameText}>{children}</p>
                </div>
        </div>
    )
} 

export default FoldingMenu