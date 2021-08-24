import React from "react"
import logo from "../assets/images/logo-border-20px-v3.png"
import { GiHamburgerMenu } from "@react-icons/all-files/gi/GiHamburgerMenu"
import { useGlobalContext } from "../assets/data/context"
import sublinks from "../assets/data/data"
import { AnchorLink as Link } from "gatsby-plugin-anchor-links"

import ContactUs from "./ContactUs"
import theme from "../assets/themes/theme"
import styled from "styled-components"

// stripe inspired navbar
const StripeNavbar = () => {
  const {
    openSidebar,
    openSubmenu,
    closeSubmenu,
    isSubmenuOpen,
    setIsSubmenuOpen,
  } = useGlobalContext()
  const displaySubmenu = e => {
    const page = e.target.textContent
    const tempBtn = e.target.getBoundingClientRect()
    const center = (tempBtn.left + tempBtn.right) / 2
    const bottom = tempBtn.bottom - 3
    openSubmenu(page, { center, bottom })
  }

  const toggleSubmenu = () => {
    setIsSubmenuOpen(!isSubmenuOpen)
  }
  const handleSubmenu = e => {
    if (!e.target.classList.contains("link-btn")) {
      closeSubmenu()
    }
  }
  return (
    <CustomNav>
      <nav className="nav" onMouSEOver={handleSubmenu}>
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
              <img src={logo} className="nav-logo" alt="" />
            </Link>
            <Link to="/" className="link-btn">
              Pioneers in Engineering
            </Link>
            <button className="btn toggle-btn" onClick={openSidebar}>
              <GiHamburgerMenu />
            </button>
          </div>
          <ul className="nav-links">
            {sublinks.map(section => {
              return (
                <li>
                  <button
                    className="link-btn"
                    onMouSEOver={displaySubmenu}
                    onClick={toggleSubmenu}
                  >
                    {section.page}
                  </button>
                </li>
              )
            })}
          </ul>
          <ContactUs />
        </div>
      </nav>
    </CustomNav>
  )
}

const CustomNav = styled.nav`
  .nav {
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    position: relative;
    z-index: 1;
  }
  .nav-center {
    width: 90vw;
    max-width: 1170px;
  }
  .nav-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .btn {
    font-size: 1rem;
    padding: 0.25rem 0.75rem;
    border-radius: ${theme.borderRadius};
    border-color: transparent;
    color: white;
    background: ${theme.colors.black};
    transition: ${theme.transition};
  }
  .link-btn {
    text-align: center;
    /* margin-top: 0.5rem; */
    height: 100%;
    background: transparent;
    border-color: transparent;
    font-size: 1.1rem;
    color: ${theme.colors.grey900};
    text-transform: capitalize;
    letter-spacing: 1px;
    width: 15rem;
    cursor: default;
  }
  .link-btn:hover {
    color: ${theme.colors.grey500};
    cursor: default;
  }

  .smaller {
    padding: 0.25rem 0.5rem;
  }
  .btn:hover {
    background: ${theme.colors.grey500};
  }
  .nav-links {
    display: none;
  }
  .signin-btn {
    display: none;
  }
  .link-btn {
    width: auto;
  }

  @media screen and (min-width: 1075px) {
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }
    .toggle-btn {
      display: none;
    }
    .signin-btn {
      display: inline-block;
    }
    .nav-links {
      margin-top: 1rem;
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      align-items: center;

      text-align: center;
      height: 100%;
    }
    .nav-links li {
      height: 100%;
    }
  }

  .nav-logo {
    width: 4rem;
    height: auto;
  }
`

export default StripeNavbar
