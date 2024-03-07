/* eslint-disable react/prop-types */
import RadioInput from "./RadioInput";

function RadioInputGroup({ register, watch, errors, configs }) {
  const { name, validationSchema = {}, options } = configs;
  return (
    <div className="flex flex-col items-start">
      <div className="flex items-center justify-center gap-x-8">
        {options.map(({ value, label }) => {
          return (
            <RadioInput
              label={label}
              name={name}
              id={value}
              key={value}
              value={value}
              register={register}
              validationSchema={validationSchema}
              errors={errors}
              watch={watch}
            />
          );
        })}
      </div>
      {errors && errors["role"] && (
        <span className="text-error block text-sm mt-2">
          {errors["role"]?.message}
        </span>
      )}
    </div>
  );
}

export default RadioInputGroup;
