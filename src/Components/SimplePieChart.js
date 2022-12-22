import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  // Legend,
} from "recharts";
import { randomGen } from "../HelperUtils";

export const SimplePieChart = ({ colors, linkTo }) => {
  const dataSet = [
    { name: "Group A", value: randomGen(100, 200) },
    { name: "Group B", value: randomGen(100, 200) },
    { name: "Group C", value: randomGen(100, 200) },
    { name: "Group D", value: randomGen(100, 200) },
  ];
  const _COLORS_ = [
    "#ea5545",
    "#f46a9b",
    "#ef9b20",
    "#edbf33",
    "#ede15b",
    "#bdcf32",
    "#87bc45",
    "#27aeef",
    "#b33dc6",
  ];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
  
    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <>
      <ResponsiveContainer width="100%" height="100%" minHeight={"20vh"} maxHeight={"100px"}>
        <PieChart width={100} height={100}>
          <Pie
            data={dataSet}
            cx="50%"
            cy="50%"
            labelLine={false}
            innerRadius={5}
            label={renderCustomizedLabel}
            outerRadius={75}
            fill="#8884d8"
            dataKey="value"
          >
            {dataSet.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={_COLORS_[index % _COLORS_.length]}
              />
            ))}
          </Pie>
          {/* <Legend verticalAlign="bottom" align="center" /> */}

          <Tooltip formatter={(value) => value + "%"} />
        </PieChart>
      </ResponsiveContainer>
    </>
  );
};
