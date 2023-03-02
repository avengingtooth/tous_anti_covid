function Action(props){
    return(
        <div className="footerIcons">
            <img src={`${props.actionData.url}.svg`} alt={props.actionData.text}/>
            <p>{props.actionData.text}</p>
        </div>
    )
}

export default Action