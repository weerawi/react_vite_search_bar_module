import axios from "axios";
import SearchBar from "./components/Search/SearchBar";
import Result from "./components/Result/Result";
import { useState } from "react";
import Product from "./components/Product/Product";

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
      {/* <Product
        title={result.title}
        price={result.price}
        description={result.description}
        rating={result.rating}
        category={result.category}
      /> */}
    </>
  );
}

export default App;
