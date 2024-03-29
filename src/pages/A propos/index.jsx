import BackgroundPanel from "../../components/Banner"
import backgroundImageApropos from '../../assets/backgroundImageApropos.png'
import FoldingMenu from "../../components/FoldingMenu"
import '../../styles/Apropos/Apropos.css'

const datas = [
    {title: "Fiabilité",
    content: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
    },
    {title: "Respect",
    content: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
    },
    {title: "Service",
    content: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
    },
    {title: "Sécurité",
    content: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
    }
]

function Apropos() {
    return (
        <div className="apropos-section"> 
            <BackgroundPanel src = {backgroundImageApropos} title = "" alt = "paysage de bannière page a propos"/>
            <div className="div-folding-menu">
            {datas.map((data) =>
            <FoldingMenu key={data.id} title={data.title} children={data.content}/>
            )}
            </div>
        </div>
    )
}

export default Apropos