import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function GenderGraphContainer() {

    const data = [
        {
          name: '1965',
          percentage: 15,
        },
        {
          name: '1970',
          percentage: 13,
        },
        {
          name: '1975',
          percentage: 19,
        },
        {
          name: '1980',
          percentage: 30,
        },
        {
          name: '1985',
          percentage: 37,
        },
        {
          name: '1990',
          percentage: 30,
        },
        {
          name: '1995',
          percentage: 28,
        },
        {
          name: '2000',
          percentage: 28,
        },
        {
          name: '2005',
          percentage: 23,
        },
        {
          name: '2010',
          percentage: 18,
        },
        {
          name: '2015',
          percentage: 18,
        },
        {
          name: '2020',
          percentage: 20,
        },
    ];

    return (
        <ResponsiveContainer width="100%" height={400}>
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
                <XAxis dataKey="name" dy={5}/>
                <YAxis 
                    tickFormatter={(tick) => { // formats y-axis labels to have '%'
                        return `${tick}%`;
                    }}
                />
                <Tooltip />
                <Line type="monotone" dataKey="percentage" stroke="#68b068" activeDot={{ r: 8 }} />
            </LineChart>
        </ResponsiveContainer>
    );
}