import { motion } from "framer-motion";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";
import heroImage from "../../assets/images/hero/image.png"; 
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-slate-900 overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900/40" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 pt-24 lg:px-8">
        <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block rounded-full bg-amber-500/20 px-4 py-2 text-sm font-medium text-amber-400">
              Admissions Open 2026–27
            </span>

            <h1 className="mt-6 text-5xl font-extrabold leading-tight text-white lg:text-6xl">
              Let's Explore the
              <span className="block text-amber-400">
                Limitless Possibilities
              </span>
              of Knowledge
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              Krishna International School provides quality education through
              modern infrastructure, experienced teachers, and holistic student
              development.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to={"/admission"}>
                <button className="flex items-center gap-2 rounded-xl bg-amber-500 px-6 py-3 font-semibold text-slate-900 transition hover:bg-amber-400">
                  Apply Now
                  <FaArrowRight />
                </button>
              </Link>

              <Link to={"/academics"}>
                <button className="rounded-xl border border-white px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-slate-900">
                  Explore Campus
                </button>
              </Link>
            </div>

            {/* Highlights */}
            <div className="mt-10 space-y-3">
              {[
                "CBSE Curriculum",
                "Experienced Faculty",
                "Smart Classrooms",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-white">
                  <FaCheckCircle className="text-amber-400" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <img
              src={heroImage}
              alt="Krishna International School"
              className="rounded-3xl shadow-2xl"
            />

            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 rounded-2xl bg-white p-5 shadow-xl">
              <h3 className="text-3xl font-bold text-slate-900">6000+</h3>
              <p className="text-slate-600">Happy Students</p>
            </div>

            <div className="absolute -top-6 -right-6 rounded-2xl bg-amber-500 p-5 shadow-xl">
              <h3 className="text-2xl font-bold text-slate-900">CBSE</h3>
              <p className="text-slate-900">Affiliated School</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
