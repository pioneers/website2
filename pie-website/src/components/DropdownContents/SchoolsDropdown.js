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

const SchoolsDropdown = () => {
  return (
    <ProductsDropdownEl>
      <DropdownSection data-first-dropdown-section>
        <ProductsSection>
          <li>
            <div>
              <Heading>
                <a href="/schools/compete/">Compete</a>
              </Heading>
            </div>
          </li>
          <li>
            <div>
              <Heading>
                <a href="/schools/scholarship">Scholarship</a>
              </Heading>
            </div>
          </li>
          <li>
            <div>
              <Heading>
                <a href="/schools/communication">Communication</a>
              </Heading>
            </div>
          </li>
          <li>
            <div>
              <Heading style={{ marginBottom: 0 }}>
                <a href="/schools/software-hub">SoftwareHub</a>
              </Heading>
            </div>
          </li>
        </ProductsSection>
      </DropdownSection>
    </ProductsDropdownEl>
  )
}

export default SchoolsDropdown
