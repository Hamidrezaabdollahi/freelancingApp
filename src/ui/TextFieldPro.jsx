function TextFieldPro({ name, label, register,errors, type = "text", required, validationSchema}) {
    return (
      <div>
        <label className="mb-2 block text-secondary-700" htmlFor={name}>
          {label}{required && <span className="text-error" >  *</span>}
        </label>
        <input
         {...register(name, validationSchema)}
          id={name}
          type={type}
          autoComplete="off"
          className="textFieldInput my-4"
        />
        {
          errors && errors[name] && <span className="text-error my-2 block text-sm mt-2">{errors[name]?.message}</span> 
        }
      </div>
    );
  }
  
  export default TextFieldPro;
  