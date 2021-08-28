import React, { Component } from "react"
import Navbar from "./Navbar"
import NavbarItem from "./Navbar/NavbarItem"
import { Flipper } from "react-flip-toolkit"
import DropdownContainer from "./DropdownContainer"
import AboutDropdown from "./DropdownContents/AboutDropdown"
import CompetitionDropdown from "./DropdownContents/CompetitionDropdown"
import GetInvolvedDropdown from "./DropdownContents/GetInvolvedDropdown"
import SupportUsDropdown from "./DropdownContents/SupportUsDropdown"
import LibraryDropdown from "./DropdownContents/LibraryDropdown"
import ContactUs from "./ContactUs"
import { AnchorLink as Link } from "gatsby-plugin-anchor-links"

import { GiHamburgerMenu } from "@react-icons/all-files/gi/GiHamburgerMenu"
import { useGlobalContext } from "../assets/data/context"

import logo from "../assets/images/logo-border-20px-v3.png"

import theme from "../assets/themes/theme"

import styled from "styled-components"

const navbarConfig = [
  { title: "About", dropdown: AboutDropdown, link: "/About" },
  { title: "Competition", dropdown: CompetitionDropdown, link: "/Competition" },
  {
    title: "Get Involved",
    dropdown: GetInvolvedDropdown,
    link: "/GetInvolved",
  },
  { title: "Support Us", dropdown: SupportUsDropdown, link: "/SupportUs" },
  { title: "Library", dropdown: LibraryDropdown, link: "/Gallery" },
]

class Helper extends Component {
  state = {
    activeIndices: [],
  }

  resetDropdownState = i => {
    this.setState({
      activeIndices: typeof i === "number" ? [i] : [],
      animatingOut: false,
    })
    delete this.animatingOutTimeout
  }

  onMouseEnter = i => {
    if (this.animatingOutTimeout) {
      clearTimeout(this.animatingOutTimeout)
      this.resetDropdownState(i)
      return
    }
    if (this.state.activeIndices[this.state.activeIndices.length - 1] === i)
      return

    this.setState(prevState => ({
      activeIndices: prevState.activeIndices.concat(i),
      animatingOut: false,
    }))
  }

  onMouseLeave = () => {
    this.setState({
      animatingOut: true,
    })
    this.animatingOutTimeout = setTimeout(
      this.resetDropdownState,
      this.props.duration
    )
  }

  render() {
    const { duration } = this.props

    const myHookValue = this.props.myHookValue

    let CurrentDropdown
    let PrevDropdown
    let direction

    const currentIndex =
      this.state.activeIndices[this.state.activeIndices.length - 1]
    const prevIndex =
      this.state.activeIndices.length > 1 &&
      this.state.activeIndices[this.state.activeIndices.length - 2]

    if (typeof currentIndex === "number")
      CurrentDropdown = navbarConfig[currentIndex].dropdown
    if (typeof prevIndex === "number") {
      PrevDropdown = navbarConfig[prevIndex].dropdown
      direction = currentIndex > prevIndex ? "right" : "left"
    }

    return (
      <Flipper
        flipKey={currentIndex}
        spring={duration === 300 ? "noWobble" : { stiffness: 10, damping: 10 }}
      >
        <Navbar onMouseLeave={this.onMouseLeave}>
          <Link to="/">
            <img
              src={logo}
              className="nav-logo"
              style={{ width: "4rem" }}
              alt=""
            />
          </Link>
          <ResponsiveTitle>
            <div className="long">
              <Link to="/">Pioneers in Engineering</Link>
            </div>
            <div className="short">
              <Link to="/">PiE</Link>
            </div>
          </ResponsiveTitle>
          {navbarConfig.map((n, index) => {
            return (
              <NavbarItem
                key={n.title}
                title={n.title}
                index={index}
                onMouseEnter={this.onMouseEnter}
                link={n.link}
              >
                {currentIndex === index && (
                  <DropdownContainer
                    direction={direction}
                    animatingOut={this.state.animatingOut}
                    duration={duration}
                  >
                    <CurrentDropdown />
                    {PrevDropdown && <PrevDropdown />}
                  </DropdownContainer>
                )}
              </NavbarItem>
            )
          })}
          <ContactUs />
          <ButtonSide onClick={myHookValue}>
            <GiHamburgerMenu />
          </ButtonSide>
        </Navbar>
      </Flipper>
    )
  }
}

function AnimatedNavbar(Helper) {
  return function WrappedComponent(props) {
    const { openSidebar } = useGlobalContext()
    return <Helper {...props} myHookValue={openSidebar} />
  }
}

export default AnimatedNavbar(Helper)

const ButtonSide = styled.button`
  display: none;

  font-size: 1rem;
  font-weight: 600;
  padding: 0.25rem 0.75rem;
  /* margin: 2rem 0 1.2rem 1.5rem; */
  margin: 0;
  border-radius: ${theme.borderRadius};
  height: 100%;
  border-color: transparent;
  color: white;
  background: ${theme.colors.blue600};
  transition: ${theme.transition};

  &:hover {
    background: ${props =>
      props.color === "blue" ? theme.colors.blue700 : theme.colors.gold700};
    box-shadow: ${theme.shadows.shadow3};
  }

  a {
    color: ${theme.colors.white};
  }

  @media screen and (max-width: 900px) {
    display: block;
  }
`

const ResponsiveTitle = styled.button`
  background: transparent;
  border: 0;
  font-weight: 500;
  font-family: inherit;
  font-size: 18px;
  /* padding: 2rem 1.5rem 1.2rem 1.5rem; */
  padding: 0;
  margin: 0;
  height: 100%;
  color: black;
  display: flex;
  justify-content: center;
  cursor: pointer;
  /* position above the dropdown, otherwise the dropdown will cover up the bottom sliver of the buttons */
  position: relative;
  z-index: 2;
  a {
    color: white;
  }
  a:hover,
  a:focus {
    opacity: 0.7;
    outline: none;
  }

  .short {
    display: none;
    color: white;
  }
  .long {
    display: block;
    color: white;
  }

  @media screen and (max-width: 1166px) {
    .short {
      display: block;
    }
    .long {
      display: none;
    }
  }
  @media screen and (max-width: 900px) {
    .short {
      display: none;
    }
    .long {
      display: block;
    }
    /* padding: 2rem 0 1.2rem 0; */
  }

  @media screen and (max-width: 412px) {
    .short {
      display: block;
    }
    .long {
      display: none;
    }
    /* padding: 2rem 0 1.2rem 0; */
  }
`
