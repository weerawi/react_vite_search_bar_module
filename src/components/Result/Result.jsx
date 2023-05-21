import Product from "../Product/Product";

// Names of the props we expect to receive
const keys = ["title", "description", "price", "rating", "category"];

const Result = (props) => {
  return (
    <div>
      {keys.map((key) => (
        <div>{`${key.charAt(0) + key.slice(1)}={${props[key]}}`}</div>
      ))}

      {/* {keys?.map(({ title, description, price, rating, category }, index) => {
        return (
          <Product
            key={index}
            title={title}
            price={price}
            description={description}
            rating={rating}
            category={category}
          />
        );
      })} */}
    </div>
  );
};

export default Result;
