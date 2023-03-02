import Details from "./Details"
import UserQRCode from '../../UserQRCode'
import Icons from './Icons'

function QR(){
    return(
        <div className="qrCode" onClick={() => {console.log('change page')}}>
            <Icons></Icons>
            <div className="allInfo">
                <UserQRCode></UserQRCode>
                <Details></Details>
            </div>
        </div>  
    )
}

export default QR