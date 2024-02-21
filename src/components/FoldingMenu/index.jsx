import arrow from '../../assets/arrow.png'
import '../../styles/FoldingMenu/FoldingMenu.css'
import './FoldingMenu'

function FoldingMenu(props) {
    return (
        <div className="folding-menu">
            <div className='folding-menu-first-section'>
                <h1 className='folding-menu-title'>{props.title}</h1>
                <img className='folding-menu-arrow' src={arrow} alt='flèche pour dérouler le menu'/>
            </div>
            <div className='folding-menu-second-section'>
                <p className='folding-menu-description'>{props.description}</p>
            </div>
        </div>
    )
} 

export default FoldingMenu