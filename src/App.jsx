import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { items } from "./Data";
import Product from "./components/Products/Product";

function App() {
  const [product, setProduct] = useState(items);
  return (
    <>
      <Navbar product={product} setProduct={setProduct} />
      <Product product={product} />
    </>
  );
}

export default App;
