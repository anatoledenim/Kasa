import { useState, useEffect } from "react"
import {useNavigate, useParams} from "react-router-dom"
// import Rating from "../../components/Rating"
import FoldingMenu from '../../components/FoldingMenu'
import '../../styles/Logement/Logement.css'

function Logements() {
    const [logement, setLogement] = useState([])
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
        }
        fetchDatas('/housings.json')
    },[id, navigate])

    return (
        <div>
            {!logement && (
                <div>Chargement en cours....</div>
            )}
            <div className="section">
                <img className="pic" src={logement.cover} alt="cover de logement"/>
                <div className="div">
                    <div>
                        <h1 className="div-title">{logement.title}</h1>
                        <h2 className="div-location">{logement.location}</h2>
                    </div>
                    <div className="div-host">
                        <p className="div-name">{logement.host.name}</p>
                        <img className="div-pic" src={logement.host.picture} alt="propietaire"/>
                    </div>
                </div>
                <div className="div-2">
                    <div className="div-tag-section">
                        {(logement.tags).map((tag) =>
                        <li key={tag} className="div-tag">{tag}</li>
                        )}
                    </div>
                {/* <Rating rating = {logement.rating}/>  */}
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
            </div>
        </div>
    )
}

export default Logements