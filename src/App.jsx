import axios from "axios";
import SearchBar from "./Search/SearchBar";
import Result from "./Result/Result";
import { useState } from "react";

function App() {
  const [result, setResult] = useState(null);

  const url = "https://dummyjson.com/products/search?q";

  const fetchData = async (value) => {
    const { data } = await axios.get(`${url}=${value}&limit=10`);

    return data.products;
  };

  return (
    <>
      <SearchBar
        fetchData={fetchData}
        setResult={setResult}
        suggestionKey="title"
      />
      {result && <Result {...result} />}
    </>
  );
}

export default App;
