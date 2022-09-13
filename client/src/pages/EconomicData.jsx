import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts'

const EconomicData = () => {
  const data = [
    {
      date: '2022-07-01',
      value: 296.276
    },
    {
      date: '2022-06-01',
      value: 296.311
    },
    {
      date: '2022-05-01',
      value: 292.296
    },
    {
      date: '2022-04-01',
      value: 289.109
    },
    {
      date: '2022-03-01',
      value: 287.504
    },
    {
      date: '2022-02-01',
      value: 283.716
    },
    {
      date: '2022-01-01',
      value: 281.148
    }
  ]
  return (
    <div>
      <h1>Economic Data</h1>
      {/* <LineChart width={800} height={400} className="chart" data={data}>
        <Line type="monotone" dataKey="value" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
      </LineChart> */}
    </div>
  )
}

export default EconomicData
