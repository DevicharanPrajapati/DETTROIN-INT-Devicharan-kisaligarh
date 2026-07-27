import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { FaChevronDown, FaTimes } from "react-icons/fa";
import { navItems } from "./navData";

const MobileMenu = ({ isOpen, setIsOpen }) => {
  const [activeMenu, setActiveMenu] = useState(null);

  const toggleMenu = (title) => {
    setActiveMenu(activeMenu === title ? null : title);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed right-0 top-0 z-50 h-screen w-80 bg-white shadow-xl lg:hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b p-5">
              <h2 className="text-xl font-bold text-slate-900">
                Krishna School
              </h2>

              <button
                onClick={() => setIsOpen(false)}
                className="text-xl text-slate-700"
              >
                <FaTimes />
              </button>
            </div>

            {/* Navigation */}
            <div className="overflow-y-auto px-5 py-4">
              {navItems.map((item) => (
                <div key={item.title} className="border-b">
                  {item.children ? (
                    <>
                      <button
                        onClick={() => toggleMenu(item.title)}
                        className="flex w-full items-center justify-between py-4 text-left font-medium text-slate-800"
                      >
                        {item.title}

                        <FaChevronDown
                          className={`transition-transform ${
                            activeMenu === item.title ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      <AnimatePresence>
                        {activeMenu === item.title && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            {item.children.map((subItem) => (
                              <Link
                                key={subItem.title}
                                to={subItem.path}
                                onClick={() => setIsOpen(false)}
                                className="block rounded-lg px-4 py-3 text-sm text-slate-600 transition hover:bg-amber-50 hover:text-amber-600"
                              >
                                {subItem.title}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className="block py-4 font-medium text-slate-800 transition hover:text-amber-600"
                    >
                      {item.title}
                    </Link>
                  )}
                </div>
              ))}

              {/* CTA */}
              <Link
                to="/admission"
                onClick={() => setIsOpen(false)}
                className="mt-8 block rounded-xl bg-amber-500 py-3 text-center font-semibold text-slate-900 transition hover:bg-amber-400"
              >
                Apply Now
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;