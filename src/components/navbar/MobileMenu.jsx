import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaTimes,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";

import { navLinks } from "./navData";

const MobileMenu = ({ isOpen, onClose }) => {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (index) => {
    setOpenMenu(openMenu === index ? null : index);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Drawer */}
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed right-0 top-0 z-50 h-screen w-80 bg-slate-900 shadow-2xl lg:hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-slate-700 px-6 py-5">
              <h2 className="text-xl font-bold text-white">
                Menu
              </h2>

              <button
                onClick={onClose}
                className="text-2xl text-white"
              >
                <FaTimes />
              </button>
            </div>

            {/* Navigation */}
            <nav className="h-[calc(100%-150px)] overflow-y-auto py-4">
              {navLinks.map((item, index) => (
                <div
                  key={item.title}
                  className="border-b border-slate-800"
                >
                  {!item.children ? (
                    <NavLink
                      to={item.path}
                      onClick={onClose}
                      className={({ isActive }) =>
                        `block px-6 py-4 transition ${
                          isActive
                            ? "text-amber-400"
                            : "text-white hover:text-amber-400"
                        }`
                      }
                    >
                      {item.title}
                    </NavLink>
                  ) : (
                    <>
                      <button
                        onClick={() => toggleMenu(index)}
                        className="flex w-full items-center justify-between px-6 py-4 text-left text-white hover:text-amber-400"
                      >
                        <span>{item.title}</span>

                        {openMenu === index ? (
                          <FaChevronUp size={14} />
                        ) : (
                          <FaChevronDown size={14} />
                        )}
                      </button>

                      <AnimatePresence>
                        {openMenu === index && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{
                              height: "auto",
                              opacity: 1,
                            }}
                            exit={{
                              height: 0,
                              opacity: 0,
                            }}
                            transition={{ duration: 0.25 }}
                            className="overflow-hidden bg-slate-800"
                          >
                            {item.children.map((child) => (
                              <NavLink
                                key={child.title}
                                to={child.path}
                                onClick={onClose}
                                className={({ isActive }) =>
                                  `block px-10 py-3 text-sm transition ${
                                    isActive
                                      ? "text-amber-400"
                                      : "text-slate-300 hover:text-amber-400"
                                  }`
                                }
                              >
                                {child.title}
                              </NavLink>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  )}
                </div>
              ))}
            </nav>

            {/* Footer */}
            <div className="absolute bottom-0 left-0 w-full border-t border-slate-700 p-6">
              <button className="w-full rounded-xl bg-amber-500 py-3 font-semibold text-slate-900 transition hover:bg-amber-400">
                Apply Now
              </button>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;