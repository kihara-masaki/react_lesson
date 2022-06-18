import React from "react";
import ReactDom from "react-dom";
import SayHello from "./components/sayHello";
import App from "./components/App";

const Index = () => {
  return (
    <>
      <App />
      <SayHello greeting="hello" />
    </>
  );
};
export default Index;
ReactDom.render(<Index />, document.getElementById("root"));
