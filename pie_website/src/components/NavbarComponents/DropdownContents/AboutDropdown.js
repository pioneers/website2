import React from "react";
import styled, { css } from "styled-components";
import { Icon, DropdownSection, Heading, HeadingLink } from "./Components";
import Link from "../../CLink";
import theme from "../../../styles/theme";

const ProductsDropdownEl = styled.div`
  width: 19rem;
`;

const Logo = styled.div`
  width: 38px;
  height: 38px;
  margin-right: 16px;
  border-radius: 100%;
  opacity: 0.6;
  ${({ color }) =>
    color === "green" &&
    css`
      background-color: ${theme.colors.navbargreen};
    `}
  ${({ color }) =>
    color === "teal" &&
    css`
      background-color: ${theme.colors.navbarteal};
    `}
  ${({ color }) =>
    color === "blue" &&
    css`
      background-color: ${theme.colors.navbarblue};
    `}
  ${({ color }) =>
    color === "darkblue" &&
    css`
      background-color: ${theme.colors.navbardarkblue};
    `}
`;
/* background-color: ${({ color }) => `var(--${color})`}; */

const SubProductsList = styled.ul`
  li {
    display: flex;
    margin-bottom: 1rem;
  }
  h3 {
    margin-right: 1rem;
    width: 3.2rem;
    display: block;
  }
  a {
    color: ${theme.colors.grey700};
  }
`;

const ProductsSection = styled.ul`
  li {
    display: flex;
  }
`;

const AboutDropdown = () => {
  return (
    <ProductsDropdownEl>
      <DropdownSection data-first-dropdown-section>
        <ProductsSection>
          <li>
            <div>
              <Heading color="blue">
                <Link to="/About#leadership">Leadership</Link>
              </Heading>
            </div>
          </li>
          <li>
            <div>
              <Heading color="green" style={{ marginBottom: 0 }}>
                <Link to="/About#projectManagers">Project Managers</Link>
              </Heading>
            </div>
          </li>
          {/* <li>
            <div>
              <Heading color="teal" style={{ marginBottom: 0 }}>
                <Link to="/About#others">All Other Members</Link>
              </Heading>
            </div>
          </li> */}
        </ProductsSection>
      </DropdownSection>
      <DropdownSection>
        <SubProductsList>
          <ul>
            <HeadingLink>
              <Link to="/About#mission">
                <Icon /> Mission Statement
              </Link>
            </HeadingLink>

            <HeadingLink noMarginBottom>
              <Link to="/About#foundation">
                <Icon /> Foundation
              </Link>
            </HeadingLink>
          </ul>
        </SubProductsList>
      </DropdownSection>
    </ProductsDropdownEl>
  );
};

export default AboutDropdown;
