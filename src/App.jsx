import BudgetStatus from "./components/BudgetStatus";
import DoughnutChart from "./components/DoughnutChart";
import LineChart from "./components/LineChart";
import Navbar from "./components/Navbar";
import ProjectCard from "./components/ProjectCard";
import TeamMoodCard from "./components/TeamMoodCard";
import { projectCardsData } from "./utils/constants";

function App() {
  return (
    <>
      <Navbar />
      <div className=" bg-gray-100 min-h-screen pt-24">
        <div className="dashboard-layout w-[80vw] mx-auto mb-10">
          {projectCardsData.map((item) => (
            <ProjectCard key={item.label} item={item} />
          ))}

          <TeamMoodCard />
          <LineChart />
          <DoughnutChart />
        </div>
        <BudgetStatus />
      </div>
    </>
  );
}

export default App;
