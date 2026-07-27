import { useState } from "react";
import { NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";
import { navbarLinks } from "./DropdownLinks";
import CTAButton from "./CTAButton";

const MobileNav = ({ menuOpen, setMenuOpen }) => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (title) => {
    setOpenDropdown((prev) => (prev === title ? null : title));
  };

  return (
    <AnimatePresence>
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.3 }}
          className="absolute left-0 top-full w-full bg-white shadow-xl lg:hidden"
        >
          <ul className="flex flex-col py-4">
            {navbarLinks.map((link) => (
              <li key={link.title} className="border-b border-gray-100">
                {link.dropdown ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(link.title)}
                      className="flex w-full items-center justify-between px-6 py-4 text-left font-medium"
                    >
                      {link.title}

                      <motion.div
                        animate={{
                          rotate:
                            openDropdown === link.title ? 180 : 0,
                        }}
                      >
                        <FiChevronDown />
                      </motion.div>
                    </button>

                    <AnimatePresence>
                      {openDropdown === link.title && (
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
                          transition={{
                            duration: 0.3,
                          }}
                          className="overflow-hidden bg-gray-50"
                        >
                          {link.dropdown.map((item) => (
                            <NavLink
                              key={item.title}
                              to={item.path}
                              onClick={() => setMenuOpen(false)}
                              className="block px-10 py-3 text-sm hover:bg-gray-100"
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
                    onClick={() => setMenuOpen(false)}
                    className="block px-6 py-4 font-medium hover:bg-gray-100"
                  >
                    {link.title}
                  </NavLink>
                )}
              </li>
            ))}

            <div className="p-6">
              <CTAButton />
            </div>
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileNav;