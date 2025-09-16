import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { DropdownSection, HeadingLink, Icon } from "./Components"

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
              </Link>
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
