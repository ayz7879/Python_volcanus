import React, { useEffect, useState } from "react";

const FormHandling = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <div className="container d-flex justify-content-center align-items-center flex-column ">
        <h1>Form Handling</h1>
        Name :- <input type="text" />
        <br />
        Gmail :- <input type="email" />
        <br />
        Password :- <input type="text" />
        <br />
        <button className="btn btn-danger">Submit</button>
      </div>
    </>
  );
};

export default FormHandling;
