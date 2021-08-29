import React from "react"
import styled from "styled-components"
import { AnchorLink as Link } from "gatsby-plugin-anchor-links"

import { Heading, LinkList, DropdownSection, Icon } from "./Components"

const CompanyDropdownEl = styled.div`
  width: 22rem;
`

const Flex = styled.div`
  display: flex;
  > div:first-of-type {
    margin-right: 48px;
  }

  h4 a {
    color: black;
  }
  h4 a:hover,
  h4 a:focus {
    opacity: 0.7;
    outline: none;
  }
`

const GetInvolvedDropdown = () => {
  return (
    <CompanyDropdownEl>
      <DropdownSection data-first-dropdown-section>
        <div>
          <Heading>Why Pie?</Heading>
          <p>There is something for everyone here!</p>
          <Flex>
            <div>
              <h4>
                <Link to="/getInvolved/Decal">Decal</Link>
              </h4>
              <LinkList>
                <li>
                  <Link to="/getInvolved/Decal#details">Info</Link>
                </li>
                <li>
                  <Link to="https://decal.berkeley.edu/courses/5141">
                    Sign Up
                  </Link>
                </li>
              </LinkList>
            </div>
            <div>
              <h4>
                <Link to="/getInvolved/Schools">Schools</Link>
              </h4>
              <LinkList>
                <li>
                  <Link to="/getInvolved/Schools">Info</Link>
                </li>
                <li>
                  <Link to="/getInvolved/Schools#signUp">Sign Up</Link>
                </li>
              </LinkList>
            </div>
          </Flex>
        </div>
      </DropdownSection>
      <DropdownSection>
        <div>
          <Heading>
            <Icon />
            <Link to="/GetInvolved">Join Our Team</Link>
          </Heading>
          <LinkList marginLeft="25px">
            <li>
              <Link to="/GetInvolved#timeline">Timeline &rsaquo;</Link>
            </li>
            <li>
              <Link to="/getInvolved/Projects">Projects &rsaquo;</Link>
            </li>
            <li>
              <Link to="/getInvolved/Forms">Forms to Join &rsaquo;</Link>
            </li>
          </LinkList>
        </div>
      </DropdownSection>
    </CompanyDropdownEl>
  )
}

export default GetInvolvedDropdown
