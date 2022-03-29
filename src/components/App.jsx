import React from "react";
import Form from "./Form";

let userIsRegistered = true;

const App = () => (
  <div className="container">
    <Form isRegistered={userIsRegistered} />
  </div>
);

export default App;
