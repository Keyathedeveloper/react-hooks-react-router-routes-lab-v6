import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, RouterProvider, routes } from "./routes";

ReactDOM.render(
  <BrowserRouter>
    <RouterProvider routes={routes} />
  </BrowserRouter>,
  document.getElementById("root")
);
