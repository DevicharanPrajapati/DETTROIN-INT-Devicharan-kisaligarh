import { NavLink } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import { useState } from "react";
import Dropdown from "./Dropdown";
import { navLinks } from "./navData";

const DesktopMenu = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  return (
    <nav className="hidden lg:flex items-center gap-8">
      {navLinks.map((item, index) => (
        <div
          key={index}
          className="relative"
          onMouseEnter={() => setActiveMenu(index)}
          onMouseLeave={() => setActiveMenu(null)}
        >
          {/* Normal Link */}
          {!item.children ? (
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `font-medium transition-colors duration-300 ${
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
              {/* Dropdown Button */}
              <button className="flex items-center gap-2 font-medium text-white transition hover:text-amber-400">
                {item.title}

                <FaChevronDown
                  className={`text-xs transition-transform duration-300 ${
                    activeMenu === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Dropdown */}
              {activeMenu === index && (
                <Dropdown items={item.children} />
              )}
            </>
          )}
        </div>
      ))}
    </nav>
  );
};

export default DesktopMenu;