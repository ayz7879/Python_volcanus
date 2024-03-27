import React from "react";
import "./Product.css";

const Product = ({ product }) => {
  return (
    <>
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center my-3 mx-3 ">
          {product.map((e) => (
            <div className="col-md-4 col-lg-4">
              <div className="card" style={{ width: "18rem" }}>
                <img src={e.imgSrc} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{e.title}</h5>
                  <p className="card-text">{e.description}</p>
                </div>
                <div className="card-body d-flex justify-content-center gap-4">
                  <button className="btn btn-primary ">{e.price}/-</button>
                  <button className="btn btn-warning ">Add to Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Product;
