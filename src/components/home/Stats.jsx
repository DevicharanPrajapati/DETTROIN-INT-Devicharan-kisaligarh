import { FaUserGraduate, FaChalkboardTeacher, FaSchool, FaAward } from "react-icons/fa";

const stats = [
  {
    id: 1,
    icon: <FaUserGraduate />,
    number: "6000+",
    label: "Students",
  },
  {
    id: 2,
    icon: <FaChalkboardTeacher />,
    number: "250+",
    label: "Qualified Teachers",
  },
  {
    id: 3,
    icon: <FaSchool />,
    number: "5 Acres",
    label: "Green Campus",
  },
  {
    id: 4,
    icon: <FaAward />,
    number: "15+",
    label: "Years of Excellence",
  },
];

const Stats = () => {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="group rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-amber-400 hover:shadow-xl"
            >
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-amber-100 text-2xl text-amber-500 transition group-hover:bg-amber-500 group-hover:text-white">
                {stat.icon}
              </div>

              <h3 className="text-4xl font-bold text-slate-900">
                {stat.number}
              </h3>

              <p className="mt-2 text-slate-600">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;