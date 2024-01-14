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
import Text_ceva from './components/Text/Text';
import Text_ceva2 from './components/Text/Text2';
import Text_ceva02 from './components/Text/Text02'
import Text_ceva03 from './components/Text/Text03'
import Text_ceva04 from './components/Text/Text04'
import Text_ceva22 from './components/Text/Text22'
import Text_ceva23 from './components/Text/Text23'
import Text_ceva24 from './components/Text/Text24'
import './index.css';
import { masini_grafic } from './mockData/mockData';
import { autobuze_grafic } from './mockData/mockData';
import { tramvaiePeOra2 } from './mockData/mockData';
import { pietoni_grafic } from './mockData/mockData';

function App() {
  return (
    <div className="App">
        <div className='bg'>
          <Meniu />
            <Routes>
                <Route path="/" element={<Acasa/>}/>
                <Route path="/Harta" element={<Harta/>}/>
                <Route path="/Text_ceva" element={<Text_ceva/>}/>
                <Route path="/Text_ceva2" element={<Text_ceva2/>}/>
                <Route path="/Text_ceva02" element={<Text_ceva02/>}/>
                <Route path="/Text_ceva03" element={<Text_ceva03/>}/>
                <Route path="/Text_ceva04" element={<Text_ceva04/>}/>
                <Route path="/Text_ceva22" element={<Text_ceva22/>}/>
                <Route path="/Text_ceva23" element={<Text_ceva23/>}/>
                <Route path="/Text_ceva24" element={<Text_ceva24/>}/>
                <Route path="/Calendar" element={<CalendarOre/>}/>
                <Route path="/Tabel" element={<Tabel/>}/>
                <Route path="/G1" element={<Grafic data={tramvaiePeOra2} />}/>
                <Route path="/G2" element={<G2 data={autobuze_grafic}/>} />
                <Route path="/G3" element={<G3 data={pietoni_grafic}/>}/>
                <Route path="/G4" element={<G4 data={masini_grafic}/>}/>
            </Routes>
           
        </div>
    </div>
  );
}

export default App;
