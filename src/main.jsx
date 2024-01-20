import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import router from "./routes/router";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <div className="section-main">
      <div className="circle"></div>
      <div className="circle"></div>
    </div> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
