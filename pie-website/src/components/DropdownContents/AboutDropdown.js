import React from "react"
import styled, { css } from "styled-components"
import { Icon, DropdownSection, Heading, HeadingLink } from "./Components"
import { AnchorLink as Link } from "gatsby-plugin-anchor-links"
import theme from "../../assets/themes/theme"

const ProductsDropdownEl = styled.div`
  width: 23rem;
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
`

const ProductsSection = styled.ul`
  li {
    display: flex;
  }
`

const AboutDropdown = () => {
  return (
    <ProductsDropdownEl>
      <DropdownSection data-first-dropdown-section>
        <ProductsSection>
          <li>
            <div>
              <Logo color="blue" />
            </div>
            <div>
              <Heading color="blue">
                <Link to="/About#Overlords">Overlords</Link>
              </Heading>
              <p>Leadership for this year</p>
            </div>
          </li>
          <li>
            <div>
              <Logo color="green" />
            </div>
            <div>
              <Heading color="green">
                <Link to="/About#ProjectManagers">Project Managers</Link>
              </Heading>
              <p>The leaders of each project</p>
            </div>
          </li>
          <li>
            <div>
              <Logo color="teal" />
            </div>
            <div>
              <Heading color="teal">
                <Link to="/About/AllOtherMembers">All Other Members</Link>
              </Heading>
              <p style={{ marginBottom: 0 }}>
                Underlings, advisors, and alumni
              </p>
            </div>
          </li>
        </ProductsSection>
      </DropdownSection>
      <DropdownSection>
        <SubProductsList>
          <ul>
            <HeadingLink>
              <Link to="/About#Mission">
                <Icon /> Mission Statement
              </Link>
            </HeadingLink>

            <HeadingLink noMarginBottom>
              <Link to="/About#Foundation">
                <Icon /> Foundation
              </Link>
            </HeadingLink>
          </ul>
        </SubProductsList>
      </DropdownSection>
    </ProductsDropdownEl>
  )
}

export default AboutDropdown
