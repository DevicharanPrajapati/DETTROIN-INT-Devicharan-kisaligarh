import { motion } from "framer-motion";
import { FaArrowRight, FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-3xl bg-linear-to-r from-slate-900 to-slate-800 px-8 py-14 text-center shadow-2xl lg:px-20"
        >
          <span className="rounded-full bg-amber-500/20 px-4 py-2 text-sm font-semibold text-amber-400">
            Admissions Open 2026–27
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white lg:text-5xl">
            Give Your Child the Best Start for a Bright Future
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-300">
            Join Krishna International School and provide your child with
            quality education, experienced faculty, modern facilities, and a
            nurturing environment for holistic development.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-5">
            <Link 
            to={"/admission"}
            >
            <button className="flex items-center gap-2 rounded-xl bg-amber-500 px-7 py-3 font-semibold text-slate-900 transition hover:bg-amber-400">
              Apply Now
              <FaArrowRight />
            </button>
            </Link>

            <Link
            to={"/contact"}
            >
            <button className="flex items-center gap-2 rounded-xl border border-white px-7 py-3 font-semibold text-white transition hover:bg-white hover:text-slate-900">
              <FaPhoneAlt />
              Contact Us
            </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;