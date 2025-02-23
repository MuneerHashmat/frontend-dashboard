import { Chart } from "react-google-charts";

const LineChart = () => {
  const data = [
    ["Date", "Revenue (€)"],
    ["19 June", 0],
    ["20 June", 1000],
    ["21 June", 3500],
    ["22 June", 3000],
    ["23 June", 4000],
    ["24 June", 5500],
    ["25 June", 6500],
  ];

  const options = {
    title: "Total Revenue",
    curveType: "function",
    legend: { position: "bottom" },
    hAxis: {
      title: "Date",
    },
    vAxis: {
      title: "Revenue (€)",
    },
    chartArea: { width: "80%", height: "70%" },
    backgroundColor: "white",
    colors: ["#3498db"], // Blue line color
  };

  return (
    <div className="card">
      <Chart
        chartType="LineChart"
        width="100%"
        height="300px"
        data={data}
        options={options}
      />
    </div>
  );
};

export default LineChart;
