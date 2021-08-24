import React from "react"
import styled, { css } from "styled-components"
import theme from "../../assets/themes/theme"

import { AnchorLink as Link } from "gatsby-plugin-anchor-links"

import { Heading, DropdownSection, Icon } from "./Components"

const CompanyDropdownEl = styled.div`
  width: 28rem;
`
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
`

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
`

const ProductsSection = styled.ul`
  li {
    display: flex;
  }
`

const SupportUsDropdown = () => {
  return (
    <CompanyDropdownEl>
      <DropdownSection data-first-dropdown-section>
        <ProductsSection>
          <li>
            <div>
              <Logo color="blue" />
            </div>
            <div>
              <Heading color="blue">
                <Link to="/SupportUs/info">Donation Info</Link>
              </Heading>
              <p>
                Learn more about how your donations are used and why they are
                needed
              </p>
            </div>
          </li>
          <li>
            <div>
              <Logo color="green" />
            </div>
            <div>
              <Heading color="green">
                <Link to="/SupportUs#sponsors">Sponsors</Link>
              </Heading>
              <p>The list of of generous sponsors for this year</p>
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
  )
}

export default SupportUsDropdown
