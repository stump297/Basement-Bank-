import React, { useState, useEffect } from 'react';
const MyLineChart = () => {
  const [chartData, setChartData] = useState([]);
  useEffect(() => {
    fetch('https://api.example.com/data') //
      .then(response => response.json())
      .then(data => setChartData(data))
      .catch(error => console.error('Error fetching the data:', error));
  }, []);
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
};