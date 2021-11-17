import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Profile from "./component/Profile";
import image from "./component/hanouna.jpg";
const App = () => {
  const alertt = (x) => {
    alert(x);
  };
  return (
    <div>
      <Profile image={image} name="hanen" lastname="frioui" alertt={alertt} />
    </div>
  );
};

export default App;
