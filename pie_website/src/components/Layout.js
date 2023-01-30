import React, { useState } from "react";
import Footer from "./Footer";

import "bootstrap/dist/css/bootstrap.min.css";

import Sidebar from "./NavbarComponents/Sidebar";
import { AppProvider } from "./NavbarComponents/context";
import GlobalStyles from "../styles/globalStyles";
import AnimatedNavbar from "./NavbarComponents/AnimatedNavbar";

/*
Creates a wrapper for all pages which includes a navbar at the top and a footer at the bottom
*/
const Layout = ({ children, nav }) => {
  const [duration, setDuration] = useState(300);

  return (
    <React.Fragment>
      <AppProvider>
        <GlobalStyles />
        <AnimatedNavbar duration={duration} nav={nav} />
        <Sidebar />
        <main>{children}</main>
        <Footer />
      </AppProvider>
    </React.Fragment>
  );
};

export default Layout;
