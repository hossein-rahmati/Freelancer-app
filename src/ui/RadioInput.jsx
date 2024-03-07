/* eslint-disable react/prop-types */
function RadioInput({
  label,
  value,
  register,
  validationSchema,
  name,
  id,
  watch,
}) {
  return (
    <div className="flex items-center gap-x-2 text-secondary-600">
      <input
        className="cursor-pointer form-radio"
        type="radio"
        name={name}
        {...register(name, validationSchema)}
        id={id}
        value={value}
        checked={watch(name) === value}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
}

export default RadioInput;
