import React, { useState } from "react"
import Footer from "./Footer"

import "bootstrap/dist/css/bootstrap.min.css"

import Sidebar from "./Sidebar"
import { AppProvider } from "../assets/data/context"
import GlobalStyles from "../assets/themes/globalStyles"
import AnimatedNavbar from "./AnimatedNavbar"

/*
Creates a wrapper for all pages which includes a navbar at the top and a footer at the bottom
*/
const Layout = ({ children }) => {
  const [duration, setDuration] = useState(300)

  return (
    <React.Fragment>
      <AppProvider>
        <GlobalStyles />
        <AnimatedNavbar duration={duration} />
        <Sidebar />
        <main>{children}</main>
        <Footer />
      </AppProvider>
    </React.Fragment>
  )
}

export default Layout
