import Acasa from './components/Acasa/Acasa'
import { Route,Routes } from 'react-router-dom';
import Harta from './components/Harta/Harta'
import Meniu from './components/Meniu/Meniu';
import CalendarOre from './components/CalendarOre/CalendarOre';
import Tabel from './components/Tabel/Tabel'
import Grafic from './components/Grafice/Grafic';
import G2 from './components/Grafice/G2';
import G3 from './components/Grafice/G3';
import G4 from './components/Grafice/G4';
import G7 from './components/Grafice/G7';
import G8 from './components/Grafice/G8';
import G9 from './components/Grafice/G9';
import G10 from './components/Grafice/G10';
import Text_ceva from './components/Text/Text';
import './index.css';
import { dateTramvai41 } from './mockData/mockData';
function App() {
  return (
    <div className="App">
        <div className='bg'>
          <Meniu />
            <Routes>
                <Route path="/" element={<Acasa/>}/>
                <Route path="/Harta" element={<Harta/>}/>
                <Route path="/Text_ceva" element={<Text_ceva/>}/>
                <Route path="/Calendar" element={<CalendarOre/>}/>
                <Route path="/Tabel" element={<Tabel/>}/>
                <Route path="/G1" element={<Grafic data={dateTramvai41} />}/>
                <Route path="/G2" element={<G2 data={dateTramvai41}/>} />
                <Route path="/G3" element={<G3 data={dateTramvai41}/>}/>
                <Route path="/G4" element={<G4/>}/>
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
