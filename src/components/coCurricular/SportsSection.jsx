import { motion } from "framer-motion";
import {
  FaFutbol,
  FaBasketballBall,
  FaVolleyballBall,
  FaRunning,
  FaTableTennis,
  FaDumbbell,
} from "react-icons/fa";

const sports = [
  {
    icon: <FaFutbol />,
    title: "Football",
    description:
      "Students develop teamwork, discipline, and strategic thinking through regular football training and competitions.",
  },
  {
    icon: <FaBasketballBall />,
    title: "Basketball",
    description:
      "Basketball improves coordination, agility, and leadership while encouraging healthy competition.",
  },
  {
    icon: <FaVolleyballBall />,
    title: "Volleyball",
    description:
      "Students build communication skills and physical fitness through exciting volleyball matches.",
  },
  {
    icon: <FaRunning />,
    title: "Athletics",
    description:
      "Track and field events promote endurance, speed, confidence, and sportsmanship.",
  },
  {
    icon: <FaTableTennis />,
    title: "Indoor Games",
    description:
      "Chess, table tennis, and other indoor games sharpen concentration and decision-making skills.",
  },
  {
    icon: <FaDumbbell />,
    title: "Yoga & Fitness",
    description:
      "Regular yoga sessions enhance flexibility, mental focus, and overall well-being.",
  },
];

const SportsSection = () => {
  return (
    <section className="bg-slate-50 py-20" id="sports">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-600">
            Sports
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900">
            Building Healthy Minds & Strong Bodies
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Sports play a vital role in the holistic development of students.
            Our school encourages every child to participate in physical
            activities that promote fitness, teamwork, discipline, and
            confidence.
          </p>
        </motion.div>

        {/* Sports Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {sports.map((sport, index) => (
            <motion.div
              key={sport.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="rounded-2xl bg-white p-8 shadow-sm border border-slate-200 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-100 text-3xl text-amber-500">
                {sport.icon}
              </div>

              <h3 className="mt-6 text-2xl font-semibold text-slate-900">
                {sport.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {sport.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SportsSection;