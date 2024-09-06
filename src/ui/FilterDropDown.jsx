import { useSearchParams } from "react-router-dom";

function FilterDropDown({ options, filterField }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const category = searchParams.get(filterField) || "";
  const handleChange = (e) => {
    searchParams.set(filterField, e.target.value);
    setSearchParams(searchParams);
  };
  

  return (
    <select value={category} onChange={handleChange} className=" w-1/4 textFieldInput py-2 text-sm  bg-secondary-0" >
      {options.map((item) => (
        <option key={item.value} value={item.value}>
          {item.label}
        </option>
      ))}
    </select>
  );
}

export default FilterDropDown;
