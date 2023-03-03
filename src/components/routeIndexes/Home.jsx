import '../../stylesheets/Home/QrCode.css' 
import '../../stylesheets/Home/Stats.css'
import '../../stylesheets/Home/Footer.css'
import '../../stylesheets/Home/Home.css';
import '../../stylesheets/Home/Navbar.css'

import QR from '../home/QR-Code/QR'
import Navbar from '../home/Navbar';
import Stats from '../home/Stats/Stats';
import Footer from '../home/Footer/Footer';

function Home(){
    return(
        <>
            <header>
                <Navbar></Navbar>
            </header>
            <section>
                <QR></QR>
            </section>
            <section>
                <Stats></Stats>
            </section>
            <Footer></Footer>
        </>
    )
}

export default Home