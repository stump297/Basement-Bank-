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
