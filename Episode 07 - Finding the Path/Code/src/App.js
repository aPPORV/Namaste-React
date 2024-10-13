import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Error from "./components/Error";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout></AppLayout>,
    children: [
      { path: "/", element: <Body></Body> },
      { path: "/about", element: <About></About> },
      { path: "/contact", element: <Contact></Contact> },
      { path: "restaurants/:resId", element: < RestaurantMenu/>}
    ],
    errorElement: <Error></Error>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
