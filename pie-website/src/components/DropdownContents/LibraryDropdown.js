import React from "react"
import styled, { css } from "styled-components"

import { AnchorLink as Link } from "gatsby-plugin-anchor-links"

import theme from "../../assets/themes/theme"

import { Heading, DropdownSection, HeadingLink, Icon } from "./Components"

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

const CompanyDropdownEl = styled.div`
  width: 12rem;
`

const ProductsSection = styled.ul`
  li {
    display: flex;
  }
`

const LibraryDropdown = () => {
  return (
    <CompanyDropdownEl>
      <DropdownSection data-first-dropdown-section>
        <ProductsSection>
          <li>
            <HeadingLink style={{ marginBottom: 0 }}>
              <Link to="https://pierobotics.medium.com/">
                <Icon /> Blog
              </Link>
            </HeadingLink>
          </li>
          <li>
            <HeadingLink style={{ marginBottom: 0 }}>
              <Link to="/Gallery">
                <Icon /> Gallery
              </Link>
            </HeadingLink>
          </li>
        </ProductsSection>
      </DropdownSection>
    </CompanyDropdownEl>
  )
}

export default LibraryDropdown
