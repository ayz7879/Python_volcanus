import Counter from "./Counter"
import { useState } from "react"
import Product from "./components/Product";

const App = () => {
//   const [counter,setcounter] = useState(0)

//   const increase = () => {
//     setcounter(counter+1)
//   }
//   const decrease = () => {
//     setcounter(counter-1)
//   }
  
  return (
    <>
      {/* <Counter counter={counter} increase={increase} decrease={decrease} /> */}
    <Product/>
    </>
  );
}

export default App