import { useState } from "react";

const initialState = {
  studentName: "",
  parentName: "",
  email: "",
  phone: "",
  interestedClass: "",
  message: "",
};

const AdmissionEnquiryForm = () => {
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
      !formData.studentName ||
      !formData.parentName ||
      !formData.phone ||
      !formData.interestedClass
    ) {
      alert("Please fill all required fields.");
      return;
    }

    const enquiries =
      JSON.parse(localStorage.getItem("admissionEnquiries")) || [];

    enquiries.push({
      id: Date.now(),
      ...formData,
      createdAt: new Date().toLocaleString(),
    });

    localStorage.setItem(
      "admissionEnquiries",
      JSON.stringify(enquiries)
    );

    alert("Your enquiry has been submitted successfully.");

    setFormData(initialState);
  };

  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-4xl rounded-3xl bg-white p-8 shadow-lg">
        <div className="mb-10 text-center">
          <span className="rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-600">
            Admission Enquiry
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900">
            Have Questions?
          </h2>

          <p className="mt-4 text-slate-600">
            Fill out the form below and our admissions team will get in touch
            with you shortly.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <input
              type="text"
              name="studentName"
              placeholder="Student Name *"
              value={formData.studentName}
              onChange={handleChange}
              className="rounded-xl border p-3"
            />

            <input
              type="text"
              name="parentName"
              placeholder="Parent Name *"
              value={formData.parentName}
              onChange={handleChange}
              className="rounded-xl border p-3"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="rounded-xl border p-3"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number *"
              value={formData.phone}
              onChange={handleChange}
              className="rounded-xl border p-3"
            />

            <select
              name="interestedClass"
              value={formData.interestedClass}
              onChange={handleChange}
              className="rounded-xl border p-3 md:col-span-2"
            >
              <option value="">Select Class *</option>
              <option>Nursery</option>
              <option>LKG</option>
              <option>UKG</option>
              <option>I</option>
              <option>II</option>
              <option>III</option>
              <option>IV</option>
              <option>V</option>
              <option>VI</option>
              <option>VII</option>
              <option>VIII</option>
              <option>IX</option>
              <option>X</option>
              <option>XI</option>
              <option>XII</option>
            </select>
          </div>

          <textarea
            rows={5}
            name="message"
            placeholder="Write your query..."
            value={formData.message}
            onChange={handleChange}
            className="w-full rounded-xl border p-3"
          />

          <button
            type="submit"
            className="rounded-xl bg-amber-500 px-8 py-3 font-semibold text-white hover:bg-amber-600"
          >
            Submit Enquiry
          </button>
        </form>
      </div>
    </section>
  );
};

export default AdmissionEnquiryForm;