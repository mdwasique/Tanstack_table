import { useState } from "react";
import { useAsyncDebounce } from "react-table";
import PropTypes from "prop-types"; // Import PropTypes

const GlobalFilter = ({ filter, setFilter }) => {
  const [value, setValue] = useState(filter);

  const onChange = useAsyncDebounce((value) => {
    setFilter(value || undefined);
  }, 800);

  return (
    <span>
      Search: {""}
      <input
        value={value || ""}
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
      />
    </span>
  );
};

GlobalFilter.propTypes = {
  filter: PropTypes.string,
  setFilter: PropTypes.func.isRequired,
};

export default GlobalFilter;
