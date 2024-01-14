import {
  ComposedChart,
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
import { datepietramvai } from '../../mockData/mockData';

const Grafic = (data) => {

  return (
    <div className="App">
      <h1>Numarul de tramvaie care trec pe ora</h1>
      
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
          <Bar dataKey="Numar_Tramvaie" barSize={20} fill="#413ea0" />
        </ComposedChart>
        <h1>Numarul de tramvaie din fiecare perioada a zilei</h1>
        <div className='pie_chart'>
            <PieChart width={930} height={490}>
              <Pie data={datepietramvai} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={0} fill="#9B00FF" outerRadius={200}  label={(entry) => entry.name}> 
              lol</Pie>
            </PieChart>
        </div>
        
    </div>
  );
} 

export default Grafic;
