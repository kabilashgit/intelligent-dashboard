import React from "react";
import { useLocation } from "react-router-dom";

import {
  BarChart,
  Bar,
  Tooltip,
  ResponsiveContainer,
  XAxis,
  // Legend,
  YAxis,
  Label,
  LabelList,
} from "recharts";

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

const SimpleMixedBarChart = ({ chartTitle }) => {
  const location = useLocation();

  const dataSet = [
    {
      name: "Jan",
      "Overforecasting by 50% and above": 10,
      "Overforecasting by 10-25%": 20,
      "Overforecasting by 25-50%": 20,
      "Forecast within 10% actuals": 15,
      "Underforecasting by 10-25%": 10,
      "Underforecasting by 25-50%": 8,
      "Underforecasting by 50% and more": 17,
    },
    {
      name: "Feb",
      "Overforecasting by 50% and above": 15,
      "Overforecasting by 10-25%": 25,
      "Overforecasting by 25-50%": 15,
      "Forecast within 10% actuals": 10,
      "Underforecasting by 10-25%": 5,
      "Underforecasting by 25-50%": 15,
      "Underforecasting by 50% and more": 15,
    },
    {
      name: "Mar",
      "Overforecasting by 50% and above": 10,
      "Overforecasting by 10-25%": 20,
      "Overforecasting by 25-50%": 10,
      "Forecast within 10% actuals": 10,
      "Underforecasting by 10-25%": 10,
      "Underforecasting by 25-50%": 20,
      "Underforecasting by 50% and more": 20,
    },
    {
      name: "Apr",
      "Overforecasting by 50% and above": 35,
      "Overforecasting by 10-25%": 8,
      "Overforecasting by 25-50%": 7,
      "Forecast within 10% actuals": 8,
      "Underforecasting by 10-25%": 19,
      "Underforecasting by 25-50%": 8,
      "Underforecasting by 50% and more": 15,
    },
    {
      name: "May",
      "Overforecasting by 50% and above": 20,
      "Overforecasting by 10-25%": 26,
      "Overforecasting by 25-50%": 12,
      "Forecast within 10% actuals": 22,
      "Underforecasting by 10-25%": 8,
      "Underforecasting by 25-50%": 8,
      "Underforecasting by 50% and more": 4,
    },
  ];

  const renderCustomizedLabel = (props) => {
    const { content, ...rest } = props;

    return <Label {...rest} fontSize="12" fill="#FFFFFF" fontWeight="Bold" />;
  };
  const dataNames = Object.keys(dataSet[0]);
  dataNames.shift();

  const dynamicMax = () => {
    if (location.pathname === "/marketing") {
      return <YAxis dataKey="name" domain={[0, 35000]} fontSize={"12px"} />;
    } else {
      return (
        <YAxis unit="%" dataKey="name" domain={[0, 100]} fontSize={"12px"} />
      );
    }
  };

  return (
    <div className="chart-wrapper elevation-2">
      <p className="text-bold text-white text-center">{chartTitle}</p>
      <ResponsiveContainer width="100%" height="100%" minHeight={"28vh"}>
        <BarChart width={150} height={30} data={dataSet}>
          <XAxis dataKey="name" fontSize={"12px"} />
          {dynamicMax()}
          <Tooltip />
          {/* <Legend wrapperStyle={{ fontSize: "12px" }} /> */}
          {dataNames.map((item, index) => (
            <Bar
              barSize={50}
              key={index}
              dataKey={dataNames[index]}
              stackId="a"
              fill={_COLORS_[index % _COLORS_.length]}
            >
              <LabelList
                dataKey={dataNames[index]}
                position="center"
                content={renderCustomizedLabel}
              />
            </Bar>
          ))}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SimpleMixedBarChart;
