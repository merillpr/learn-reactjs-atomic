import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import TransactionPage from "./pages/TransactionPage.jsx";
import DetailTransactionPage from "./pages/DetailTransactionPage.jsx";
import ProductPage from "./pages/ProductPage.jsx";
import ProductCreateUpdatePage from "./pages/ProductCreateUpdatePage.jsx";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/transaction",
    element: <TransactionPage />,
  },
  {
    path: `/transaction-detail/:id`,
    element: <DetailTransactionPage />,
  },
  {
    path: "/product",
    element: <ProductPage />,
  },
  {
    path: "/product-add",
    element: <ProductCreateUpdatePage />,
  },
  {
    path: "/product-add/:id",
    element: <ProductCreateUpdatePage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
