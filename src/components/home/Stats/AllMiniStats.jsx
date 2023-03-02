import { useState } from "react"
import InfoBlock from "./InfoBlock"

function AllMiniStats(props){
    let data = props.data
    const [visibleDataCount, setDataCount] = useState(3)
    return(
        <div className="stats">
            <div className="sectionHeader">
                <h1>Chiffres Clés Favoris</h1>
                <a href="TODO">Infos</a>
            </div>
            <form action="">
                <input className="searchInfo" type="text" placeholder="Cliquez pour changer les chiffres au niveau local"/>
            </form>
            <div className="allInfoBlocks">
                {
                    data.slice(0, visibleDataCount).map((curData) => {
                        return(
                            <InfoBlock key={curData.title} data={curData}></InfoBlock>
                        )
                    })
                }
            </div>
            <div className="showMoreInfo">
                <button onClick={() => {visibleDataCount === 3 
                    ? (
                        setDataCount(data.length)
                    )
                    : setDataCount(3)}}>
                    {/* filps arrow icon if showing more or hiding */}
                    <img src="/Icons/Arrow/down.png" alt="down arrow" style = {visibleDataCount === 3 ?{transform: 'rotate(0deg)'}: {transform: 'rotate(180deg'}}/>
                </button>
            </div>
        </div>
    )
}

export default AllMiniStats