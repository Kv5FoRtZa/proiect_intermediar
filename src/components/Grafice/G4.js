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
import { datepiemasini } from '../../mockData/mockData';

const G4 = (data) => {

  return (
    <div className="App">
      <h1>Numarul total de masini si numarul de masini care trec pe rosu pe ora</h1>
      
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
          <Bar dataKey="Numar_Masini" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="Pleaca_pe_Rosu" stroke="#7200B9" />
        </ComposedChart>
        <h1>Numarul de masini din fiecare perioada a zilei</h1>
        <div className='pie_chart'>
            <PieChart width={930} height={490}>
              <Pie data={datepiemasini} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={0} fill="#9B00FF" outerRadius={200}  label={(entry) => entry.name}> 
              lol</Pie>
            </PieChart>
        </div>
        
    </div>
  );
} 

export default G4;