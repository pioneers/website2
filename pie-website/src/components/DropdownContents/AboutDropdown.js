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

const AboutDropdown = () => {
  return (
    <ProductsDropdownEl>
      <DropdownSection data-first-dropdown-section>
        <ProductsSection>
          <li>
            <div>
              <Heading>
                <a href="/about/Organization">Organization</a>
              </Heading>
            </div>
          </li>
          <li>
            <div>
              <Heading>
                <a href="/about/Competition">Competition</a>
              </Heading>
            </div>
          </li>
          <li>
            <div>
              <Heading style={{ marginBottom: 0 }}>
                <a href="/about/OurTeam">Our Team</a>
              </Heading>
            </div>
          </li>
        </ProductsSection>
      </DropdownSection>
    </ProductsDropdownEl>
  )
}

export default AboutDropdown
