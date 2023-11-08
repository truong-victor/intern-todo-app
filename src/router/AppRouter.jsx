import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Routes,
} from "react-router-dom";

import Home from "../pages/home";
import Register from "../pages/register";
import Login from "../pages/login";
import Manager from "../pages/manager";
import Example from "../pages/example";

const AppRouter = (props) => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/manager" element={<Manager />} />
      <Route path="/example" element={<Example />} />
    </Routes>
  );
};
export default AppRouter;
