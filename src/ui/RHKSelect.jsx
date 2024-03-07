/* eslint-disable react/prop-types */
function RHKSelect({ name, label, register, options, required }) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-secondary-700">
        {label} {required && <span className="text-error">*</span>}
      </label>
      <select {...register(name)} id={name} className="textField__input">
        {options.map((opt) => (
          <options key={opt.value} value={opt.value}>
            {opt.label}
          </options>
        ))}
      </select>
    </div>
  );
}

export default RHKSelect;
