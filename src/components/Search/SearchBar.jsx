import { useState } from "react";
import "./SearchBar.css";
import { useDebounce } from "../../Hooks/UseDebounce";

const SearchBar = ({ fetchData, setResult, suggestionKey }) => {
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [hideSuggestions, setHideSuggestions] = useState(true);

  const findResult = (value) => {
    setResult(
      suggestions.find((suggestion) => suggestion[suggestionKey] === value)
    );
  };

  useDebounce(
    async () => {
      try {
        const suggestions = await fetchData(value);

        setSuggestions(suggestions || []);
      } catch (error) {
        console.log(error);
      }
    },
    1000,
    [value]
  );

  const handleFocus = () => {
    setHideSuggestions(false);
  };

  const handleBlur = () => {
    setTimeout(() => {
      setHideSuggestions(true);
    }, 200);
  };

  const handleSearchInputChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="container">
      <input
        onFocus={handleFocus}
        onBlur={handleBlur}
        type="search"
        className="textbox"
        value={value}
        placeholder="Search..."
        onChange={handleSearchInputChange}
      ></input>

      <div
        className={`suggestions  ${hideSuggestions && ["heightsearch hidden"]}`}
      >
        {suggestions.map((suggestion) => (
          <div
            className="suggestion"
            onClick={() => findResult(suggestion[suggestionKey])}
          >
            {suggestion[suggestionKey]}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
