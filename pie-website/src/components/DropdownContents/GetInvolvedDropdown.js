import React from "react"
import styled from "styled-components"

import { Heading, LinkList, DropdownSection, Icon } from "./Components"

const CompanyDropdownEl = styled.div`
  width: 17rem;
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
          <Flex>
            <div>
              <h4>
                <a href="/getInvolved/Decal">Decal</a>
              </h4>
              <LinkList>
                <li>
                  <a href="/getInvolved/Decal#details">Info</a>
                </li>
                <li>
                  <a href="/getInvolved/Forms">
                    Sign Up
                  </a>
                </li>
              </LinkList>
            </div>
            <div>
              <h4>
                <a href="/getInvolved/Schools">Schools</a>
              </h4>
              <LinkList>
                <li>
                  <a href="/getInvolved/Schools">Info</a>
                </li>
                <li>
                  <a href="/getInvolved/Schools#signUp">Sign Up</a>
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
            <a href="/GetInvolved">Join Our Team</a>
          </Heading>
          <LinkList marginLeft="25px">
            <li>
              <a href="/GetInvolved#timeline">Timeline &rsaquo;</a>
            </li>
            <li>
              <a href="/getInvolved/Projects">Projects &rsaquo;</a>
            </li>
            <li>
              <a href="/getInvolved/Forms">Forms to Join &rsaquo;</a>
            </li>
          </LinkList>
        </div>
      </DropdownSection>
    </CompanyDropdownEl>
  )
}

export default GetInvolvedDropdown
