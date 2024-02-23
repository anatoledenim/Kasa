import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

function Logements() {
    const [datas, setDatas] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    let {id} = useParams()
    useEffect(() => {
    async function fetchDatas(url) {
        const response = await fetch(url)
        const houses = await response.json()
        setDatas(houses)
        setIsLoading(false)
    }
    fetchDatas('/housings.json')
}, [id])
    let logement = datas.find((element) => element === id)
    console.log(id)
    return (
        <div>
            {!isLoading && <h1>La parge se charge...</h1>}
            <div>
                <h1>Page de Logement monsieur</h1>
            </div>
        </div>
    )
}

export default Logements