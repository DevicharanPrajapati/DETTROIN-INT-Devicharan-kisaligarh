import { motion } from "framer-motion";
import { FaSchool } from "react-icons/fa";

const HeroSection = ({
  backgroundImage,
  badge,
  title,
  description,
}) => {
  return (
    <section
      className="relative flex min-h-[70vh] items-center justify-center bg-cover bg-center pt-25 pb-10"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
      loading="lazy"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-slate-900/75"></div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Badge */}
          <span className="inline-flex items-center gap-2 rounded-full bg-amber-500/20 px-5 py-2 text-sm font-semibold text-amber-400">
            <FaSchool />
            {badge}
          </span>

          {/* Title */}
          <h1 className="mt-6 text-4xl font-bold leading-tight md:text-6xl">
            {title}
          </h1>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-200">
            {description}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;