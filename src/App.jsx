import './stylesheets/App.css';
import './stylesheets/Home/QrCode.css'
import './stylesheets/Home/Navbar.css'
import './stylesheets/Home/Stats.css'
import './stylesheets/Home/Footer.css'


import QR from './components/home/QR-Code/QR'
import Navbar from './components/home/Navbar/Navbar';
import Stats from './components/home/Stats/Stats';
import Footer from './components/home/Footer/Footer';

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
