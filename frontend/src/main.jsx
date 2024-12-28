import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import AdminState from "./context/AdminState";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AdminState>
      <App />
    </AdminState>
  </StrictMode>
);
