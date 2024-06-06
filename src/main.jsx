import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./global.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
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
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <MainPage /> },
      { path: "/cart", element: <Cart /> },
      {
        path: "/product/:productId",
        element: <ProductDetails />,
      },
      {
        path: "/category/:categoryId",
        element: <CategoryProducts />,
      },
      { path: "/sustainability", element: <Sustainability /> },
      { path: "/contact", element: <Contact /> },
      { path: "/faq", element: <FAQView /> },
      { path: "/checkout", element: <Checkout /> },
      { path: "/confirmation", element: <Confirmation /> },
      { path: "/ecommerce-react", element: <MainPage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
