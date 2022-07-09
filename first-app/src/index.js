import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";

const getButtonText = () => {
  return "Click on me";
};

const getTime = () => {
  return (new Date()).toLocaleTimeString()
}

const App = () => {
  const buttonText = { text: "click" };
  const buttonStyle = { backgroundColor: "blue", color: "white" };
  return (
    <div>
      <label className="label" htmlFor="name">
        {getTime()}
      </label>

      <input id="name" type="text" />

      <button style={buttonStyle}>
        {buttonText.text}
      </button>
    </div>
    // <div>Hi there!</div>
  );
};

const root = ReactDOM.createRoot(document.querySelector("#root"));
root. render(
  <StrictMode>
    <App />
  </StrictMode>
)
