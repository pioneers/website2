import React from "react";

import theme from "../styles/theme";

import styled from "styled-components";

import CLink from "./CLink";

/*
Creates a customized button component
input:
  - children (text on button)
  - color
    - blue (defualt)
    - gold
  - link (the link associated with the button)
*/
const Btn = ({ children, link, color = "blue" }) => {
  return (
    <CLink to={link}>
      <CustomButton color={color}>{children}</CustomButton>
    </CLink>
  );
};

const CustomButton = styled.button.attrs((props) => ({
  type: "button",
}))`
  cursor: pointer;
  background: ${(props) =>
    props.color === "blue" ? theme.colors.blue500 : theme.colors.gold500};
  border: transparent;
  border-radius: 100px;
  letter-spacing: ${theme.letterSpacing};
  padding: 0.375rem 1rem;
  box-shadow: ${theme.shadows.shadow1};
  transition: ${theme.transition};
  text-transform: capitalize;
  display: inline-block;
  margin: 0.25rem 0.25rem;
  &:hover {
    background: ${(props) =>
      props.color === "blue" ? theme.colors.blue700 : theme.colors.gold700};
    box-shadow: ${theme.shadows.shadow3};
  }
  color: white;
`;

export default Btn;
