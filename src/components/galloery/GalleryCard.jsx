import { motion } from "framer-motion";

const GalleryCard = ({ image, title, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.08 }}
      viewport={{ once: true }}
      className="group overflow-hidden rounded-2xl shadow-md"
    >
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-72 w-full object-cover transition duration-500 group-hover:scale-110"
        />

        <div className="absolute inset-0 flex items-center justify-center bg-slate-900/0 transition duration-500 group-hover:bg-slate-900/40">
          <span className="translate-y-5 rounded-full bg-white px-5 py-2 text-sm font-semibold text-slate-900 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
            {title}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default GalleryCard;