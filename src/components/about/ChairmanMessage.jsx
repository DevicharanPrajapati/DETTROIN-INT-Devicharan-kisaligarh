import { motion } from "framer-motion";
import chairmanImg from "../../assets/images/about/a2.png"; 

const ChairmanMessage = () => {
  return (
    <section id="chairman" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Chairman Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={chairmanImg}
              alt="Pravin Agarwal - Managing Chairman"
              className="mx-auto w-full max-w-md rounded-3xl object-cover shadow-xl"
            />
          </motion.div>

          {/* Message */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-600">
              Chairman's Message
            </span>

            <h2 className="mt-5 text-4xl font-bold text-slate-900">
              A Vision for Meaningful Education
            </h2>

            <blockquote className="mt-6 border-l-4 border-amber-500 pl-5 italic text-slate-700">
              "Don't educate your children to be rich. Educate them to be
              happy, so they know the value of things, not the price."
            </blockquote>

            <div className="mt-8 space-y-5 text-lg leading-8 text-slate-600">
              <p>
                At Krishna International School, we believe that education is
                much more than preparing students for careers. It is about
                building character, instilling ethics, and nurturing moral
                values that guide them throughout life.
              </p>

              <p>
                As the world continues to evolve, our institution remains
                committed to providing a balanced, relevant, and future-ready
                curriculum that inspires independent thinking, creativity, and
                compassion.
              </p>

              <p>
                Our aim is to develop confident individuals who embrace global
                opportunities while remaining deeply rooted in Indian values,
                culture, and traditions. We strive to create lifelong learners
                who contribute positively to society with integrity and
                responsibility.
              </p>
            </div>

            {/* Signature */}
            <div className="mt-10 border-t border-slate-200 pt-6">
              <h3 className="text-2xl font-bold text-slate-900">
                Pravin Agarwal
              </h3>

              <p className="mt-2 text-slate-600">
                Managing Chairman
                <br />
                Krishna International School
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ChairmanMessage;