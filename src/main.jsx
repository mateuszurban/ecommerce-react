import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./global.css";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { ErrorPage } from "./views/ErrorPage.jsx";
import { ProductDetails } from "./views/ProductDetails.jsx";
import { CategoryProducts } from "./views/CategoryProducts.jsx";
import { MainPage } from "./views/MainPage.jsx";
import { Cart } from "./views/Cart.jsx";
import { Contact } from "./views/Contact.jsx";
import { Sustainability } from "./views/Sustainability.jsx";
import { FAQView } from "./views/FAQView.jsx";
import { Checkout } from "./views/Checkout.jsx";
import { Confirmation } from "./views/Confirmation.jsx";

const router = createBrowserRouter([
  {
    path: "/ecommerce-react",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/ecommerce-react", element: <MainPage /> },
      { path: "/ecommerce-react/cart", element: <Cart /> },
      {
        path: "/ecommerce-react/product/:productId",
        element: <ProductDetails />,
      },
      {
        path: "/ecommerce-react/category/:categoryId",
        element: <CategoryProducts />,
      },
      { path: "/ecommerce-react/sustainability", element: <Sustainability /> },
      { path: "/ecommerce-react/contact", element: <Contact /> },
      { path: "/ecommerce-react/faq", element: <FAQView /> },
      { path: "/ecommerce-react/checkout", element: <Checkout /> },
      { path: "/ecommerce-react/confirmation", element: <Confirmation /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
