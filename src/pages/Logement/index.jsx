import { useState, useEffect } from "react"
import {useNavigate, useParams} from "react-router-dom"
import Carousel from "../../components/Carousel"
import Rating from "../../components/Rating"
import FoldingMenu from '../../components/FoldingMenu'
import '../../styles/Logement/Logement.css'

function Logements() {
    const [logement, setLogement] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    let {id} = useParams()
    const navigate = useNavigate();
    useEffect(() => {
        async function fetchDatas(url) {
            const response = await fetch(url)
            const houses = await response.json()
            let logementData = houses.find((element) => element.id === id)
            if (!logementData) {
                navigate('/page-not-found')
                return;
            } 
            setLogement(logementData);
            setIsLoading(false)
        }
        fetchDatas('/housings.json')
    },[id, navigate]) 
    return (
        <div>
            {isLoading ? <div>Chargement en cours....</div> :
                (<div className="section">
                    <Carousel images={logement.pictures}/>
                    <div className="section-1">
                        <div className="div">
                                <h1 className="div-title">{logement.title}</h1>
                                <h2 className="div-location">{logement.location}</h2>
                            <div className="div-tag-section">
                                {(logement.tags).map((tag) =>
                                <li key={tag} className="div-tag">{tag}</li>
                                )}
                            </div>
                        </div>
                        <div className="div-2">
                            <div className="div-host">
                                <p className="div-name">{logement.host.name}</p>
                                <img className="div-pic" src={logement.host.picture} alt="propietaire"/>
                            </div>
                            <Rating rating = {logement.rating}/>
                        </div>
                    </div>
                    <div className="div-3">
                        <div className="div-folding-menu-small">
                            <FoldingMenu title="Description" children={logement.description}/>
                        </div>
                        <div className="div-folding-menu-small">
                            <FoldingMenu title="Equipement" children={logement.equipments.map((equipement, i) =>
                            <li className="div-folding-menu-small-equipments" key={'equipement-' + i}>{equipement}</li>
                            )}/>
                        </div>
                    </div>
                </div> )}
        </div>
    )
}

export default Logements