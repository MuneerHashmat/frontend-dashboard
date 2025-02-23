/* eslint-disable react/prop-types */

const ProjectCard = ({ item }) => {
  return (
    <div
      style={{ backgroundColor: item.label === "Delayed" && "#ff6969" }}
      className="card relative py-4"
    >
      <div className="absolute top-2 left-2">
        <img src={item.icon} alt="icon" className="w-[25px] h-[25px]" />
      </div>

      <div className="flex flex-col gap-2 justify-center items-center">
        <h1 className="text-3xl">{item.number}</h1>
        <p className="text-sm">{item.label}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
