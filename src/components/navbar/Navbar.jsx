import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

import Logo from "./Logo";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "bg-slate-800/95 backdrop-blur-md shadow-lg"
            : "bg-slate-800/95"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <DesktopMenu />

          {/* Right Side */}
          <div className="flex items-center gap-4">
            {/* Admission Button */}
            <Link to={"/admission"}>
            <button className="hidden rounded-xl bg-amber-500 px-5 py-3 font-semibold text-slate-900 transition duration-300 hover:bg-amber-400 lg:block">
              Apply Now
            </button>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(true)}
              className="text-2xl text-white lg:hidden"
            >
              <FaBars />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      <MobileMenu
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
      />
    </>
  );
};

export default Navbar;