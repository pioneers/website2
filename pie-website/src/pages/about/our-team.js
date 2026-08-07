import React from "react"

import Container from "react-bootstrap/Container"

import Header from "../../components/Header"

import { FaHandsHelping } from "@react-icons/all-files/fa/FaHandsHelping"
import { RiMoneyDollarCircleLine } from "@react-icons/all-files/ri/RiMoneyDollarCircleLine"
import { BiGroup } from "@react-icons/all-files/bi/BiGroup"

import Tab from "react-bootstrap/Tab"
import Tabs from "react-bootstrap/Tabs"

import Layout from "../../components/Layout"

import styled, { ThemeConsumer } from "styled-components"
import HelmetWrapper from "../../components/HelmetWrapper"

import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import Col from "react-bootstrap/esm/Col"
import Row from "react-bootstrap/esm/Row"

import theme from "../../assets/themes/theme"
import CustomizedContainer from "../../components/CustomizedContainer"

import pic from "../../assets/images/stock-images/sp23_final_comp.jpg"

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
        major
        name
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

const OurTeam = () => {
  const data = useStaticQuery(query)
  const advisors = data.allContentfulAdvisor.nodes
  const alumni = data.allContentfulAlumni.nodes
  const defaultStaffMember = data.allContentfulDefaultStaffMember.nodes

  const staff = data.allContentfulStaffMember.nodes
  const leadership = staff.filter(person => person.role && person.role.includes("Director"))
  const pm = staff.filter(person => person.role && person.role.includes("PM"))
  const other = staff.filter(
    person =>  person.role && !person.role.includes("Director") && !person.role.includes("PM")
  )

  return (
    <Layout>
      <HelmetWrapper
        title="Our Team"
        description="Pioneers in Engineering (PiE) promotes science, technology, engineering, and mathematics (STEM) education through an exciting, mentorship-based process. PiE is a student outreach organization based in UC Berkeley and was founded in 2008 by members of Tau Beta Pi led by Xiao-Yu Fu. We strongly believe that no student should be denied a quality STEM education experience."
      />
      <HeroWrapper>
        <div className="filler"></div>
        <div className="hero-image">
          <div>
            <h1>Our Team</h1>
          </div>
        </div>
      </HeroWrapper>
      <CustomizedContainer>
        <HeaderContainer fluid>
          <div id="2026 Team" />
          <h4 style={{ marginBottom: "1.5em", color: theme.colors.grey400 }}>
            {new Date().getFullYear()} PIONEERS IN ENGINEERING MEMBERS
          </h4>
          <h2 style={{ maxWidth: "700px", marginBottom: "3rem" }}>
            The group for the {new Date().getFullYear()} PiE class
          </h2>
        </HeaderContainer>
        <Container fluid>
          <Tabs defaultActiveKey="staff" id="uncontrolled-tab-example">
            <Tab eventKey="staff" title="Staff" class="styleTab">
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
    </Layout>
    )  
}

{/* const styledTabs = styled(Tabs)`
   .nav-tabs .nav-link{
  color: ${theme.colors.blue500}
  background-color: ${theme.colors.black}
}
  .nav-tabs .nav-link.active{
  color: ${theme.colors.blue300}
  background-color: ${theme.colors.white}
  border-color: ${theme.colors.gold300}
  }
  
` */}
const styledTabs = styled(Tabs)`
  .tab-item{
  color: ${theme.colors.blue500}
  }
`

const customTab = styled(Tab)`
.styleTab{
  background-color: ${theme.colors.blue100}
}
.tab-btn{
  backgroundcolor: ${theme.colors.blue100}
}
.tab-btn.active{
  backgroundcolor: ${theme.colors.bleu500}  
}
`
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
  .filler {
    position: relative;
    height: 92vh;
    z-index: -1;
  }
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
    z-index: -1;
    position: absolute;
    padding: 1rem;
    h1 {
      font-size: 5rem;
    }
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

export default OurTeam
