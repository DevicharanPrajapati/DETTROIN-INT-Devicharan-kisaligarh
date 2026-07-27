import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import { navbarLinks } from "./DropdownLinks";

const NavLinks = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  return (
    <ul className="hidden lg:flex items-center gap-8">
      {navbarLinks.map((link) => (
        <li
          key={link.title}
          className="relative"
          onMouseEnter={() => setActiveDropdown(link.title)}
          onMouseLeave={() => setActiveDropdown(null)}
        >
          {link.dropdown ? (
            <>
              <button className="flex items-center gap-1 font-medium hover:text-blue-600 transition-colors">
                {link.title}

                <motion.div
                  animate={{
                    rotate: activeDropdown === link.title ? 180 : 0,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <FiChevronDown size={16} />
                </motion.div>
              </button>

              <AnimatePresence>
                {activeDropdown === link.title && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 15,
                      scale: 0.95,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      y: 10,
                      scale: 0.95,
                    }}
                    transition={{
                      duration: 0.22,
                      ease: "easeOut",
                    }}
                    className="absolute left-0 top-full mt-3 min-w-56 rounded-xl bg-white p-2 shadow-xl"
                  >
                    {link.dropdown.map((item) => (
                      <NavLink
                        key={item.title}
                        to={item.path}
                        className="block rounded-lg px-4 py-3 transition hover:bg-gray-100"
                      >
                        {item.title}
                      </NavLink>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </>
          ) : (
            <NavLink
              to={link.path}
              className={({ isActive }) =>
                isActive
                  ? "font-semibold text-blue-600"
                  : "font-medium transition hover:text-blue-600"
              }
            >
              {link.title}
            </NavLink>
          )}
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;