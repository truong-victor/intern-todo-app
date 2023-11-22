import { ToastContainer } from "react-toastify";
import AuthProvider from "./@core/provider/AuthProvider";
import AppRouter from "./router/AppRouter";
import "react-toastify/dist/ReactToastify.css";
import { useYupChangeLocale } from "./@core/helper/Yup";

function App() {
  //YUP custom  Cái này để custom YUP dùng cho toàn APP
  useYupChangeLocale();
  //YUP custom end

  return (
    <AuthProvider>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <AppRouter />
    </AuthProvider>
  );
}

export default App;
