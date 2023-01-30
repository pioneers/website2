import React from "react";

import { AnchorLink } from "gatsby-plugin-anchor-links";

import styled from "styled-components";
import theme from "../styles/theme";

const CLink = styled(AnchorLink)`
  color: inherit;
  text-decoration: none;
  transition: 250ms;
  opacity: 1;

  :link {
    text-decoration: none;
  }

  :visited {
    text-decoration: none;
  }

  :hover {
    text-decoration: none;
    opacity: 0.7;
  }

  :active {
    text-decoration: none;
  }
`;

export default CLink;
