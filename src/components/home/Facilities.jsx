import { motion } from "framer-motion";
import {
  FaBook,
  FaFlask,
  FaBus,
  FaFutbol,
  FaDesktop,
  FaClinicMedical,
} from "react-icons/fa";

const facilities = [
  {
    icon: <FaDesktop />,
    title: "Smart Classrooms",
    description:
      "Interactive digital classrooms that enhance learning experiences.",
  },
  {
    icon: <FaFlask />,
    title: "Science Labs",
    description:
      "Well-equipped Physics, Chemistry, and Biology laboratories.",
  },
  {
    icon: <FaBook />,
    title: "Library",
    description:
      "A rich collection of books, journals, and digital learning resources.",
  },
  {
    icon: <FaFutbol />,
    title: "Sports Complex",
    description:
      "Indoor and outdoor sports facilities for holistic development.",
  },
  {
    icon: <FaBus />,
    title: "Transport",
    description:
      "Safe and reliable transport service covering nearby locations.",
  },
  {
    icon: <FaClinicMedical />,
    title: "Medical Care",
    description:
      "First-aid and regular health checkups ensuring student well-being.",
  },
];

const Facilities = () => {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-600">
            Our Facilities
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900">
            Modern Infrastructure for Better Learning
          </h2>

          <p className="mt-5 text-slate-600">
            We provide world-class facilities that support academic excellence,
            creativity, sports, and the overall development of every student.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {facilities.map((facility, index) => (
            <motion.div
              key={facility.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group rounded-2xl border border-slate-200 bg-slate-50 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-amber-400 hover:bg-white hover:shadow-xl"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-amber-100 text-3xl text-amber-500 transition group-hover:bg-amber-500 group-hover:text-white">
                {facility.icon}
              </div>

              <h3 className="mb-3 text-xl font-bold text-slate-900">
                {facility.title}
              </h3>

              <p className="leading-7 text-slate-600">
                {facility.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;