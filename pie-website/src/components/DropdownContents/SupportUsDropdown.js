import React from "react"
import styled from "styled-components"
import theme from "../../assets/themes/theme"

import { Heading, DropdownSection, Icon } from "./Components"

const CompanyDropdownEl = styled.div`
  width: 15rem;
`

const Donate = styled.div`
 border-top: 2px solid ${theme.colors.grey900};
  display:flex;
  justify-content: center;
  align-items: center;
  margin-top: ${theme.spacer};
  padding-top: ${theme.spacer};
  margin-top: 0;
}
h3 {
  margin-bottom: 0;
}
`

const ProductsSection = styled.ul`
  li {
    display: flex;
  }
`

const SupportUsDropdown = () => {
  return (
    <CompanyDropdownEl>
      <DropdownSection data-first-dropdown-section>
        <ProductsSection>
          <li>
            <div>
              <Heading color="blue">
                <a href="/SupportUs#howused">Donation Info</a>
              </Heading>
            </div>
          </li>
          <li>
            <div>
              <Heading color="green">
                <a href="/SupportUs#sponsors">Sponsors</a>
              </Heading>
            </div>
          </li>
          <li>
            <div>
              <Heading color="teal">
                <a href="/#mailinglist">Mailing List</a>
              </Heading>
            </div>
          </li>
        </ProductsSection>
        <Donate>
          <Heading noMarginBottom>
            <a href="https://donorbox.org/pioneers-in-engineering">
              <Icon /> Donate Now
            </a>
          </Heading>
        </Donate>
      </DropdownSection>
    </CompanyDropdownEl>
  )
}

export default SupportUsDropdown
