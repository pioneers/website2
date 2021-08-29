import React, { Component } from "react"
import styled from "styled-components"

import theme from "../../assets/themes/theme"

const NavbarEl = styled.nav`
  margin: auto;
  padding: 0.5rem 0rem;
  background-color: transparent;
  backdrop-filter: blur(5px);
`

const NavbarList = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  list-style: none;
  margin: auto;
  max-width: 1070px;

  @media screen and (max-width: 900px) {
    justify-content: space-between;
    margin: 0 1.5rem;
  }
`

class Navbar extends Component {
  render() {
    const { children, onMouseLeave } = this.props
    return (
      <NavbarEl onMouseLeave={onMouseLeave}>
        <NavbarList>{children}</NavbarList>
      </NavbarEl>
    )
  }
}

export default Navbar
