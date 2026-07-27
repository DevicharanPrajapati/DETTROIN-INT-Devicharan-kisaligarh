import { motion } from "framer-motion";
import AdmissionForm from "./AdmissionForm";

const AdmissionRegistration = () => {
  return (
    <section className="bg-slate-50 py-20" id="registration">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <span className="rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-600">
            Admissions
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900">
            Online Admission Registration
          </h2>

          <p className="mt-4 text-slate-600">
            Fill out the admission form below. Your application will be
            temporarily saved in your browser using local storage.
          </p>
        </motion.div>

        <AdmissionForm />
      </div>
    </section>
  );
};

export default AdmissionRegistration;