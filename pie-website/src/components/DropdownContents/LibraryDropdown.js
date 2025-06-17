import React from "react"
import styled, { css } from "styled-components"

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
            <HeadingLink>
              <Link to="https://us3.campaign-archive.com/home/?u=75571c98bd2b83e6c6dddcd90&id=4cf8d72b19">
                <Icon /> Blog
              </a>
            </HeadingLink>
          </li>
          <li>
            <HeadingLink style={{ marginBottom: 0 }}>
              <a href="/Gallery">
                <Icon /> Gallery
              </a>
            </HeadingLink>
          </li>
        </ProductsSection>
      </DropdownSection>
    </CompanyDropdownEl>
  )
}

export default LibraryDropdown
