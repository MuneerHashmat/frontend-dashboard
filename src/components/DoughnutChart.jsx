import { Chart } from "react-google-charts";

const DoughnutChart = () => {
  const data = [
    ["Budget", "Percentage"],
    ["Over Budget", 19],
    ["On Budget", 33],
    ["Under Budget", 48],
  ];

  const options = {
    title: "Budget",
    pieHole: 0.6,
    is3D: false,
    chartArea: { width: "80%", height: "70%" },
    backgroundColor: "white",
    legend: { position: "bottom" },
    colors: ["#2ecc71", "#3498db", "#e74c3c"],
  };
  

  return (
    <div className="card" style={{ position: "relative" }}>
      <Chart chartType="PieChart" width="100%" height="300px" data={data} options={options} />
      <div
        className="flex flex-col justify-center items-center gap-1"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <h1 className="text-3xl">5</h1>
        <p className="text-sm">Total projects</p>
      </div>
    </div>
  );
};

export default DoughnutChart;
