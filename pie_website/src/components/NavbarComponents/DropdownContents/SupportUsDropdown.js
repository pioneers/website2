import React from "react";
import styled, { css } from "styled-components";
import Link from "../../CLink";
import theme from "../../../styles/theme";
import { Heading, DropdownSection, Icon } from "./Components";

const CompanyDropdownEl = styled.div`
  width: 15rem;
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

const Donate = styled.div`
 border-top: 2px solid ${theme.colors.grey900};
  display:flex;
  justify-content: center;
  align-items: center;
  margin-top: ${theme.spacer};
  padding-top: ${theme.spacer};
  margin-top: 0;
}
h3 {
  margin-bottom: 0;
}
`;

const ProductsSection = styled.ul`
  li {
    display: flex;
  }
`;

const SupportUsDropdown = () => {
  return (
    <CompanyDropdownEl>
      <DropdownSection data-first-dropdown-section>
        <ProductsSection>
          <li>
            <div>
              <Heading color="blue">
                <Link to="/SupportUs#howused">Donation Info</Link>
              </Heading>
            </div>
          </li>
          <li>
            <div>
              <Heading color="green">
                <Link to="/SupportUs#sponsors">Sponsors</Link>
              </Heading>
            </div>
          </li>
          <li>
            <div>
              <Heading color="teal">
                <Link to="/#mailinglist">Mailing List</Link>
              </Heading>
            </div>
          </li>
        </ProductsSection>
        <Donate>
          <Heading noMarginBottom>
            <Link to="https://donorbox.org/pioneers-in-engineering">
              <Icon /> Donate Now
            </Link>
          </Heading>
        </Donate>
      </DropdownSection>
    </CompanyDropdownEl>
  );
};

export default SupportUsDropdown;
