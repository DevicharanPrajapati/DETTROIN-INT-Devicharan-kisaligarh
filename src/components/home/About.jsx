import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import aboutImage from "../../assets/images/about/a1.webp";
import { Link } from "react-router-dom";

const features = [
  "CBSE Affiliated School",
  "Modern Smart Classrooms",
  "Experienced & Dedicated Faculty",
  "Holistic Student Development",
];

const About = () => {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2 lg:px-8">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img
            src={aboutImage}
            alt="Krishna International School"
            className="rounded-3xl shadow-xl"
          />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-600">
            About Krishna International School
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900">
            Building Bright Futures Through Quality Education
          </h2>

          <p className="mt-6 leading-8 text-slate-600">
            Krishna International School is committed to nurturing young minds
            through academic excellence, modern infrastructure, experienced
            faculty, and value-based education. We believe every child has the
            potential to become a confident, responsible, and successful
            individual.
          </p>

          <div className="mt-8 grid gap-4">
            {features.map((feature) => (
              <div key={feature} className="flex items-center gap-3">
                <FaCheckCircle className="text-amber-500" />
                <span className="text-slate-700">{feature}</span>
              </div>
            ))}
          </div>

          <Link to={"/about"}>
            <button className="mt-10 rounded-xl bg-slate-900 px-6 py-3 font-semibold text-white transition hover:bg-amber-500 hover:text-slate-900">
              Learn More
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
