import { ToastContainer } from "react-toastify";
import AuthProvider from "./@core/provider/AuthProvider";
import CartProvider from "./@core/provider/CartProvider";
import AppRouter from "./router/AppRouter";
import "react-toastify/dist/ReactToastify.css";
import { useYupChangeLocale } from "./@core/helper/Yup";

// import { ParallaxProvider } from "react-scroll-parallax";
import CartProdiverV2 from "./@core/provider/CartProdiverV2";
function App() {
  //YUP custom  Cái này để custom YUP dùng cho toàn APP
  useYupChangeLocale();
  //YUP custom end

  return (
    <AuthProvider>
      <CartProdiverV2>
        <CartProvider>
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
        </CartProvider>
      </CartProdiverV2>
    </AuthProvider>
  );
}

export default App;
