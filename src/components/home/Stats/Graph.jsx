function Graph(){
    return(
        <div className="graphContainer">
            <img className='graph' src="/Images/graph.png" alt="graph" />
            <div>
                <img src="/Icons/share/share.svg" alt="" />
                <p className="clickToShow verticalText">Cliquez pour changer</p>
            </div>
        </div>
    )
}

export default Graph