import React from "react"

import styled from "styled-components"

import theme from "../assets/themes/theme"

/*
Creates a pie header component
input:
  - children (text of the header)
  - type
    - blue
    - gold
*/
const Header = props => {
  const { children, type } = props
  return <CustomHeader type={type}>{children}</CustomHeader>
}

const CustomHeader = styled.h2`
  color: ${props =>
    props.type === "blue" ? theme.colors.blue500 : theme.colors.gold500};

  /* &::after {
    display: block;
    position: relative;
    left: 0;
    width: 100%;
    content: ".";
    color: transparent;
    background: ${props =>
    props.type === "blue" ? theme.colors.gold500 : theme.colors.blue500};
    height: 3px;
    margin-bottom: 2rem;
  } */
`

export default Header
