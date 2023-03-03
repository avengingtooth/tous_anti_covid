import '../../stylesheets/QrCode/Navbar.css'
import '../../stylesheets/QrCode/QrType.css'
import '../../stylesheets/QrCode/gov+QrCode.css'

import Navbar from "../qrcode/Navbar"
import QrType from '../qrcode/qrType/QrType'
import GovLogos from '../qrcode/GovLogos'
import UserQRCode from '../UserQRCode'
import ShareButton from '../ShareButton'

function QrCode(){
    return(
        <>
            <header>
                <Navbar></Navbar>
            </header>
            <section>
                <QrType></QrType>
            </section>
            <section className='gov-codes'>
                <GovLogos></GovLogos>
                <UserQRCode></UserQRCode>
                <h1>VICTOIRE MISSONNIER</h1>
            </section>
            <section>
                <ShareButton></ShareButton>
            </section>
        </>
    )
}

export default QrCode