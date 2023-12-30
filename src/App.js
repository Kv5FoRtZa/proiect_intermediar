import Acasa from './components/Acasa/Acasa'
import { Route,Routes } from 'react-router-dom';
import Harta from './components/Harta/Harta'
import Meniu from './components/Meniu/Meniu';
import G1 from './components/Grafice/G1';
import G2 from './components/Grafice/G2';
import G3 from './components/Grafice/G3';
import G4 from './components/Grafice/G4';
import G5 from './components/Grafice/G5';
import G6 from './components/Grafice/G6';
import G7 from './components/Grafice/G7';
import G8 from './components/Grafice/G8';
import G9 from './components/Grafice/G9';
import G10 from './components/Grafice/G10';
import './index.css';
function App() {
  return (
    <div className="App">
        <div className='bg'>
          <Meniu />
            <Routes>
                <Route path="/" element={<Acasa/>}/>
                <Route path="/Harta" element={<Harta/>}/>
                <Route path="/G1" element={<G1/>}/>
                <Route path="/G2" element={<G2/>}/>
                <Route path="/G3" element={<G3/>}/>
                <Route path="/G4" element={<G4/>}/>
                <Route path="/G5" element={<G5/>}/>
                <Route path="/G6" element={<G6/>}/>
                <Route path="/G7" element={<G7/>}/>
                <Route path="/G8" element={<G8/>}/>
                <Route path="/G9" element={<G9/>}/>
                <Route path="/G10" element={<G10/>}/>
            </Routes>
           
        </div>
    </div>
  );
}

export default App;
