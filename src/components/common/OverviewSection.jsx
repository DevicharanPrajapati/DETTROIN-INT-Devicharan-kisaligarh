import { motion } from "framer-motion";

const OverviewSection = ({
  tabs = [],
  badge,
  title,
  description,
  highlights = [],
}) => {
  return (
    <section className="bg-white py-20">
      {/* Navigation Tabs */}
      {tabs.length > 0 && (
        <div className="flex flex-wrap items-center justify-center gap-4 pb-10">
          {tabs.map((tab) => (
            <a
              key={tab.id}
              href={`#${tab.id}`}
              className="rounded-full bg-slate-800 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition-all duration-300 hover:bg-emerald-400 hover:text-slate-900"
            >
              {tab.title}
            </a>
          ))}
        </div>
      )}

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-600">
            {badge}
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900">
            {title}
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            {description}
          </p>
        </motion.div>

        {/* Highlight Cards */}
        {highlights.length > 0 && (
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-amber-100 text-2xl text-amber-500">
                  {item.icon}
                </div>

                <h3 className="mt-6 text-xl font-semibold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default OverviewSection;