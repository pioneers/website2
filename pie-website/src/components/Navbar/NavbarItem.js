import React, { Component } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import theme from "../../assets/themes/theme"

import { AnchorLink as Link } from "gatsby-plugin-anchor-links"

const NavbarItemTitle = styled.button`
  background: transparent;
  border: 0;
  font-weight: 500;
  font-family: inherit;
  font-size: 18px;
  /* padding: 2rem 1.5rem 1.2rem 1.5rem; */
  height: 100%;
  /* color: black; */
  display: flex;
  justify-content: center;
  transition: opacity 250ms;
  cursor: pointer;
  /* position above the dropdown, otherwise the dropdown will cover up the bottom sliver of the buttons */
  position: relative;
  z-index: 2;
  /* &:hover,
  &:focus {
    opacity: 0.7;
    outline: none;
  } */

  a {
    color: ${props =>
      props.nav === "black" ? theme.colors.grey900 : theme.colors.white};
  }
  a:hover,
  a:focus {
    opacity: 0.7;
    outline: none;
  }

  @media screen and (max-width: 900px) {
    display: none;
  }
`

const NavbarItemEl = styled.li`
  position: relative;

  @media screen and (max-width: 900px) {
    display: none;
  }
`

const DropdownSlot = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  perspective: 1500px;
`

export default class NavbarItem extends Component {
  static propTypes = {
    onMouseEnter: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    link: PropTypes.string,
    children: PropTypes.node,
    nav: PropTypes.string,
  }
  onMouseEnter = () => {
    this.props.onMouseEnter(this.props.index)
  }

  render() {
    const { title, children, link, nav } = this.props
    return (
      <NavbarItemEl
        onMouseEnter={this.onMouseEnter}
        onFocus={this.onMouseEnter}
        style={{ zIndex: "3" }}
      >
        <NavbarItemTitle nav={nav}>
          <Link to={link}>{title}</Link>
        </NavbarItemTitle>
        <DropdownSlot>{children}</DropdownSlot>
      </NavbarItemEl>
    )
  }
}
