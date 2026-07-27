import { motion } from "framer-motion";
import {
  FaMusic,
  FaMicrophone,
  FaGuitar,
  FaDrum,
  FaKeyboard,
} from "react-icons/fa";
// import { GiSitar } from "react-icons/gi";
import { MdOutlineCelebration,  MdMusicNote } from "react-icons/md";

const performingArts = [
  {
    icon: <FaMicrophone />,
    title: "Indian Vocal",
    description:
      "Students receive training in Indian classical and contemporary vocal music, enhancing rhythm, expression, and confidence.",
  },
  {
    icon: <MdOutlineCelebration />,
    title: "Indian Dance",
    description:
      "Traditional Indian dance forms help students appreciate cultural heritage while developing grace, discipline, and creativity.",
  },
  {
    icon: <FaMusic />,
    title: "Western Dance",
    description:
      "Western dance sessions encourage creativity, coordination, fitness, and stage confidence through modern dance styles.",
  },
  {
    icon: <FaDrum />,
    title: "Tabla",
    description:
      "Students learn the fundamentals of rhythm and percussion through structured Tabla training.",
  },
  {
    icon: < MdMusicNote />,
    title: "Sitar",
    description:
      "Sitar classes introduce students to the beauty of Indian classical music and instrumental performance.",
  },
  {
    icon: <FaDrum />,
    title: "Drums",
    description:
      "Drum lessons improve timing, coordination, and musical expression while developing performance skills.",
  },
  {
    icon: <FaGuitar />,
    title: "Guitar",
    description:
      "Students explore melody, harmony, and performance techniques through guided guitar instruction.",
  },
  {
    icon: <FaKeyboard />,
    title: "Keyboard",
    description:
      "Keyboard training strengthens musical understanding while enhancing creativity and technical ability.",
  },
];

const PerformingArtsSection = () => {
  return (
    <section id="performing-arts" className="bg-slate-50 py-20" id="performing-arts">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl text-center"
        >
          <span className="rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-600">
            Performing Arts
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900">
            Discover the Joy of Music & Performance
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            At Krishna International School, performing arts inspire students
            to express themselves with confidence and creativity. Through
            music, dance, and instrumental training, learners develop artistic
            skills, discipline, teamwork, and an appreciation for India's rich
            cultural heritage while preparing for future opportunities in the
            creative arts.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {performingArts.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-100 text-3xl text-amber-500">
                {item.icon}
              </div>

              <h3 className="mt-6 text-xl font-semibold text-slate-900">
                {item.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PerformingArtsSection;