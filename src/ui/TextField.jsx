function TextField({ name, value, label, onChange }) {
  return (
    <div>
      <label className="mb-2 block" htmlFor={name}>
        {label}
      </label>
      <input
        value={value}
        onChange={onChange}
        id={name}
        type="text"
        autoComplete="off"
        name={name}
        className="textFieldInput"
      />
    </div>
  );
}

export default TextField;
