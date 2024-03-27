import { useSearchParams } from "react-router-dom";
import Select from "./Select.jsx";

function FilterDropdown({ options, filterField }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const value = searchParams.get(filterField) || "";

  const handleChange = (e) => {
    searchParams.set(filterField, e.target.value);
    setSearchParams(searchParams);
  };

  return <Select onChange={handleChange} options={options} value={value} />;
}

export default FilterDropdown;
