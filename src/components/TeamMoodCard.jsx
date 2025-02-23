const teamMembers = [
  { name: "Andrea", role: "UX Junior", mood: "😊" },
  { name: "Alvaro", role: "Back-end Developer", mood: "😎" },
  { name: "Juan", role: "UX Senior", mood: "🙂" },
  { name: "Jose", role: "Marketing", mood: "😀" },
  { name: "Maria", role: "UX Junior", mood: "😊" },
];

const TeamMoodCard = () => {
  return (
    <div className="card bg-white p-5 flex flex-col gap-4">
      <h3 className="text-lg font-semibold">Team Mood</h3>
      <ul className="space-y-4">
        {teamMembers.map((member, index) => (
          <li
            key={index}
            className="flex items-center justify-between border-b last:border-none pb-2"
          >
            <div className="w-10 h-10 flex items-center justify-center bg-blue-500 text-white font-bold rounded-full">
              {member.name.charAt(0)}
            </div>
            <div className="flex-1 ml-3">
              <p className="text-sm font-medium">{member.name}</p>
              <p className="text-xs text-gray-500">{member.role}</p>
            </div>
            <span className="text-lg">{member.mood}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TeamMoodCard;
