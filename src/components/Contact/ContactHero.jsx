import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

const contactInfo = [
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    value: "Krishna International School, Kurukshetra, Haryana",
  },
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    value: "+91 98765 43210",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    value: "info@krishnaschool.edu.in",
  },
  {
    icon: <FaClock />,
    title: "Office Hours",
    value: "Mon - Sat : 8:00 AM - 4:00 PM",
  },
];

const ContactSection = () => {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-14 text-center">
          <span className="rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-600">
            Contact Us
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900">
            We'd Love to Hear From You
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-slate-600">
            Have questions about admissions, academics, or school facilities?
            Feel free to reach out to us.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {contactInfo.map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-5 rounded-2xl bg-white p-6 shadow-sm"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-amber-100 text-2xl text-amber-500">
                  {item.icon}
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-slate-600">{item.value}</p>
                </div>
              </div>
            ))}
          </motion.div>

          
          {/* Google Map */}
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mb-8 text-center">
                <span className="rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-600">
                  Find Us
                </span>

                <h2 className="mt-5 text-4xl font-bold text-slate-900">
                  Visit Our Campus
                </h2>

                <p className="mx-auto mt-4 max-w-2xl text-slate-600">
                  We welcome you to visit Krishna International School and
                  explore our campus, classrooms, and learning environment.
                </p>
              </div>

              <div className="overflow-hidden rounded-3xl shadow-xl border border-slate-200">
                <iframe
                  title="Krishna International School Location"
                  src="https://www.google.com/maps/embed?pb=YOUR_GOOGLE_MAP_EMBED_LINK"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
