import { useState } from "react";
import FormInput from "./FormInput";

const AdmissionForm = () => {
  const [formData, setFormData] = useState({
    studentName: "",
    fatherName: "",
    motherName: "",
    email: "",
    phone: "",
    dob: "",
    gender: "",
    class: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const existing =
      JSON.parse(localStorage.getItem("admissionData")) || [];

    existing.push({
      id: Date.now(),
      ...formData,
    });

    localStorage.setItem(
      "admissionData",
      JSON.stringify(existing)
    );

    alert("Registration Successful!");

    setFormData({
      studentName: "",
      fatherName: "",
      motherName: "",
      email: "",
      phone: "",
      dob: "",
      gender: "",
      class: "",
      address: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 rounded-3xl bg-white p-8 shadow-lg"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <FormInput
          label="Student Name"
          name="studentName"
          value={formData.studentName}
          onChange={handleChange}
        />

        <FormInput
          label="Father Name"
          name="fatherName"
          value={formData.fatherName}
          onChange={handleChange}
        />

        <FormInput
          label="Mother Name"
          name="motherName"
          value={formData.motherName}
          onChange={handleChange}
        />

        <FormInput
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />

        <FormInput
          label="Phone Number"
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />

        <FormInput
          label="Date of Birth"
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
        />

        <div>
          <label className="mb-2 block font-medium">
            Gender
          </label>

          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="w-full rounded-xl border border-slate-300 px-4 py-3"
          >
            <option value="">Select</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Applying For Class
          </label>

          <select
            name="class"
            value={formData.class}
            onChange={handleChange}
            className="w-full rounded-xl border border-slate-300 px-4 py-3"
          >
            <option value="">Select Class</option>
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
      </div>

      <div>
        <label className="mb-2 block font-medium">
          Address
        </label>

        <textarea
          rows="4"
          name="address"
          value={formData.address}
          onChange={handleChange}
          className="w-full rounded-xl border border-slate-300 px-4 py-3"
        />
      </div>

      <button
        className="rounded-xl bg-amber-500 px-8 py-3 font-semibold text-white transition hover:bg-amber-600"
      >
        Submit Application
      </button>
    </form>
  );
};

export default AdmissionForm;