import { Route, Routes } from "react-router-dom";
import Layouts from "../Layouts/Layouts";
import Home from "../pages/Home";
import Products from "../pages/Products";
import PageNotFound from "../pages/PageNotFound";
import Register from "../pages/Register";
import Login from "../pages/Login";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Layouts />}>
        <Route index element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
};

export default Routers;
