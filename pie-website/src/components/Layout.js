import React, { useState } from "react"
import Footer from "./Footer"

import "bootstrap/dist/css/bootstrap.min.css"

import Sidebar from "./Sidebar"
import { AppProvider } from "../assets/data/context"
import GlobalStyles from "../assets/themes/globalStyles"
import AnimatedNavbar from "./AnimatedNavbar"

import Banner from "../components/AnnouncementBanner/BannerContainer"
import theme from "../assets/themes/theme"

/*
Creates a wrapper for all pages which includes a navbar at the top and a footer at the bottom
*/
const Layout = ({ children, nav }) => {
  const [duration] = useState(300)

  return (
    <React.Fragment>
      <AppProvider>
        <GlobalStyles />
        <Banner/>
        <AnimatedNavbar duration={duration} nav={nav} />
        <Sidebar />
        <main>{children}</main>
        <Footer />
      </AppProvider>
    </React.Fragment>
  )
}

export default Layout
