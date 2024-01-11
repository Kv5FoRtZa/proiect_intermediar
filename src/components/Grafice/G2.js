import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Pie,
  PieChart,
} from 'recharts';
import "./lolol.css"
import { datepie } from '../../mockData/mockData';

const G2 = (data) => {

  return (
    <div className="App">
      <h1>Grafic 2</h1>
      
      <ComposedChart
          
          width={1500}
          height={400}
          data={data.data}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#000000" />
          <XAxis dataKey="name" scale="auto" stroke='#000000'/>
          <YAxis stroke='#000000'/>
          <Tooltip />
          <Legend />
          <Bar dataKey="autobuze" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="Dintre_care_au_intarziat" stroke="#000000" />
        </ComposedChart>
        <h1>NU mai urasc acest PieChart</h1>
        <div className='pie_chart'>
            <PieChart width={930} height={450}>
              <Pie data={datepie} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={0} outerRadius={200} fill="#9B00FF" label={(entry) => entry.name}/> 
            </PieChart>
        </div>
        
    </div>
  );
}

export default G2;
