import { useState, useEffect } from "react";
import "./App.css";
import Product from "./components/Product";
import Navbar from "./components/Navbar";
import { items } from "./components/Data";
import FormHandling from "./FormHandling";

function App() {
  const [product, setProduct] = useState(items);

  useEffect(() => {
    document.title = product[0].category;
  }, [product]);

  return (
    <>
      <Navbar product={product} setProduct={setProduct} />
      {/* <Product pro={product} /> */}
      <FormHandling />
    </>
  );
}

export default App;
