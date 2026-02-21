import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <main className="w-4/5 mx-auto">
        <Outlet></Outlet>
      </main>
    </>
  );
};

export default Root;
