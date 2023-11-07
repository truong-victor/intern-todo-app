import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import Home from "../pages/home";
import Register from "../pages/register";
import Login from "../pages/login";
import Manager from "../pages/manager";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Home />}>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/manager" element={<Manager />} />
    </Route>
  )
);
export default router;
