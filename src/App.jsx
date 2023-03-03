import './stylesheets/App.css'
import './stylesheets/ShareButton.css'

import QrCode from './components/routeIndexes/QRCode';
// import Home from "./components/routeIndexes/Home";

function App() {
  return (
    <div className="App">
      {/* <Home></Home> */}
      <QrCode></QrCode>
    </div>
  );
}

export default App;
