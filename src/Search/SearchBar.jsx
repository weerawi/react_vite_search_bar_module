import { useEffect, useState } from "react";
import "./SearchBar.css";
import axios from "axios";

const SearchBar = () => {
  const url = "https://dummyjson.com/products/search?q";

  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [hideSuggestions, setHideSuggestions] = useState(true);
  const [result, setResult] = useState(null);

  const findResult = (title) => {
    setResult(suggestions.find((suggestion) => suggestion.title === title));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`${url}=${value}`);
        setSuggestions(data.products);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [value]);

  return (
    <div className="container">
      <input
        type="text"
        className="textbox"
        value={value}
        placeholder="Search..."
        onChange={(e) => {
          setValue(e.target.value);
        }}
        onFocus={() => setHideSuggestions(false)}
        onBlur={async () => {
          setTimeout(() => {
            setHideSuggestions(true);
          }, 200);
        }}
      ></input>

      <div
        className={`suggestions  ${hideSuggestions && ["heightsearch hidden"]}`}
      >
        {suggestions.map((suggestion) => (
          <div
            className="suggestion"
            onClick={() => findResult(suggestion.title)}
          >
            {suggestion["title"]}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
