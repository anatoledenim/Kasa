import '../../styles/Banner/Banner.css'

function BackgroundPanel(props) {
    return (
            <div className='banner'>
                <img className='banner-img' src={props.src} alt={props.alt}/>
                <h1 className='banner-title'>{props.title}</h1>
            </div>
            )
}

export default BackgroundPanel