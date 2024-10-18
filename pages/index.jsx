import React from "react";
import ReactDOM from "react-dom/client";
import App from "../components/App.jsx"; // Ensure you're importing the right file
import "../styles/globals.css";  // Make sure Tailwind or global styles are imported

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
