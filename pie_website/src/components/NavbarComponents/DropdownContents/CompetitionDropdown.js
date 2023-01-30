import React from "react";
import styled from "styled-components";
import Link from "../../CLink";
import theme from "../../../styles/theme";

import {
  Icon,
  DropdownSection,
  Heading,
  HeadingLink,
  LinkList,
} from "./Components";

const DevelopersDropdownEl = styled.div`
  width: 22rem;
`;

const Flex = styled.div`
  display: flex;
  > div:first-of-type {
    margin-right: 48px;
  }
`;

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
`;

const ProductsSection = styled.ul`
  li {
    display: flex;
  }
`;

const CompetitionDropdown = () => {
  return (
    <DevelopersDropdownEl>
      {/* <DropdownSection data-first-dropdown-section>
        <div>
          <Flex>
            <div>
              <h4>Hubs</h4>
              <LinkList>
                <li>
                  <Link to="/competition/SoftwareHub">Software Hub</Link>
                </li>
                <li>
                  <Link to="/competition/MechanicalHub">Mechanical Hub</Link>
                </li>
                <li>
                  <Link to="/competition/EduHub">Edu Hub</Link>
                </li>
              </LinkList>
            </div>
            <div>
              <h4>Communication</h4>
              <LinkList>
                {
                  <li>
                    <Link to="https://discord.gg/HWK2bjSJ">Discord</Link>
                  </li>
                }
                <li>
                  <Link to="https://piazza.com/class/kjxv8nixe2v69p">
                    Piazza
                  </Link>
                </li>
                <li>
                  <Link to="/#mailinglist">Mailing List</Link>
                </li>
              </LinkList>
            </div>
          </Flex>
        </div>
      </DropdownSection> */}
      <DropdownSection>
        <ProductsSection>
          <Heading color="teal">
            <Link to="/Competition#timeline">Calendar</Link>
          </Heading>
          <Heading color="green">
            <Link to="https://pimulator.pierobotics.org/">Pimulator</Link>
          </Heading>
          <Heading color="green">
            <Link to="https://github.com/pioneers/runtime/wiki/Student-API">
              Full Robot API Reference
            </Link>
          </Heading>
          <Heading color="green">
            <Link to="/Competition">Latest Dawn Version</Link>
          </Heading>
          <Heading color="teal">
            <Link to="https://docs.google.com/document/d/1rbkZkQUVMMmOxakEbZS_mdq2EaLcBOOBjztCv7yEkCY/edit">
              Game Manual (old)
            </Link>
          </Heading>

          <Heading color="teal">
            <Link to="https://discord.gg/HWK2bjSJ">Discord</Link>
          </Heading>
        </ProductsSection>
        <Donate>
          <Heading noMarginBottom>
            <Link to="/competition/RCScholarship">
              <Icon /> RC Scholarship
            </Link>
          </Heading>
        </Donate>
      </DropdownSection>
    </DevelopersDropdownEl>
  );
};

export default CompetitionDropdown;
