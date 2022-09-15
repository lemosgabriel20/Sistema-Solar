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
      <Planetas classes={"planeta mercurio"} planeta={mercurio}/>
      <Planetas classes={"planeta venus"} planeta={venus}/>
      <Planetas classes={"planeta terra"} planeta={terra}/>
      <Planetas classes={"planeta marte"} planeta={marte}/>
      <Planetas classes={"planeta jupiter"} planeta={jupiter}/>
      <Planetas classes={"planeta saturno"} planeta={saturno}/>
      <Planetas classes={"planeta urano"} planeta={urano}/>
      <Planetas classes={"planeta netuno"} planeta={netuno}/>
    </div>
  );
}

export default App;
