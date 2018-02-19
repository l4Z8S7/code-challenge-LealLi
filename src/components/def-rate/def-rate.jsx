import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Legend } from 'recharts';
import './def-rate.css';

export default (props) => {
  return (
    <div className="def-rate">
        <p>Deferral Rate <span><i className="fas fa-info-circle"></i></span></p>
        <span>Participation Measure</span>
        <div className="chart">
          <LineChart width={400} height={200} data={props.data} style={{ margin: 'auto' }}>
            <XAxis dataKey="x_axis" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Legend />
            <Line type="monotone" dataKey="Benchmark" stroke="#1ee670" />
            <Line type="monotone" dataKey="Plan Overall" stroke="#471f13" />
          </LineChart>
        </div>
        <button>VIEW MORE</button>
    </div>
  );
}
