import React from "react"

import Container from "react-bootstrap/Container"

import Header from "../components/Header"

import { FaHandsHelping } from "@react-icons/all-files/fa/FaHandsHelping"
import { RiMoneyDollarCircleLine } from "@react-icons/all-files/ri/RiMoneyDollarCircleLine"
import { BiGroup } from "@react-icons/all-files/bi/BiGroup"

import Tab from "react-bootstrap/Tab"
import Tabs from "react-bootstrap/Tabs"

import Layout from "../components/Layout"

import styled from "styled-components"
import HelmetWrapper from "../components/HelmetWrapper"

import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import Col from "react-bootstrap/esm/Col"
import Row from "react-bootstrap/esm/Row"

import theme from "../assets/themes/theme"
import CustomizedContainer from "../components/CustomizedContainer"

import pic from "../assets/images/stock-images/retreat-sp18-team.jpg"

import { AnchorLink as Link } from "gatsby-plugin-anchor-links"

const query = graphql`
  {
    allContentfulAdvisor {
      nodes {
        name
        image {
          gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
        }
        position
      }
    }
    allContentfulAlumni {
      nodes {
        name
        positionInClub
        whereAreTheyWorking
        image {
          gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
        }
      }
    }
    allContentfulFoundation {
      nodes {
        name
        position
      }
    }
    allContentfulStaffMember {
      nodes {
        bio {
          bio
        }
        githubLink
        linkedinLink
        major
        name
        personalWebsite
        picture {
          gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
        }
        role
        year
      }
    }
    allContentfulDefaultStaffMember {
      nodes {
        bio {
          bio
        }
        picture {
          gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
        }
      }
    }
  }
`

const PieFoundation = ({ data }) => {
  const foundation = data.allContentfulFoundation.nodes
  return (
    <NewFoundation fluid>
      <Row>
        <Col md={8} lg={8}>
          <h3>Mission</h3>
          <p>
            The Pioneers in Engineering Foundation is an independent, tax-exempt
            501(c)(3) non-profit organization. Its mission is to promote STEM
            education through an exciting, mentor-based process.
          </p>
          <h3>Donate</h3>
          <p>
            Donations to PiE are tax-deductible subject to federal and state
            charitable giving rules. If you would like to make a donation,
            please{" "}
            <a
              href="https://donorbox.org/pioneers-in-engineering"
              target="_blank"
              rel="noreferrer"
            >
              donate online now
            </a>{" "}
            or email{" "}
            <a
              href="mailto:foundation@pioneers.berkeley.edu"
              target="_blank"
              rel="noreferrer"
            >
              foundation@pioneers.berkeley.edu
            </a>{" "}
            to arrange your gift.
          </p>
          <h3>Board of Directors and Executive Officers</h3>
          <p>
            The PiE Foundation is led by a board of current and former PiE
            members.
          </p>
          <div className="foundation-members">
            <div className="exec">
              <h3>Executive Officers</h3>
              <div>
                {foundation
                  .filter(person => person.position !== "Board Member")
                  .map(node => {
                    const { position, name } = node
                    return (
                      <div>
                        {position}: {name}
                      </div>
                    )
                  })}
              </div>
            </div>
            <div className="board">
              <h3>Board Members</h3>
              <div className="board-members">
                {foundation
                  .filter(person => person.position === "Board Member")
                  .map(node => {
                    const { name } = node
                    return <div>{name}</div>
                  })}
              </div>
            </div>
          </div>
          <h3>Acknowledgement</h3>
          <p>
            In 2015, Pioneers in Engineering obtained 501(c)(3) nonprofit status
            with the help of{" "}
            <a href="https://www.fr.com/" target="_blank" rel="noreferrer">
              Michael M. Rosen of Fish and Richardson
            </a>
          </p>
        </Col>
        <Col md={4} lg={4}>
          <hr className="hide" />
          <div>
            <h3>Tax Information</h3>
            <p>EIN 47-4554504</p>
            <p>
              <a
                href="https://pioneers.berkeley.edu/assets/sponsors/pief_determination_letter.pdf"
                target="_blank"
                rel="noreferrer"
              >
                IRS Determination Letter
              </a>
            </p>
          </div>
          <div>
            <h3>Contact Us</h3>
            <p>Pioneers in Engineering Foundation</p>
            <p>707 N Henry Ave</p>
            <p>San Jose, CA 95117</p>
            <p>
              <a
                href="mailto:foundation@pioneers.berkeley.edu"
                target="_blank"
                rel="noreferrer"
              >
                foundation@pioneers.berkeley.edu
              </a>
            </p>
          </div>
        </Col>
      </Row>
    </NewFoundation>
  )
}

const About = () => {
  const data = useStaticQuery(query)
  const advisors = data.allContentfulAdvisor.nodes
  const alumni = data.allContentfulAlumni.nodes
  const defaultStaffMember = data.allContentfulDefaultStaffMember.nodes

  const staff = data.allContentfulStaffMember.nodes
  // console.log(staff)
  const leadership = staff.filter(person => person.role.includes("Director"))
  const pm = staff.filter(person => person.role.includes("PM"))
  const other = staff.filter(
    person => !person.role.includes("Director") && !person.role.includes("PM")
  )
  console.log(other)

  return (
    <Layout>
      <HelmetWrapper
        title="About"
        description="Pioneers in Engineering (PiE) promotes science, technology, engineering, and mathematics (STEM) education through an exciting, mentorship-based process. PiE is a student outreach organization based in UC Berkeley and was founded in 2008 by members of Tau Beta Pi led by Xiao-Yu Fu. We strongly believe that no student should be denied a quality STEM education experience."
      />
      <HeroWrapper>
        <div className="placeholder"></div>
        <div className="hero-image">
          <div>
            <h1>About</h1>
          </div>
        </div>
      </HeroWrapper>
      <CustomizedContainer color={theme.colors.grey100}>
        <HeaderContainer fluid>
          <div id="mission" />
          <h4 style={{ marginBottom: "1.5em", color: theme.colors.grey400 }}>
            MISSION
          </h4>
          <h2 style={{ maxWidth: "700px", marginBottom: "3rem" }}>
            Pioneers in Engineering (PiE) promotes STEM education through a
            mentorship-based process. We strongly believe that no student should
            be denied a quality STEM education experience.
          </h2>
        </HeaderContainer>

        <WhyThisWorks fluid>
          <Row>
            <Col sm={12} md={4} lg={4}>
              <div>
                <FaHandsHelping />
                <h4>Helpful college mentors</h4>
                <p>
                  PiE runs a <Link to="/getInvolved/Decal">decal</Link> which
                  trains a group of dedicated mentors consisting of current and
                  past Berkeley students who are ready and willing to help the
                  students
                </p>
              </div>
            </Col>
            <Col sm={12} md={4} lg={4}>
              <div>
                <RiMoneyDollarCircleLine />
                <h4>Low cost for schools</h4>
                <p>
                  Because PiE creates everything in the competition and has a
                  group of wonderful{" "}
                  <Link to="/SupportUs#sponsors">sponsors</Link>, we can keep
                  costs low which lowers the barrier to entry for Bay Area
                  schools
                </p>
              </div>
            </Col>
            <Col sm={12} md={4} lg={4}>
              <div>
                <BiGroup />
                <h4>Dedicated club members</h4>
                <p>
                  A group of talented students who make everything happen from
                  the game design to the{" "}
                  <Link to="/competition/SoftwareHub">software</Link> to the{" "}
                  <Link to="/competition/MechanicalHub">robot kits</Link>
                </p>
              </div>
            </Col>
          </Row>
        </WhyThisWorks>
      </CustomizedContainer>
      <CustomizedContainer>
        <Container fluid>
          <Tabs defaultActiveKey="staff" id="uncontrolled-tab-example">
            <Tab eventKey="staff" title="Staff">
              {/* <h3 style={{ margin: "1rem 0" }}>Click on us to learn more!</h3> */}
              <div id="leadership"></div>
              <br />
              <Header type={"blue-header"}>Leadership</Header>
              <Row>
                {leadership.map((person, idx) => {
                  return (
                    <SpecialCol xs={12} sm={6} md={4} lg={3}>
                      <div className="card">
                        {person.picture ? (
                          <GatsbyImage
                            image={person.picture.gatsbyImageData}
                            className="img"
                          ></GatsbyImage>
                        ) : (
                          <GatsbyImage
                            image={
                              defaultStaffMember[0].picture.gatsbyImageData
                            }
                            className="img"
                          ></GatsbyImage>
                        )}
                        <div>
                          <h3>{person.name}</h3>
                          <h4>{person.role}</h4>
                        </div>
                      </div>
                    </SpecialCol>
                  )
                })}
              </Row>
              <div id="projectManagers"></div>
              <Header type={"gold-header"}>Project Managers</Header>
              <Row>
                {pm.map((person, idx) => {
                  return (
                    <SpecialCol xs={12} sm={6} md={4} lg={3}>
                      <div className="card">
                        {person.picture ? (
                          <GatsbyImage
                            image={person.picture.gatsbyImageData}
                            className="img"
                          ></GatsbyImage>
                        ) : (
                          <GatsbyImage
                            image={
                              defaultStaffMember[0].picture.gatsbyImageData
                            }
                            className="img"
                          ></GatsbyImage>
                        )}
                        <div>
                          <h3>{person.name}</h3>
                          <h4>{person.role}</h4>
                        </div>
                      </div>
                    </SpecialCol>
                  )
                })}
              </Row>
              <div id="others"></div>
              <Header type={"blue-header"}>All Other Staff</Header>
              <Row>
                {other.map((person, idx) => {
                  return (
                    <SpecialCol xs={12} sm={6} md={4} lg={3}>
                      <div className="card">
                        <div>
                          <h3>{person.name}</h3>
                          <h4>{person.role}</h4>
                        </div>
                      </div>
                    </SpecialCol>
                  )
                })}
              </Row>
            </Tab>
            <Tab eventKey="alumni-advisors" title="Alumni/Advisors">
              <Row>
                {alumni.map(person => {
                  return (
                    <SpecialCol xs={12} sm={6} md={4} lg={3}>
                      <div>
                        <GatsbyImage
                          image={person.image.gatsbyImageData}
                          className="img"
                        ></GatsbyImage>
                        <div>
                          <h3>{person.name}</h3>
                          <h4>
                            {person.positionInClub !== "N/A"
                              ? person.whereAreTheyWorking !== null
                                ? person.positionInClub +
                                  " | " +
                                  person.whereAreTheyWorking
                                : person.positionInClub
                              : person.whereAreTheyWorking}
                          </h4>
                        </div>
                      </div>
                    </SpecialCol>
                  )
                })}
              </Row>
            </Tab>
            <Tab eventKey="faculty-advisors" title="Faculty Advisors">
              <Row>
                {advisors.map(person => {
                  return (
                    <SpecialCol xs={12} sm={6} md={4} lg={3}>
                      <div>
                        <GatsbyImage
                          image={person.image.gatsbyImageData}
                          class="img"
                        ></GatsbyImage>
                        <div>
                          <h3>{person.name}</h3>
                          <h4>{person.position}</h4>
                        </div>
                      </div>
                    </SpecialCol>
                  )
                })}
              </Row>
            </Tab>
          </Tabs>
        </Container>
      </CustomizedContainer>

      <CustomizedContainer color={theme.colors.grey100}>
        <div id="foundation" />
        <Container fluid>
          <Header type={"gold-header"}>PiE Foundation</Header>
        </Container>
        <PieFoundation data={data} />
      </CustomizedContainer>
    </Layout>
  )
}

const SpecialCol = styled(Col)`
  padding: 1rem;
  & > div {
    background-color: ${theme.colors.blue700};
    border-radius: ${theme.borderRadius};
    box-shadow: ${theme.shadows.darkShadow};
    color: ${theme.colors.grey50};
  }

  & > div > div {
    padding: 1rem;
  }

  .img {
    border-radius: ${theme.borderRadius} ${theme.borderRadius} 0 0;
    max-height: 15rem;
  }

  .img img {
    display: inline-block;
    height: 100%;
    vertical-align: middle;
  }
  h3,
  h4 {
    margin: 0 0 0.5rem 0;
  }

  @media screen and (max-width: 767px) {
    .img {
      max-height: 18rem;
    }
  }

  @media screen and (max-width: 575px) {
    .img {
      max-height: 20rem;
    }
  }
`

const HeroWrapper = styled.div`
  .hero-image {
    background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5)),
      url(${pic}) center/cover fixed no-repeat;
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: ${theme.colors.white};
    top: 0;
    position: absolute;
    z-index: -1;
    padding: 1rem;
  }
  .placeholder {
    height: 90vh;
    width: 100%;
  }
`

const NewFoundation = styled(Container)`
  p {
    margin: 0;
  }
  h3 {
    margin: 1rem 0 0.5rem 0;
    color: ${theme.colors.grey900};
  }

  .foundation-members {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;
    grid-gap: 1rem;
  }

  .board-members {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;
  }

  .hide {
    display: none;
  }

  p > a {
    font-weight: 600;
    color: ${theme.colors.blue500};
  }

  p > a:hover {
    color: ${theme.colors.black};
  }

  @media screen and (max-width: 768px) {
    .foundation-members {
      grid-template-columns: 1fr;
    }

    .board-members {
      grid-template-columns: 1fr 1fr 1fr;
    }

    .hide {
      display: block;
      margin: 2rem 0;
    }
  }

  @media screen and (max-width: 390px) {
    .board-members {
      grid-template-columns: 1fr 1fr;
    }
  }
`
const HeaderContainer = styled(Container)``

const WhyThisWorks = styled(Container)`
  h4 {
    border-left: 1px ${theme.colors.blue600} solid;
    /* margin-bottom: 0; */
    line-height: 1.2rem;
    padding-left: 0.75rem;
    color: ${theme.colors.blue600};
    margin: 0.75rem 0;
  }

  svg {
    padding: 0 0 0 0.75rem;
    font-size: 3.5rem;
  }

  p {
    padding-left: 0.75rem;
    color: ${theme.colors.grey600};
    margin-bottom: 0.5rem;
    font-weight: 400;
  }

  a {
    color: ${theme.colors.gold600};
    font-weight: 600;
  }

  a:hover {
    color: ${theme.colors.black};
  }

  .row > div {
    margin: 1.25rem 0;
  }

  @media screen and (max-width: 767px) {
    .row > div {
      margin-bottom: 0;
    }
  }
`

export default About
