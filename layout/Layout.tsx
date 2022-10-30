import React from "react";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

interface ILayout {
  children: React.ReactNode;
}

const Layout = ({ children }: ILayout) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
