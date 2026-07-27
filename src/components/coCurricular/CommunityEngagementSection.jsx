import { motion } from "framer-motion";
import {
  FaSeedling,
  FaHandsHelping,
  FaBookReader,
  FaGlobeAsia,
  FaUsers,
  FaLeaf,
} from "react-icons/fa";

const communityActivities = [
  {
    icon: <FaSeedling />,
    title: "Tree Plantation",
    description:
      "Students actively participate in plantation drives to promote environmental awareness and sustainable living.",
  },
  {
    icon: <FaHandsHelping />,
    title: "Social Service",
    description:
      "Community outreach programs encourage students to develop compassion, empathy, and a spirit of service.",
  },
  {
    icon: <FaBookReader />,
    title: "Educational Visits",
    description:
      "Visits to museums, historical sites, and educational institutions provide practical learning experiences.",
  },
  {
    icon: <FaGlobeAsia />,
    title: "Awareness Campaigns",
    description:
      "Students organize campaigns on health, cleanliness, road safety, and environmental conservation.",
  },
  {
    icon: <FaUsers />,
    title: "Leadership Activities",
    description:
      "Student councils and collaborative projects help learners build leadership, communication, and teamwork skills.",
  },
  {
    icon: <FaLeaf />,
    title: "Clean Campus Drive",
    description:
      "Regular cleanliness initiatives instill discipline, civic responsibility, and respect for the environment.",
  },
];

const CommunityEngagementSection = () => {
  return (
    <section className="bg-white py-20" id="community">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-600">
            Community Engagement
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900">
            Learning Through Service & Leadership
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            We encourage students to become responsible citizens by engaging
            in meaningful community initiatives that foster leadership,
            environmental awareness, teamwork, and social responsibility.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {communityActivities.map((activity, index) => (
            <motion.div
              key={activity.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-100 text-3xl text-amber-500">
                {activity.icon}
              </div>

              <h3 className="mt-6 text-2xl font-semibold text-slate-900">
                {activity.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {activity.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunityEngagementSection;