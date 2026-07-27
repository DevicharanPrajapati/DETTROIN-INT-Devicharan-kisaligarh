import { motion } from "framer-motion";
import {
  FaPaintBrush,
  FaPalette,
  FaMusic,
  FaCamera,
  FaPenNib,
  FaBookOpen,
} from "react-icons/fa";

const fineArts = [
  {
    icon: <FaPaintBrush />,
    title: "Drawing & Painting",
    description:
      "Students explore their creativity through sketching, painting, and visual storytelling using various artistic techniques.",
  },
  {
    icon: <FaPalette />,
    title: "Craft & Design",
    description:
      "Creative craft activities help students develop imagination, problem-solving skills, and fine motor coordination.",
  },
  {
    icon: <FaMusic />,
    title: "Music",
    description:
      "Our music program introduces students to vocal and instrumental music, fostering rhythm, confidence, and expression.",
  },
  {
    icon: <FaCamera />,
    title: "Photography",
    description:
      "Students learn the basics of photography and visual composition while capturing memorable moments around campus.",
  },
  {
    icon: <FaPenNib />,
    title: "Creative Writing",
    description:
      "Writing workshops encourage students to express ideas through stories, poems, essays, and imaginative compositions.",
  },
  {
    icon: <FaBookOpen />,
    title: "Literary Club",
    description:
      "Book discussions, debates, and literary competitions help students build communication and critical thinking skills.",
  },
];

const FineArtsSection = () => {
  return (
    <section className="bg-white py-20" id="fine-arts">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-600">
            Fine Arts
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900">
            Inspiring Creativity & Artistic Expression
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Fine arts provide students with opportunities to express themselves,
            discover hidden talents, and develop creativity through visual arts,
            music, literature, and other artistic experiences.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {fineArts.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-100 text-3xl text-amber-500">
                {item.icon}
              </div>

              <h3 className="mt-6 text-2xl font-semibold text-slate-900">
                {item.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FineArtsSection;