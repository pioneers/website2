import React from "react"
import styled, { css } from "styled-components"

import { AnchorLink as Link } from "gatsby-plugin-anchor-links"

import theme from "../../assets/themes/theme"

import { Heading, DropdownSection } from "./Components"

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
  width: 24rem;
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
            <div>
              <Logo color="blue" />
            </div>
            <div>
              <Heading color="blue">
                <Link to="https://pierobotics.medium.com/">Blog</Link>
              </Heading>
              <p>See here updates on what we are doing and what we have done</p>
            </div>
          </li>
          <li>
            <div>
              <Logo color="green" />
            </div>
            <div>
              <Heading color="green">
                <Link to="/Gallery">Gallery</Link>
              </Heading>
              <p style={{ marginBottom: 0 }}>
                Get to know what we are about through our past pictures
              </p>
            </div>
          </li>
        </ProductsSection>
      </DropdownSection>
    </CompanyDropdownEl>
  )
}

export default LibraryDropdown
