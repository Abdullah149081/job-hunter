import React from "react";
import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Toaster></Toaster>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
