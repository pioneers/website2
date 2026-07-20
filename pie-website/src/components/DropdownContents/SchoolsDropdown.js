import React from "react"
import styled from "styled-components"
import { Icon, DropdownSection, Heading, HeadingLink } from "./Components"
import theme from "../../assets/themes/theme"

const ProductsDropdownEl = styled.div`
  width: 13rem;
`

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
                <a href="/About#projectManagers">Scholarship</a>
              </Heading>
            </div>
          </li>
          <li>
            <div>
              <Heading>
                <a href="/schools/Communication">Communication</a>
              </Heading>
            </div>
          </li>
          <li>
            <div>
              <Heading style={{ marginBottom: 0 }}>
                <a href="/About#others">SoftwareHub</a>
              </Heading>
            </div>
          </li>
        </ProductsSection>
      </DropdownSection>
    </ProductsDropdownEl>
  )
}

export default SchoolsDropdown
