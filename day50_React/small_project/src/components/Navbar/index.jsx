import React from "react";
import "./style.css";
import { items } from "../Data";

const Navbar = ({ setProduct }) => {
  const filterByCategory = (value) => {
    const filteredData = items.filter((element) => element.category === value);
    // console.log(filteredData);
    setProduct(filteredData);
  };
  const filterByPrice = (value) => {
    const filteredData = items.filter((element) => element.price >= value);
    // console.log(filteredData);
    setProduct(filteredData);
  };

  return (
    <>
      <div className="nav p-3 my-3 justify-content-center ">
        <div
          onClick={() => setProduct(items)}
          className="btn btn-success ms-3 "
        >
          No Filter
        </div>
        <div
          onClick={() => filterByCategory("mobiles")}
          className="btn btn-primary ms-3 "
        >
          Mobiles
        </div>
        <div
          onClick={() => filterByCategory("laptops")}
          className="btn btn-warning ms-3 "
        >
          Laptop
        </div>
        <div
          onClick={() => filterByCategory("tablets")}
          className="btn btn-danger ms-3 "
        >
          Tablets
        </div>
        <div
          onClick={() => filterByPrice(30000)}
          className="btn btn-secondary ms-3 "
        >
          {">"}30000
        </div>
        <div
          onClick={() => filterByPrice(60000)}
          className="btn btn-info ms-3 "
        >
          {">"}60000
        </div>
        <div
          onClick={() => filterByPrice(80000)}
          className="btn btn-light ms-3 "
        >
          {">"}80000
        </div>
      </div>
    </>
  );
};

export default Navbar;
