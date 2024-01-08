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

const Grafic = (data,data1) => {

  return (
    <div className="App">
      <h1>Grafic 1</h1>
      <PieChart width={730} height={250}>
          <Pie data={data1} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
        </PieChart>
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
        
    </div>
  );
}

export default Grafic;
