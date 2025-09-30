import React from "react"
import styled from "styled-components"

import {
  Icon,
  DropdownSection,
  HeadingLink,
  LinkList,
} from "./Components"

const DevelopersDropdownEl = styled.div`
  width: 24rem;
`

const Flex = styled.div`
  display: flex;
  > div:first-of-type {
    margin-right: 48px;
  }
`

const CompetitionDropdown = () => {
  return (
    <DevelopersDropdownEl>
      <DropdownSection data-first-dropdown-section>
        <div>
          <Flex>
            <div>
              <h4>Hubs</h4>
              <LinkList>
                <li>
                  <a href="/competition/SoftwareHub">Software Hub</a>
                </li>
                {/*<li>
                  <a href="/competition/EduHub">Edu Hub</a>
                </li>*/}
              </LinkList>
            </div>
            <div>
              <h4>Communication</h4>
              <LinkList>
              <li>
                <a href="https://discord.gg/hYREQD2N5r">Discord</a>
              </li>
                
              {/* <li>
                <a href="https://piazza.com/class/kjxv8nixe2v69p">Piazza</a>
              </li> */}
              <li>
                <a href="/#mailinglist">Mailing List</a>
              </li>
              </LinkList>
            </div>
          </Flex>
        </div>
      </DropdownSection>
      <DropdownSection>
        <ul>
          <HeadingLink>
            <a href="https://pimulator.pierobotics.org/">
              <Icon /> Pimulator
            </a>
          </HeadingLink>
          <HeadingLink>
            <a href="https://github.com/pioneers/runtime/wiki/Student-API">
              <Icon /> Full Robot API Reference
            </a>
          </HeadingLink>
          <HeadingLink>
            <a href="https://docs.google.com/document/d/193eKA8520k7EMORqC0WkdeisCfz2OOUw0mMGtfk0tXU/edit">
              <Icon /> Game Manual
            </a>
          </HeadingLink>
          <HeadingLink>
            <a href="/Competition#timeline">
              <Icon /> Timeline
            </a>
          </HeadingLink>
          <HeadingLink noMarginBottom>
            <a href="/competition/RCScholarship">
              <Icon /> RC Scholarship
            </a>
          </HeadingLink>
        </ul>
      </DropdownSection>
    </DevelopersDropdownEl>
  )
}

export default CompetitionDropdown
