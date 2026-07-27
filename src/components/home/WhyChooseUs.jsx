import { motion } from "framer-motion";
import {
  FaChalkboardTeacher,
  FaLaptopCode,
  FaBus,
  FaShieldAlt,
  FaRunning,
  FaLeaf,
} from "react-icons/fa";

const features = [
  {
    icon: <FaChalkboardTeacher />,
    title: "Experienced Faculty",
    description:
      "Dedicated teachers focused on academic excellence and individual growth.",
  },
  {
    icon: <FaLaptopCode />,
    title: "Smart Learning",
    description:
      "Technology-enabled classrooms that make learning engaging and interactive.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Safe Campus",
    description:
      "Secure environment with CCTV surveillance and student safety as a priority.",
  },
  {
    icon: <FaRunning />,
    title: "Sports & Activities",
    description:
      "Balanced development through sports, arts, music, and extracurricular programs.",
  },
  {
    icon: <FaBus />,
    title: "Transport Facility",
    description:
      "Reliable transportation covering nearby towns and surrounding areas.",
  },
  {
    icon: <FaLeaf />,
    title: "Green Campus",
    description:
      "A peaceful and eco-friendly environment that inspires learning.",
  },
];

const WhyChoose = () => {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-600">
            Why Choose Us
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900">
            Inspiring Excellence Beyond the Classroom
          </h2>

          <p className="mt-5 text-slate-600">
            We combine quality education, modern infrastructure, and holistic
            development to prepare students for lifelong success.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-amber-400 hover:shadow-xl"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-amber-100 text-3xl text-amber-500 transition group-hover:bg-amber-500 group-hover:text-white">
                {feature.icon}
              </div>

              <h3 className="mb-3 text-xl font-bold text-slate-900">
                {feature.title}
              </h3>

              <p className="leading-7 text-slate-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;