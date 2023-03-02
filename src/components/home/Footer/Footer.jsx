import Action from "./Action"

function Footer(){
    const actions = [
        {url:'/Icons/Footer/home', text:'Résumé'}, 
        {url:'/Icons/Footer/carnet', text:'Carnet & Pass+'},
        {url:'/Icons/Footer/info', text:'Actualités'}
    ]
    return(
        <footer>
            {
                actions.map(curAct => {
                    return (
                        <Action key={curAct.text} actionData = {curAct}></Action>
                    )
                })
            }
        </footer>
    )
}

export default Footer