import { useEffect, useState } from "react"
import BackgroundPanel from "../../components/Banner"
import DisplayHousings from "../../components/DisplayHousings"
import backgroundImageAccueil from '../../assets/backgroundImageAccueil.png'
import '../../styles/DisplayHousings/DisplayHousings.css'


function Accueil() {
    const [datas, setDatas] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
    async function fetchDatas(url) {
        const response = await fetch(url)
        const houses = await response.json()
        setDatas(houses)
        setIsLoading(false)
    }
    fetchDatas('/housings.json')
}, [])
    console.log(datas);
    return (
        <div>
            <BackgroundPanel src = {backgroundImageAccueil} title = "Chez vous, partout et ailleurs" alt = "paysage de bannière page accueil"/>
            <div className="display-housings">
                {isLoading && <h1>Les logements chargent...</h1>}
                {datas.map((data) => 
                datas && <DisplayHousings key={data.id} house={data}/>
                )}
            </div>
        </div>
    )
}

export default Accueil