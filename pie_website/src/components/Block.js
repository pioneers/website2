import React from "react";

import Container from "react-bootstrap/Container";

import styled from "styled-components";

import theme from "../styles/theme";

/*
Creates a container for the content
input:
  - children (content)
  - color (background color)
*/
const Block = ({ children, color = theme.colors.grey50 }) => {
  return (
    <CContainer fluid color={color}>
      <section>{children}</section>
    </CContainer>
  );
};

const CContainer = styled(Container)`
  background-color: ${(props) => props.color};
  & > section {
    padding: 5rem 0;
    margin: 0 auto;
    max-width: 1020px;
    overflow-x: auto;
  }
`;

export default Block;
