import React from "react"
import styled from "styled-components"
import {DropdownSection, Heading } from "./Components"
import theme from "../../assets/themes/theme"

const ProductsDropdownEl = styled.div`
  width: 13rem;
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
              <Heading>
                <a href="/about/organization">Organization</a>
              </Heading>
            </div>
          </li>
          <li>
            <div>
              <Heading>
                <a href="/about/competition">Competition</a>
              </Heading>
            </div>
          </li>
          <li>
            <div>
              <Heading style={{ marginBottom: 0 }}>
                <a href="/about/our-team">Our Team</a>
              </Heading>
            </div>
          </li>
        </ProductsSection>
      </DropdownSection>
    </ProductsDropdownEl>
  )
}

export default AboutDropdown
