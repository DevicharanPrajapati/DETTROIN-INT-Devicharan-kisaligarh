const FormInput = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  required = true,
}) => {
  return (
    <div>
      <label className="mb-2 block font-medium text-slate-700">
        {label}
      </label>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-amber-500"
      />
    </div>
  );
};

export default FormInput;