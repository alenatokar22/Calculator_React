import React from "react";
import ReactDOM from "react-dom";
import Footer from "./components/Footer";

import App from "./App";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Footer />
  </React.StrictMode>,
  document.getElementById("root")
);
