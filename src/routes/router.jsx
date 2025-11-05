import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import Root from "../layout/Root";
import About from "../pages/About";
import Products from "../pages/Products";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ProductDetails from "../pages/ProductDetails";
import Order from "../pages/Cart";
import PrivetRoute from "../privetRoute/PrivetRoute";
import Cart from "../pages/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/products",
        loader: () => fetch("/mobile.json"),
        element: <Products />,
      },
      {
        path: "/product-details/:id",
        loader: () => fetch("/mobile.json"),
        element: <ProductDetails />,
      },
      {
        path: "/product/cart",
        loader: () => fetch("/mobile.json"),
        element: (
          <PrivetRoute>
            {" "}
            <Cart />
          </PrivetRoute>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default router;
