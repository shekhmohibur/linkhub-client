import { RouterProvider } from "react-router";
import Router from "./router/Router";
import { AuthProvider } from "./contexts/AuthContext";
import { DataProvider } from "./contexts/DataContext";

function App() {
  return (
    <AuthProvider>
      <DataProvider>
        <RouterProvider router={Router} />
      </DataProvider>
    </AuthProvider>
  );
}

export default App;
