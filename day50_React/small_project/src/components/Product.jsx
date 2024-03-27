import React from "react";
import { useState } from "react";

const Product = ({pro}) => {
  return (
    <div className="container">
      <div className="row">
        {pro.map((p) => (
          <div key={p.id} className="col-md-4 col-lg-4 my-3">
            <div className="card" style={{ width: "18rem" }}>
              <img src={p.imgSrc} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{p.title}</h5>
                <p className="card-text">{p.description}</p>
                <div
                  className="btn mx-2"
                  style={{ display: "flex", gap: "1.5rem" }}
                >
                  <a href="#" className="btn btn-primary">
                    {p.price}
                  </a>
                  <a href="" className="btn btn-danger">
                    add to cart
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
