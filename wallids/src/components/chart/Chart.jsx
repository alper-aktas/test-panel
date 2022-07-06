import './chart.scss'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: '2000',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: '2001',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: '2002',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: '2003',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: '2004',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: '2005',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: '2006',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: '2007',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: '2008',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: '2009',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: '2010',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },

];

const Chart = () => {
  return (
    <div className='chart'>
      <div className="title">Security Activity</div>
      <ResponsiveContainer width="99%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart