import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

function G4() {
  
  let minim = 10;
  let maxim = 1000;

  const autobuz = () => {
    return Math.floor(Math.random() * (maxim - minim + 1)) + minim
  }

  const data = [
    {
      name: 'Ora 6',
      autobuze: autobuz(),
      Dintre_care_au_intarziat : Math.floor(Math.random() * (maxim - minim + 1)) + minim,
    },
    {
      name: 'Ora 8',
      autobuze: Math.floor(Math.random() * (maxim - minim + 1)) + minim,
      Dintre_care_au_intarziat : Math.floor(Math.random() * (maxim - minim + 1)) + minim,
    },
    {
      name: 'Ora 12',
      autobuze: Math.floor(Math.random() * (maxim - minim + 1)) + minim,
      Dintre_care_au_intarziat : Math.floor(Math.random() * (maxim - minim + 1)) + minim,
    },
    {
      name: 'Ora 69',
      autobuze: Math.floor(Math.random() * (maxim - minim + 1)) + minim,
      Dintre_care_au_intarziat : Math.floor(Math.random() * (maxim - minim + 1)) + minim,
    },
    {
      name: 'Ora de chimie',
      autobuze: Math.floor(Math.random() * (maxim - minim + 1)) + minim,
      Dintre_care_au_intarziat : Math.floor(Math.random() * (maxim - minim + 1)) + minim,
    },
    {
      name: 'Ora 543',
      autobuze: Math.floor(Math.random() * (maxim - minim + 1)) + minim,
      Dintre_care_au_intarziat : Math.floor(Math.random() * (maxim - minim + 1)) + minim,
    },
  ];


  return (
    <div className="App">
      <h1>Grafic 4</h1>
      <ComposedChart
          
          width={1500}
          height={400}
          data={data}
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

export default G4;
