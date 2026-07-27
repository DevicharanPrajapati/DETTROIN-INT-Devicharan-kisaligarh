import {
  FaBookOpen,
  FaGraduationCap,
  FaFlask,
  FaUniversity,
} from "react-icons/fa";
import { motion } from "framer-motion";

const academics = [
  {
    title: "Primary",
    icon: <FaBookOpen />,
    description:
      "Building strong foundations through interactive and activity-based learning.",
  },
  {
    title: "Middle School",
    icon: <FaGraduationCap />,
    description:
      "Developing analytical thinking, creativity, and academic confidence.",
  },
  {
    title: "Secondary",
    icon: <FaFlask />,
    description:
      "Focused learning with practical exposure and board examination preparation.",
  },
  {
    title: "Senior Secondary",
    icon: <FaUniversity />,
    description:
      "Science, Commerce, and Humanities streams preparing students for higher education.",
  },
];

const Academics = () => {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-600">
            Academics
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900">
            A Curriculum Designed for Every Stage of Learning
          </h2>

          <p className="mt-5 text-slate-600">
            Our CBSE curriculum nurtures curiosity, creativity, critical
            thinking, and academic excellence while preparing students for
            future success.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {academics.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-amber-400 hover:shadow-xl"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-amber-100 text-3xl text-amber-500 transition group-hover:bg-amber-500 group-hover:text-white">
                {item.icon}
              </div>

              <h3 className="mb-3 text-2xl font-bold text-slate-900">
                {item.title}
              </h3>

              <p className="leading-7 text-slate-600">
                {item.description}
              </p>

              <button className="mt-6 font-semibold text-amber-500 transition hover:text-slate-900">
                Learn More →
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Academics;