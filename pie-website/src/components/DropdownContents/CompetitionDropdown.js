import React from "react"
import styled from "styled-components"
import { AnchorLink as Link } from "gatsby-plugin-anchor-links"

import {
  Icon,
  DropdownSection,
  Heading,
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
                  <Link to="/competition/SoftwareHub">Software Hub</Link>
                </li>
                {/*<li>
                  <Link to="/competition/EduHub">Edu Hub</Link>
                </li>*/}
              </LinkList>
            </div>
            <div>
              <h4>Communication</h4>
              <LinkList>
              <li>
                <Link to="https://discord.gg/hYREQD2N5r">Discord</Link>
              </li>
                
              {/* <li>
                <Link to="https://piazza.com/class/kjxv8nixe2v69p">Piazza</Link>
              </li> */}
              <li>
                <Link to="/#mailinglist">Mailing List</Link>
              </li>
              </LinkList>
            </div>
          </Flex>
        </div>
      </DropdownSection>
      <DropdownSection>
        <ul>
          <HeadingLink>
            <Link to="https://pimulator.pierobotics.org/">
              <Icon /> Pimulator
            </Link>
          </HeadingLink>
          <HeadingLink>
            <Link to="https://github.com/pioneers/runtime/wiki/Student-API">
              <Icon /> Full Robot API Reference
            </Link>
          </HeadingLink>
          <HeadingLink>
            <Link to="https://docs.google.com/document/d/193eKA8520k7EMORqC0WkdeisCfz2OOUw0mMGtfk0tXU/edit">
              <Icon /> Game Manual
            </Link>
          </HeadingLink>
          <HeadingLink>
            <Link to="/Competition#timeline">
              <Icon /> Timeline
            </Link>
          </HeadingLink>
          <HeadingLink noMarginBottom>
            <Link to="/competition/RCScholarship">
              <Icon /> RC Scholarship
            </Link>
          </HeadingLink>
        </ul>
      </DropdownSection>
    </DevelopersDropdownEl>
  )
}

export default CompetitionDropdown
