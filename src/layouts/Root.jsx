import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <main>
        <Outlet></Outlet>
      </main>
    </>
  );
};

export default Root;
