import React from "react";
import "./Navbar.css";
import { items } from "../../Data";

const Navbar = ({ setProduct }) => {
  const filterByCatagery = (value) => {
    const filterData = items.filter((e) => e.category === value);
    setProduct(filterData);
  };
  const filterByPrice = (value) => {
    const filterData = items.filter((e) => e.price >= value);
    setProduct(filterData);
  };

  return (
    <>
      <div className="nav bg-dark justify-content-around">
        <button
          onClick={() => filterByCatagery("mobiles")}
          className="btn btn-primary my-3 "
        >
          Mobiles
        </button>
        <button
          onClick={() => filterByCatagery("laptops")}
          className="btn btn-secondary my-3"
        >
          Laptops
        </button>
        <button
          onClick={() => filterByCatagery("tablets")}
          className="btn btn-danger my-3"
        >
          Tablets
        </button>
        <button
          onClick={() => filterByPrice(60000)}
          className="btn btn-success my-3"
        >
          under 60k
        </button>
        <button
          onClick={() => filterByPrice(30000)}
          className="btn btn-info my-3"
        >
          under 30k
        </button>
      </div>
    </>
  );
};

export default Navbar;
