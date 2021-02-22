import React from "react";
import Login from "./Login.jsx";

var isLoggedIn = false;

// function renderConditionally() {
//   if (isLoggedIn === true) {
//     return <h1>Hello</h1>;
//   } else {
//     return <Login />;
//   }
// }

const currentTime = new Date().getHours();

function App() {
  return (
    // <div className="container">{isLoggedIn ? <h1>Hello</h1> : <Login />}</div>

    currentTime > 12 && <h1>Why are you still working?</h1>
  );
}

export default App;
