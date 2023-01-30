import React from "react";

import styled from "styled-components";

import theme from "../styles/theme";

/*
Creates a pie header component
input:
  - children (text of the header)
  - type
    - blue
    - gold
*/
const Header = (props) => {
  const { children, type } = props;
  return <CustomHeader type={type}>{children}</CustomHeader>;
};

const CustomHeader = styled.h2`
  color: ${(props) =>
    props.type === "blue" ? theme.colors.blue500 : theme.colors.gold500};
`;

export default Header;
