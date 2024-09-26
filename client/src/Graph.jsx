// Working MVP Code
import { useState } from 'react'

import {
    BarChart,
    Bar,
    CartesianGrid,
    XAxis,
    YAxis,
} from "recharts";
 
// call values from volume and savings to populate the graph
const App = () => {
    // Sample data
    const data = [
        { name: "How much to fill basement", volume: 1400 },
        { name: "Current Savings", savings: 700 },
    ];
 
    return (
        <BarChart width={600} height={600} data={data}>
            <Bar dataKey="volume" fill="grey" />
            <Bar dataKey="savings" fill="green" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="name" />
            <YAxis />
        </BarChart>
    );
};
 
export default App;

// Slightly more Advanced code but for a line graph if we want to incorperate time
// import React, { useState } from 'react';
// import {
//   ResponsiveContainer,
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend
// } from 'recharts';

// const MyLineChart = () => {
//   const [chartData, setChartData] = useState([]);
//   const [inputValue, setInputValue] = useState({ name: '', pv: '', uv: '' });

//   // Handle form input changes
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setInputValue({
//       ...inputValue,
//       [name]: value
//     });
//   };

//   // Handle form submission to update the chart data
//   const handleFormSubmit = (e) => {
//     e.preventDefault();
    
//     const newData = {
//       name: inputValue.name,
//       pv: parseFloat(inputValue.pv),
//       uv: parseFloat(inputValue.uv),
//     };

//     // Add new data to the chart data state
//     setChartData([...chartData, newData]);
    
//     // Reset form fields
//     setInputValue({ name: '', pv: '', uv: '' });
//   };

//   return (
//     <div>
//       {/* Form for user to input chart data */}
//       <form onSubmit={handleFormSubmit}>
//         <input
//           type="text"
//           name="name"
//           value={inputValue.name}
//           placeholder="Name (e.g., Jan)"
//           onChange={handleInputChange}
//           required
//         />
//         <input
//           type="number"
//           name="pv"
//           value={inputValue.pv}
//           placeholder="PV Value"
//           onChange={handleInputChange}
//           required
//         />
//         <input
//           type="number"
//           name="uv"
//           value={inputValue.uv}
//           placeholder="UV Value"
//           onChange={handleInputChange}
//           required
//         />
//         <button type="submit">Add Data</button>
//       </form>

//       {/* Chart displaying user input */}
//       <ResponsiveContainer width="100%" height={400}>
//         <LineChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="name" />
//           <YAxis />
//           <Tooltip />
//           <Legend />
//           <Line type="monotone" dataKey="Money Goal per Basement Size" stroke="#8884d8" activeDot={{ r: 8 }} />
//           <Line type="monotone" dataKey="Savings" stroke="#82ca9d" />
//         </LineChart>
//       </ResponsiveContainer>
//     </div>
//   );
// };

// export default MyLineChart;