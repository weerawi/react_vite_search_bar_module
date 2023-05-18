import Product from "../Product/Product";

// Names of the props we expect to receive
const keys = ["title", "description", "price", "rating", "category"];

const Result = (props) => {
  return (
    <div>
      {keys.map((key) => (
        <div>
          <span>
            {key.charAt(0) + key.slice(1)}:{props[key]}
          </span>
          {/* <Product
            key={i}
            title={props.title}
            price={props.price}
            description={description}
            rating={props.rating}
            category={props.category}
          /> */}
        </div>
      ))}
    </div>
  );
};

export default Result;
