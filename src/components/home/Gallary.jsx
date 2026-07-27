import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

import gallery1 from "../../assets/images/gallery/g1.png";
import gallery2 from "../../assets/images/gallery/g2.png";
import gallery3 from "../../assets/images/gallery/g6.png";
import gallery4 from "../../assets/images/gallery/g8.png";
import gallery5 from "../../assets/images/gallery/g7.png";
import gallery6 from "../../assets/images/gallery/g3.png";

const images = [
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
];

const Gallery = () => {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <span className="rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-600">
            Gallery
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900">
            A Glimpse of Campus Life
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-slate-600">
            Explore moments from academics, sports, cultural events, and
            everyday learning at Krishna International School.
          </p>
        </motion.div>

        {/* Images */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
              className="group overflow-hidden rounded-2xl"
            >
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className="h-72 w-full object-cover transition duration-500 group-hover:scale-110"
              />
            </motion.div>
          ))}
        </div>

        {/* Button */}
        <div className="mt-12 text-center">
          <Link to={"/gallery"}>
          <button className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-6 py-3 font-semibold text-white transition hover:bg-amber-500 hover:text-slate-900">
            View Full Gallery
            <FaArrowRight />
          </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Gallery;