import React from "react"

import { AnchorLink as Link } from "gatsby-plugin-anchor-links"

import theme from "../assets/themes/theme"

import styled from "styled-components"

/*
Creates a customized button component
input:
  - children (text on button)
  - color
    - blue (defualt)
    - gold
  - link (the link associated with the button)
*/
const AlternativeButton = ({ children, link, color = "blue" }) => {
  return (
    <CustomButton color={color}>
      {link.includes("http") ? (
        <a href={link} target="_blank" rel="noreferrer">
          {children}
        </a>
      ) : (
        <Link to={link}>{children}</Link>
      )}
    </CustomButton>
  )
}

const CustomButton = styled.button.attrs(props => ({
  type: "button",
}))`
  cursor: pointer;
  background: ${props =>
    props.color === "blue" ? theme.colors.blue500 : theme.colors.gold500};
  border: transparent;
  border-radius: ${theme.borderRadius};
  letter-spacing: ${theme.letterSpacing};
  padding: 0.375rem 0.75rem;
  box-shadow: ${theme.shadows.shadow1};
  transition: ${theme.transition};
  text-transform: capitalize;
  display: inline-block;
  margin: 0.25rem 0.25rem;

  &:hover {
    background: ${props =>
      props.color === "blue" ? theme.colors.blue700 : theme.colors.gold700};
    box-shadow: ${theme.shadows.shadow3};
  }

  a {
    color: ${theme.colors.white};
  }
`

export default AlternativeButton
