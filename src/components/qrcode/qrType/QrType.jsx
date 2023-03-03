import {useState} from 'react'

import TypeSelector from "./TypeSelector"


function QrType(){
    const [types, setTypes] = useState([{type:'FRANCE', selected:true}, {type:'FRONTIÈRE', selected: false}])
    return(
        <>
        <div className="qrType">
            {
                types.map(curType => {
                    return(
                        <TypeSelector key={curType.type} curType={curType} types={types} setTypes={setTypes}></TypeSelector>
                    )
                })
            }
        </div>
        <div className='instructions'>
            <img src="./Icons/info.svg" alt="i" />
            <span className='instructionDetails'>Appuyez sur ‘FRONTIÈRE’ pour voir le certificat Frontière</span>
        </div>
        </>
    )
}

export default QrType