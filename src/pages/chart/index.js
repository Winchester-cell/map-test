import React from 'react'
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Label , ResponsiveContainer  } from 'recharts';

const data = [
    { name: 'Jan', value: 30 },
    { name: 'Feb', value: 50 },
    { name: 'Mar', value: 40 },
    { name: 'Apr', value: 70 },
];

export default function index() {
    return (
        <div className='' style={{ width: '100%', height: '100dvh'}}>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data} margin={{ top: 20, right: 30, bottom: 60, left: 60 }}>
                    <CartesianGrid stroke="#eee" strokeDasharray="5 5" />

                    <XAxis dataKey="name">
                        <Label value="ماه" offset={-50} position="insideBottom" />
                    </XAxis>

                    <YAxis>
                        <Label
                            value="درآمد (میلیون تومان)"
                            angle={-90}
                            position="insideLeft"
                            offset={-20}
                            style={{ textAnchor: 'middle' }}
                        />
                    </YAxis>

                    <Tooltip />
                    <Line type="monotone" dataKey="value" stroke="#8884d8" strokeWidth={2} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}
