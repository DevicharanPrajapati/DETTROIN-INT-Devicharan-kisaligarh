import { motion } from "framer-motion";

const SectionCard = ({
  id,
  badge,
  title,
  subtitle,
  image,
  reverse = false,
  children,
}) => {
  return (
    <section id={id} className="py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`grid items-center gap-12 ${
            image ? "lg:grid-cols-2" : "grid-cols-1"
          }`}
        >
          {/* Image */}
          {image && (
            <div
              className={`${
                reverse ? "lg:order-2" : "lg:order-1"
              }`}
            >
              <img
                src={image}
                alt={title}
                className="h-full w-full rounded-3xl object-cover shadow-lg"
              />
            </div>
          )}

          {/* Content */}
          <div
            className={`${
              reverse ? "lg:order-1" : "lg:order-2"
            }`}
          >
            {badge && (
              <span className="inline-block rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-600">
                {badge}
              </span>
            )}

            <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-4xl">
              {title}
            </h2>

            {subtitle && (
              <p className="mt-3 text-lg text-slate-500">
                {subtitle}
              </p>
            )}

            <div className="mt-8 space-y-6 text-lg leading-8 text-slate-600">
              {children}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SectionCard;