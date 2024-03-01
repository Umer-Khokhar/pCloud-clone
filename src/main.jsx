import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Mac from "./pages/Mac.jsx";
import Windows from "./pages/Windows.jsx";
import Encryption from "./pages/Encryption.jsx";
import "./index.css";
import mainPcIMG from "/download/main-pc.png"
import mainMacIMG from "/download/main-mac.png"
import Logo from "/logo/logo.png"
import EncPricing from "./components/EncPricing.jsx";
import Navbar from "./components/Navbar.jsx";
import Pricing from "./pages/Pricing.jsx";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/home",
    element: <App />,
  },
  {
    path: "/download/windows",
    element: <Windows  mainIMG={mainPcIMG}/>,
  },
  {
    path: "/download/mac",
    element: <Mac mainIMG={mainMacIMG}/>,
  },
  {
    path: "/pricing",
    element: <Pricing />,
  },
  {
    path: "/encryption",
    element: <Encryption />,
  },
  {
    path: "*",
    element: <Navigate to="/home" />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
