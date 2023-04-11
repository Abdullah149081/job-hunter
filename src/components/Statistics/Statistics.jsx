import React from "react";

import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const Statistics = () => {
  const assignment = [
    {
      name: "Assignment 1",
      mark: 60,
    },
    {
      name: "Assignment 2",
      mark: 60,
    },
    {
      name: "Assignment 3",
      mark: 60,
    },
    {
      name: "Assignment 4",
      mark: 60,
    },
    {
      name: "Assignment 5",
      mark: 60,
    },
    {
      name: "Assignment 6",
      mark: 59,
    },
    {
      name: "Assignment 7",
      mark: 60,
    },
    {
      name: "Assignment 8",
      mark: 60,
    },
  ];

  return (
    <div className="px-4 py-16  md:px-24 lg:px-28 lg:py-20 space-y-20">
      <h2 className="text-center text-4xl font-bold text-gray-800">Assignment Marks</h2>
      <div className="mx-auto" style={{ maxWidth: "1250px", height: "400px", width: "100%" }}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            width={500}
            height={400}
            data={assignment}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis stroke="#4f46e5" style={{ fontWeight: "700" }} dataKey="name" />
            <YAxis style={{ fontWeight: "600" }} />
            <Tooltip />
            <Area type="monotone" dataKey="mark" stroke="#4f46e5" fill="#7c3aed" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Statistics;
