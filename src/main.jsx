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
import PriceCreateUpdatePage from "./pages/PriceCreateUpdatePage.jsx";
import PricePage from "./pages/PricePage.jsx";
import TransactionCreateUpdatePage from "./pages/TransactionCreateUpdatePage.jsx";
import VerifyPage from "./pages/VerifyPage.jsx";
import ResendVerificationPage from "./pages/ResendVerificationPage.jsx";

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
    path: "/transaction-add",
    element: <TransactionCreateUpdatePage />,
  },
  {
    path: `/transaction-update/:id`,
    element: <TransactionCreateUpdatePage />,
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
  {
    path: "/price",
    element: <PricePage />,
  },
  {
    path: "/price-add",
    element: <PriceCreateUpdatePage />,
  },
  {
    path: "/price-add/:id",
    element: <PriceCreateUpdatePage />,
  },
  {
    path: "/verify-email/:id",
    element: <VerifyPage />,
  },
  {
    path: "/resend-verification-code",
    element: <ResendVerificationPage/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
