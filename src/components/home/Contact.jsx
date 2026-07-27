import { useState } from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";
import { motion } from "framer-motion";

const initialState = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

const Contact = () => {
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.message
    ) {
      alert("Please fill all required fields.");
      return;
    }

    const queries =
      JSON.parse(localStorage.getItem("contactQueries")) || [];

    queries.push({
      id: Date.now(),
      ...formData,
      submittedAt: new Date().toLocaleString(),
    });

    localStorage.setItem(
      "contactQueries",
      JSON.stringify(queries)
    );

    alert("Your message has been sent successfully!");

    setFormData(initialState);
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-slate-900 py-24 text-white">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h1 className="text-5xl font-bold">Contact Us</h1>

          <p className="mt-5 text-lg text-slate-300">
            We'd love to hear from you. Reach out for admissions,
            inquiries, or any assistance.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-600">
              Contact Information
            </span>

            <h2 className="mt-5 text-4xl font-bold text-slate-900">
              Let's Connect
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Whether you have questions about admissions, academics,
              or campus facilities, our team is here to help.
            </p>

            <div className="mt-10 space-y-6">

              <div className="flex gap-4">
                <FaMapMarkerAlt className="mt-1 text-xl text-amber-500" />

                <div>
                  <h4 className="font-semibold">Address</h4>

                  <p className="text-slate-600">
                    Krishna International School
                    <br />
                    Your City, State, India
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <FaPhoneAlt className="mt-1 text-amber-500" />

                <div>
                  <h4 className="font-semibold">Phone</h4>

                  <p className="text-slate-600">
                    +91 98765 43210
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <FaEnvelope className="mt-1 text-amber-500" />

                <div>
                  <h4 className="font-semibold">Email</h4>

                  <p className="text-slate-600">
                    info@krishnaschool.edu.in
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <FaClock className="mt-1 text-amber-500" />

                <div>
                  <h4 className="font-semibold">
                    Office Hours
                  </h4>

                  <p className="text-slate-600">
                    Mon – Sat : 8:00 AM – 4:00 PM
                  </p>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-white p-8 shadow-xl"
          >
            <h3 className="mb-8 text-3xl font-bold text-slate-900">
              Send a Message
            </h3>

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full rounded-xl border p-4 outline-none focus:border-amber-500"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="w-full rounded-xl border p-4 outline-none focus:border-amber-500"
              />

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full rounded-xl border p-4 outline-none focus:border-amber-500"
              />

              <textarea
                rows="5"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                className="w-full rounded-xl border p-4 outline-none focus:border-amber-500"
              />

              <button
                type="submit"
                className="w-full rounded-xl bg-slate-900 py-4 font-semibold text-white transition hover:bg-amber-500 hover:text-slate-900"
              >
                Send Message
              </button>
            </form>
          </motion.div>

        </div>
      </section>

      {/* Google Map */}
      <section className="bg-slate-50 pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="overflow-hidden rounded-3xl shadow-xl">
            <iframe
              title="School Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3525.2561862543794!2d78.03023767547516!3d27.924790476058476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3974a48b1dc2b28f%3A0x628f0ebab11d5872!2sKrishna%20International%20School%2C%20Aligarh%20%7C%20Best%20CBSE%20School%20Aligarh!5e0!3m2!1sen!2sin!4v1785178102444!5m2!1sen!2sin"
              width="100%"
              height="450"
              loading="lazy"
              className="border-0"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};



export default Contact;