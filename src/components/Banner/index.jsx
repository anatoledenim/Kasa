// import styled from 'styled-components'
import '../../styles/Banner/Banner.css'
import backgroundImageAccueil from '../../assets/backgroundImageAccueil.png'
// import backgroundImageApropos from '../../assets/backgroundImageApropos.png'

function BackgroundPanel() {
    return (
            <div className='banner'>
                <img className='banner-img' src={backgroundImageAccueil} alt="paysage de bannière"/>
                <h1 className='banner-title'>Chez vous, partout et ailleurs</h1>
            </div>
            )
}

export default BackgroundPanel