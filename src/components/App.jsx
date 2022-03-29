import React from "react";
import Login from "./Login";
import Input from "./Input";

function App() {
  return (
    <div className="container">
      <h1>Hello</h1>
      <form className="form">
        <Input />
        <Login />
      </form>
    </div>
  );
}

export default App;
