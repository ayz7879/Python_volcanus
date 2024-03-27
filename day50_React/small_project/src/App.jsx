import { useState } from "react";
import "./App.css";
import Product from "./components/Product";
import Navbar from "./components/Navbar";
import { items } from "./components/Data";

function App() {
  const [product, setProduct] = useState(items);
  return (
    <>
      <Navbar product={product} setProduct={setProduct}/>
      <Product pro={product} />
    </>
  );
}

export default App;
