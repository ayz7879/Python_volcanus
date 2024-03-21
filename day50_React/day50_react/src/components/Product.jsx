import React, { useState } from "react";
import { items } from "./Data";
import "./Product.css";

const Product = () => {
  const [product, setProduct] = useState(items);
  return (
    <>
      <div className="main">
        {product.map((item) => (
          // <div key={item.id}>
          //   <h1>{item.title}</h1>
          //   <img src={item.imgSrc} alt="" style={{ width: "500px" }} />
          // </div>
          <div key={item.id} className="container">
            <img className="shop_img" src={item.imgSrc} alt="" />
            <h2>{item.title}</h2>
            <div className="btn">
              <button className="curr">8955</button>
              <button className="cart">add to cart</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Product;
