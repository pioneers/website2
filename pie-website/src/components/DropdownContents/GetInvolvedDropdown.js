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
              <Heading color="blue">
                <a href="/getInvolved/Schools">Volunteer</a>
              </Heading>
            </div>
          </li>
          <li>
            <div>
              <Heading color="green" style={{ marginBottom: 0 }}>
                <a href="/getInvolved/Staff">Club Members</a>
              </Heading>
            </div>
          </li>
        </ProductsSection>
      </DropdownSection>
    </ProductsDropdownEl>
  )
}

export default AboutDropdown