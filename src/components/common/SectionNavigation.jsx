import { motion } from "framer-motion";

const SectionNavigation = ({ tabs }) => {
  return (
    <section className="bg-white py-10">
      <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-5 px-6">
        {tabs.map((item, index) => (
          <motion.a
            key={item.href || item.id}
            href={item.href || `#${item.id}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08 }}
            viewport={{ once: true }}
            className="rounded-full bg-slate-800 px-7 py-4 text-sm font-bold uppercase tracking-wide text-white transition-all duration-300 hover:-translate-y-1 hover:bg-amber-500 hover:text-slate-900"
          >
            {item.title}
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default SectionNavigation;