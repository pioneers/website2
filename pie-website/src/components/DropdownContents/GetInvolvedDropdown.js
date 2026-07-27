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

const GetInvolvedDropdown = () => {
  return (
    <ProductsDropdownEl>
      <DropdownSection data-first-dropdown-section>
        <ProductsSection>
          <li>
            <div>
              <Heading color="blue">
                <a href="/get-involved/mentors">Mentors</a>
              </Heading>
            </div>
          </li>
          <li>
            <div>
              <Heading color="blue">
                <a href="/get-involved/staff">Club Members</a>
              </Heading>
            </div>
          </li>
          <li>
            <div>
              <Heading color="blue" style={{ marginBottom: 0 }}>
                <a href="/get-involved/volunteer">Volunteer</a>
              </Heading>
            </div>
          </li>
        </ProductsSection>
      </DropdownSection>
    </ProductsDropdownEl>
  )
}

export default GetInvolvedDropdown