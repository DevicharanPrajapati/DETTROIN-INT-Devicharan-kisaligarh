import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "react-router-dom";

const Dropdown = ({ items }) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 15 }}
        transition={{ duration: 0.2 }}
        className="absolute left-0 top-full z-50 w-64 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl"
      >
        <div className="py-2">
          {items.map((item) => (
            <NavLink
              key={item.title}
              to={item.path}
              className={({ isActive }) =>
                `block px-6 py-3 text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-amber-50 text-amber-500"
                    : "text-slate-700 hover:bg-amber-50 hover:text-amber-500"
                }`
              }
            >
              {item.title}
            </NavLink>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Dropdown;