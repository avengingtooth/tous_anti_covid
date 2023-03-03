function TypeSelector(props){
    return(
        <button className={`switchType ${props.curType.selected?'selected': ''}`} onClick={
        () => {
            let copy = [...props.types]
            let setTypes = props.setTypes
            copy.map(e => e.type === props.curType.type
                ? e.selected = true
                : e.selected = false
            )
            setTypes(copy)
        }}>
            <p>{props.curType.type}</p>
        </button>
    )
}

export default TypeSelector