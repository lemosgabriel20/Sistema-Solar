import './App.css';
import Planetas from './components/Planetas'
import sol from './images/sol.png'
import mercurio from './images/mercurio.png'
import venus from './images/venus.png'
import terra from './images/terra.png'
import marte from './images/marte.png'
import jupiter from './images/jupiter.png'
import saturno from './images/saturno.png'
import urano from './images/urano.png'
import netuno from './images/netuno.png'

function App() {
  return (
    <div className='App'>
      <Planetas classes={"planeta"} planeta={sol}/>
    </div>
  );
}

export default App;
