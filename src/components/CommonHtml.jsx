import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const CommonHtml = () => {
  return (
    <>
      <Header />
      <section className="content">
        <h1 className="head_text">Student <span className="sub_text"> Help Desk</span></h1>
        <p className="desc">Get answers of your question within fingure tips</p>
        <Outlet />
      </section>
      <Footer />
    </>
  );
};

export default CommonHtml;
