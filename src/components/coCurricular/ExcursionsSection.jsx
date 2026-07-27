import { motion } from "framer-motion";
import {
  FaBus,
  FaMountain,
  FaUniversity,
  FaTree,
  FaMapMarkedAlt,
  FaUsers,
} from "react-icons/fa";

const excursions = [
  {
    icon: <FaUniversity />,
    title: "Educational Tours",
    description:
      "Students visit museums, science centers, historical monuments, and educational institutions to enhance classroom learning through real-world experiences.",
  },
  {
    icon: <FaMountain />,
    title: "Adventure Camps",
    description:
      "Adventure activities help students develop confidence, resilience, teamwork, and leadership while enjoying the outdoors.",
  },
  {
    icon: <FaTree />,
    title: "Nature Walks",
    description:
      "Nature visits encourage environmental awareness and help students appreciate biodiversity through hands-on observation.",
  },
  {
    icon: <FaBus />,
    title: "Industrial Visits",
    description:
      "Visits to industries and workplaces provide valuable insights into modern technology, manufacturing, and professional careers.",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Cultural Excursions",
    description:
      "Students explore heritage sites, art galleries, and cultural landmarks to understand India's rich traditions and history.",
  },
  {
    icon: <FaUsers />,
    title: "Group Learning Trips",
    description:
      "Interactive group trips strengthen friendships, communication, collaboration, and social skills outside the classroom.",
  },
];

const ExcursionsSection = () => {
  return (
    <section id="excursions" className="bg-slate-50 py-20" id="excursions">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-600">
            Excursions & Trips
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900">
            Exploring Beyond the Classroom
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Educational excursions and field trips broaden students' horizons by
            connecting classroom learning with practical experiences. These
            journeys inspire curiosity, teamwork, and lifelong learning.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {excursions.map((trip, index) => (
            <motion.div
              key={trip.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-100 text-3xl text-amber-500">
                {trip.icon}
              </div>

              <h3 className="mt-6 text-2xl font-semibold text-slate-900">
                {trip.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {trip.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExcursionsSection;