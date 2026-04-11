import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import Router from "./router/Router";
import { AuthProvider } from "./contexts/AuthContext";
import { DataProvider } from "./contexts/DataContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <DataProvider>
        <RouterProvider router={Router} />
      </DataProvider>
    </AuthProvider>
  </StrictMode>,
);
