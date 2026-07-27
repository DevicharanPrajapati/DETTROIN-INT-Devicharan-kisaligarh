import { FaUserGraduate, FaChalkboardTeacher, FaAward, FaSchool } from "react-icons/fa";

const stats = [
  {
    id: 1,
    icon: <FaSchool />,
    number: "5+",
    label: "Acres Campus",
  },
  {
    id: 2,
    icon: <FaUserGraduate />,
    number: "6000+",
    label: "Students",
  },
  {
    id: 3,
    icon: <FaChalkboardTeacher />,
    number: "100+",
    label: "Expert Teachers",
  },
  {
    id: 4,
    icon: <FaAward />,
    number: "20+",
    label: "Years of Excellence",
  },
];

const HeroStats = () => {
  return (
    <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
      {stats.map((item) => (
        <div
          key={item.id}
          className="rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
        >
          <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-amber-600 text-xl">
            {item.icon}
          </div>

          <h3 className="text-3xl font-bold text-gray-900">
            {item.number}
          </h3>

          <p className="mt-2 text-gray-600">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
};

export default HeroStats;