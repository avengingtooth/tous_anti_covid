import AllMiniStats from "./AllMiniStats"
import Graph from "./Graph"

function Stats(){
    const data = [
        {value: "3 141", title: "Nouveaux cas J-3", mainColor: "darkGreen", secondaryColor: "lightGreen"},
        {value: "16%", title: "Tension réa", mainColor: "lightSlateGrey", secondaryColor: "darkSlateGrey"},
        {value: "767", title: "Patients en réa", mainColor: "lightPurple", secondaryColor: "darkPurple"},
        {value: "17", title: "Nouveaux décès", mainColor: "darkBlue", secondaryColor: "lightBlue"},
        {value: "35,0", title: "Taux d'incidence", mainColor: "darkOrange", secondaryColor: "lightOrange"},
        {value: "0,82", title: "R effectif", mainColor: "darkPink", secondaryColor: "lightPink"}
    ]
    return(
        <>
            <AllMiniStats data={[...data]}></AllMiniStats>
            <Graph></Graph>
        </>
    )
}

export default Stats