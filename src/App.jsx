import { RouterProvider } from "react-router-dom";
import router from "./router/AppRouter";
import AuthProvider from "./provider/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
