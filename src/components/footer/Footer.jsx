import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
const socialLinks = [
  {
    icon: FaFacebookF,
    url: "https://www.facebook.com/krishnainternationalaligarh",
    label: "Facebook",
  },
  {
    icon: FaYoutube,
    url: "https://www.youtube.com/channel/UCfAsGL009vpBCbLDxP9fQsw/featured",
    label: "YouTube",
  },
  {
    icon: FaInstagram,
    url: "https://www.instagram.com/krishnainternationalaligarh/",
    label: "Instagram",
  },
  {
    icon: FaLinkedinIn,
    url: "https://www.linkedin.com/",
    label: "LinkedIn",
  },
];
const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* School Info */}
          <div>
            <h2 className="text-2xl font-bold text-white">
              Krishna International School
            </h2>

            <p className="mt-5 leading-7 text-slate-400">
              Empowering young minds through quality education, innovation, and
              holistic development in a safe and nurturing environment.
            </p>

            <div className="mt-6 flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;

                return (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-500 text-white transition duration-300 hover:bg-amber-600 hover:scale-110"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-white">Quick Links</h3>

            <ul className="mt-6 space-y-3">
              <li>
                <a href="/" className="hover:text-amber-400">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-amber-400">
                  About
                </a>
              </li>
              <li>
                <a href="/academics" className="hover:text-amber-400">
                  Academics
                </a>
              </li>
              <li>
                <a href="/gallery" className="hover:text-amber-400">
                  Gallery
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-amber-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Important Links */}
          <div>
            <h3 className="text-xl font-semibold text-white">
              Important Links
            </h3>

            <ul className="mt-6 space-y-3">
              <li>
                <a href="/admission" className="hover:text-amber-400">
                  Admission
                </a>
              </li>
              <li>
                <a href="/fee-payment" className="hover:text-amber-400">
                  Fee Payment
                </a>
              </li>
              <li>
                <a
                  href="/mandatory-disclosure"
                  className="hover:text-amber-400"
                >
                  Mandatory Disclosure
                </a>
              </li>
              <li>
                <a href="/school-events" className="hover:text-amber-400">
                  School Events
                </a>
              </li>
              <li>
                <a href="/privacy-policy" className="hover:text-amber-400">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold text-white">Contact Us</h3>

            <div className="mt-6 space-y-5">
              <div className="flex gap-3">
                <FaMapMarkerAlt className="mt-1 text-amber-400" />
                <p>
                  Krishna International School,
                  <br />
                  Your City, State - PIN
                </p>
              </div>

              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-amber-400" />
                <span>+91 98765 43210</span>
              </div>

              <div className="flex items-center gap-3">
                <FaEnvelope className="text-amber-400" />
                <span>info@krishnaschool.edu.in</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 border-t border-slate-800 pt-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Krishna International School. All Rights
          Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
