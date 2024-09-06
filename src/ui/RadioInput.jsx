function RadioInput({
  label,
  name,
  id,
  value,
  register,
  validationSchema,
  checked,
}) {
  return (
    <div className="flex items-center text-secondary-600 gap-x-2">
      <input
        className="cursor-pointer w-4 h-4 form-radio focus:ring-0"
        type="radio"
        name={name}
        id={id}
        value={value}
        {...register(name, validationSchema)}
        checked={checked}
      />
      <label htmlFor={id}>{label}</label>
      
    </div>
  );
}

export default RadioInput;
