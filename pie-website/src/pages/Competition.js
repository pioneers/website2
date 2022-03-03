import React from "react"

import Header from "../components/Header"
import Layout from "../components/Layout"
import { TimelineTwo } from "../components/Timelines"

import { FaRegHandPaper } from "@react-icons/all-files/fa/FaRegHandPaper"
import { AiOutlineTeam } from "@react-icons/all-files/ai/AiOutlineTeam"
import { BsBuilding } from "@react-icons/all-files/bs/BsBuilding"

import styled from "styled-components"
import CustomizedContainer from "../components/CustomizedContainer"
import AlternativeButton from "../components/AlternativeButton"
import HelmetWrapper from "../components/HelmetWrapper"
import { BoxesWrapper } from "../assets/themes/boxes"

import { useStaticQuery, graphql } from "gatsby"

import theme from "../assets/themes/theme"

import Container from "react-bootstrap/esm/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import pic from "../assets/images/stock-images/robotics_competition_sp17.jpg"

import { AnchorLink as Link } from "gatsby-plugin-anchor-links"

const query = graphql`
  {
    allContentfulCompetitionTimeline(
      sort: { order: ASC, fields: internalTime }
    ) {
      nodes {
        content {
          raw
        }
        event
        date
        time
        internalTime
      }
    }
  }
`

const StudentResources = () => {
  return (
    <ResourcesWrapper fluid>
      <Row className="resource-container">
        <Col sm={12} md={6} lg={6}>
          <div>
            <h3>Kit Guides and Software</h3>
            <p>
              Download <Link to="/getInvolved/Projects">Dawn</Link> and{" "}
              <Link to="/getInvolved/Projects">Runtime</Link> software, view
              documents and guides, and check for updates.
            </p>
            <AlternativeButton link="/competition/SoftwareHub">
              Software Hub &rsaquo;
            </AlternativeButton>
            <AlternativeButton link="/competition/MechanicalHub">
              Kit Hub &rsaquo;
            </AlternativeButton>
          </div>
        </Col>
        <Col sm={12} md={6} lg={6}>
          <div>
            <h3>Piazza</h3>
            <p>
              Ask questions and get answers! Discuss various competition aspects
              or just come chat. Access code: pie
            </p>
            <AlternativeButton link="https://piazza.com/class/kjxv8nixe2v69p">
              Forums &rsaquo;
            </AlternativeButton>
          </div>
        </Col>
        <Col sm={12} md={6} lg={6}>
          <div>
            <h3>Worksessions</h3>
            <p>
              Sign up for worksessions 24 hours in advance! Having debug issues?
              Need some more build time or tools? Come on out!
            </p>
            <AlternativeButton link="https://www.signupgenius.com/go/10C0E4CA8A723A3F8CF8-student">
              Worksession Sign Up &rsaquo;
            </AlternativeButton>
          </div>
        </Col>
        <Col sm={12} md={6} lg={6}>
          <div>
            <h3>Robot Simulator</h3>
            <p>
              Get up to speed with the{" "}
              <a href="https://github.com/pioneers/runtime/wiki/Student-API">
                Robot API
              </a>{" "}
              quickly, or test your robot code.
            </p>
            <AlternativeButton link="https://pimulator.pierobotics.org/">
              Simulator &rsaquo;
            </AlternativeButton>
          </div>
        </Col>
      </Row>
    </ResourcesWrapper>
  )
}

const Competition = () => {
  const data = useStaticQuery(query)
  const events = data.allContentfulCompetitionTimeline.nodes

  return (
    <Layout>
      <HelmetWrapper
        title="Competition"
        description="Linked here will be the various resources pertaining to our competition."
      />
      <HeroWrapper>
        <div className="placeholder"></div>
        <div className="hero-image">
          <div>
            <h1>Competition</h1>
          </div>
        </div>
      </HeroWrapper>

      <CustomizedContainer>
        <Container fluid>
          <h4 style={{ marginBottom: "1.5em", color: theme.colors.grey400 }}>
            INFORMATION
          </h4>
          <div id="howItWorks"></div>
          <Header type={"blue"}>How It Works</Header>
          <WorksBoxesWrapper
            fluid
            align="center"
            iconSize="4rem"
            padding="2rem 1.25rem"
          >
            <Row className="inner-container">
              <Col sm={12} md={4} lg={4}>
                <div className="card">
                  <div>
                    <FaRegHandPaper />
                    <h4>We provide mentorship and a responsive Piazza forum</h4>
                  </div>
                </div>
              </Col>
              <Col sm={12} md={4} lg={4}>
                <div className="card">
                  <div>
                    <AiOutlineTeam />
                    <h4>
                      Your team designs and builds an awesome, strategic robot
                    </h4>
                  </div>
                </div>
              </Col>
              <Col sm={12} md={4} lg={4}>
                <div className="card">
                  <div>
                    <BsBuilding />
                    <h4>You compete in one epic tournament!</h4>
                  </div>
                </div>
              </Col>
            </Row>
          </WorksBoxesWrapper>
        </Container>
      </CustomizedContainer>

      <CustomizedContainer>
        <div id="timeline" />
        <Container fluid>
          <h4 style={{ marginBottom: "1.5em", color: theme.colors.grey400 }}>
            THE TIMELINE
          </h4>
          <Header type={"gold"}>Our Events</Header>
        </Container>
        <TimelineTwo timelineFor={events} />
      </CustomizedContainer>

      <CustomizedContainer>
        <div id="resources" />
        <Container fluid>
          <h4 style={{ marginBottom: "1.5em", color: theme.colors.grey400 }}>
            HELPFUL LINKS
          </h4>
          <Header type={"blue"}>Resources For Students</Header>
        </Container>
        <StudentResources />
      </CustomizedContainer>
    </Layout>
  )
}

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

const WorksBoxesWrapper = styled(BoxesWrapper)``

const ResourcesWrapper = styled(Container)`
  padding: 0rem 2rem;
  .resource-container {
    background-color: ${theme.colors.grey100};
    margin-top: 2rem;
    padding: 1.5rem;
    border-radius: 0.25rem;
    box-shadow: ${theme.shadows.darkShadow};
  }

  & > div > div {
    padding: 0.5rem;
  }

  p {
    margin-bottom: 0.25rem;
  }

  h3 {
    color: ${theme.colors.grey900};
  }

  p > a {
    font-weight: 600;

    color: ${theme.colors.gold600};
  }

  p > a:hover {
    color: ${theme.colors.black};
  }
`

export default Competition
