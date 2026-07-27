import { motion } from "framer-motion";
import {
  FaHandshake,
  FaChalkboardTeacher,
  FaLightbulb,
  FaAward,
  FaGraduationCap,
} from "react-icons/fa";

import overviewImg from "../../assets/images/academic/a1.webp";

const strengths = [
  {
    title: "Collaborative Learning",
    description:
      "Collaborating to advance the school's shared objective of achieving greater excellence.",
    icon: <FaHandshake />,
  },
  {
    title: "Faculty Development",
    description:
      "Continuous faculty growth through ongoing training and workshops.",
    icon: <FaChalkboardTeacher />,
  },
  {
    title: "Innovative Teaching",
    description:
      "Embracing innovative teaching and learning approaches for better classroom experiences.",
    icon: <FaLightbulb />,
  },
  {
    title: "Outstanding Results",
    description:
      "Implementing creative strategies that consistently produce excellent academic outcomes.",
    icon: <FaAward />,
  },
  {
    title: "Holistic Development",
    description:
      "Integrating scholastic and co-scholastic activities to nurture every child's overall development.",
    icon: <FaGraduationCap />,
  },
];

const OverviewSection = () => {
  return (
    <section id="overview" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-600">
            Academics
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900">
            Academic Overview
          </h2>
        </motion.div>

        {/* Image + Content */}
        <div className="grid items-center gap-14 lg:grid-cols-2">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl"
          >
            <img
              src={overviewImg}
              alt="Academic Overview"
              className="h-[500px] w-full object-cover"
            />

            <div className="absolute inset-0 bg-slate-900/45"></div>

            <div className="absolute bottom-0 left-0 p-8 text-white">
              <h3 className="text-3xl font-bold">
                Learning for the Future
              </h3>

              <p className="mt-3 max-w-md text-slate-200">
                Building confident learners through innovation,
                collaboration, and experiential education.
              </p>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg leading-8 text-slate-600">
              The key to learning in the twenty-first century is developing
              skills that prepare children for the future. At Krishna
              International School, students are equipped with social,
              cognitive, emotional, and academic competencies that help them
              thrive in an ever-changing world.
            </p>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              While traditional education focused heavily on examinations and
              grades, our learning philosophy embraces innovation, creativity,
              and experiential learning inspired by the values of the Gurukul
              system while meeting the expectations of modern education.
            </p>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Our learning system combines age-appropriate activities,
              skills-based education, interactive classrooms, continuous
              assessment, practical project work, and technology-enabled
              teaching to create a joyful and meaningful learning experience
              for every child.
            </p>
          </motion.div>
        </div>

        {/* Key Strengths */}
        <div className="mt-24">
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-3xl font-bold text-slate-900"
          >
            Key Strengths
          </motion.h3>

          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-5">
            {strengths.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-amber-400 hover:shadow-xl"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-amber-100 text-2xl text-amber-600">
                  {item.icon}
                </div>

                <h4 className="mt-5 text-xl font-bold text-slate-900">
                  {item.title}
                </h4>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default OverviewSection;