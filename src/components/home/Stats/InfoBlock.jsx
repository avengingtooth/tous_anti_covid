function InfoBlock(props){
    let data = props.data
    return(
        <div className={`infoBlock ${props.data.mainColor}`}>
            <p className="infoValue">{data.value}</p>
            <p className={`infoTitle ${props.data.secondaryColor}`}>{data.title}</p>
        </div>
    )
}

export default InfoBlock