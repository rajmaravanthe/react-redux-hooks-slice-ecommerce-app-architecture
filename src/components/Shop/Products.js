import { Fragment } from "react";
import ProductItem from "./ProductItem";
import classes from "./Products.module.css";
import { capitalizeWord } from "../../utility/utility";
import { DUMMY_PRODUCTS } from "../../utility/dummy";

const Products = (props) => {
  return (
    <section className={classes.products}>
      {DUMMY_PRODUCTS.map((dummyProduct, dummyProductId) => (
        <Fragment key={dummyProductId + Math.random()}>
          <h2 key={dummyProductId + Math.random()}>
            Buy your favorite {capitalizeWord(Object.keys(dummyProduct)[0])}
          </h2>
          <div
            key={dummyProductId + Math.random()}
            className={classes.productLists}
          >
            {dummyProduct[Object.keys(dummyProduct)[0]].map((product) => (
              <ProductItem
                key={product.id}
                id={product.id}
                title={product.title}
                price={product.price}
                actualPrice={product.actualPrice}
                description={product.description}
              />
            ))}
          </div>
        </Fragment>
      ))}
    </section>
  );
};

export default Products;
