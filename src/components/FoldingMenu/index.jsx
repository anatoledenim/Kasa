import { useState } from 'react'
import arrow from '../../assets/arrow.png'
import '../../styles/FoldingMenu/FoldingMenu.css'

function FoldingMenu({title, children}) {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="folding-menu">
            <div className='folding-menu-first-section'>
                <h1 className='folding-menu-title'>{title}</h1>
                <img className='folding-menu-arrow' src={arrow} alt='flèche pour dérouler le menu' onClick={()=>setIsOpen(!isOpen)}/>
            </div>
            {isOpen && (
                <div className='folding-menu-second-section'>
                    <p className='folding-menu-description'>{children}</p>
                </div>
            )
        }
        </div>
    )
} 

export default FoldingMenu