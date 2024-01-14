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
import { datepieautobuze } from '../../mockData/mockData';

const G2 = (data) => {

  return (
    <div className="App">
      <h1>Numarul total de autobuze si numarul de autobuze care trec pe rosu pe ora</h1>
      
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
          <Bar dataKey="Numar_Autobuze" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="Pleaca_pe_Rosu" stroke="#7200B9" />
        </ComposedChart>
        <h1>Numarul de autobuze din fiecare perioada a zilei</h1>
        <div className='pie_chart'>
            <PieChart width={930} height={490}>
              <Pie data={datepieautobuze} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={0} outerRadius={200} fill="#9B00FF" label={(entry) => entry.name}/> 
            </PieChart>
        </div>
        
    </div>
  );
}

export default G2;
