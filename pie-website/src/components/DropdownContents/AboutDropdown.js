import React from "react"
import styled from "styled-components"
import { Icon, DropdownSection, Heading, HeadingLink } from "./Components"
import theme from "../../assets/themes/theme"

const ProductsDropdownEl = styled.div`
  width: 19rem;
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
                <a href="/About#leadership">Leadership</a>
              </Heading>
            </div>
          </li>
          <li>
            <div>
              <Heading color="green">
                <a href="/About#projectManagers">Project Managers</a>
              </Heading>
            </div>
          </li>
          <li>
            <div>
              <Heading color="teal" style={{ marginBottom: 0 }}>
                <a href="/About#others">All Other Members</a>
              </Heading>
            </div>
          </li>
        </ProductsSection>
      </DropdownSection>
      <DropdownSection>
        <SubProductsList>
          <ul>
            <HeadingLink>
              <a href="/About#mission">
                <Icon /> Mission Statement
              </a>
            </HeadingLink>

            <HeadingLink noMarginBottom>
              <a href="/About#foundation">
                <Icon /> Foundation
              </a>
            </HeadingLink>
          </ul>
        </SubProductsList>
      </DropdownSection>
    </ProductsDropdownEl>
  )
}

export default AboutDropdown
