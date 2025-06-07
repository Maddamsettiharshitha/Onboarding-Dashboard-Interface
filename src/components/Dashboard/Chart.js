import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';

const data = [
  { day: 'Mon', progress: 30 },
  { day: 'Tue', progress: 50 },
  { day: 'Wed', progress: 70 },
  { day: 'Thu', progress: 40 },
  { day: 'Fri', progress: 90 },
];

export default function Chart() {
  return (
    <LineChart width={300} height={200} data={data}>
      <XAxis dataKey="day" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="progress" stroke="#8884d8" />
    </LineChart>
  );
}
