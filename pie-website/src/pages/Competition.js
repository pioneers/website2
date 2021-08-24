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
import SEO from "../components/Seo"
import { BoxesWrapper } from "../assets/themes/boxes"

import { useStaticQuery, graphql } from "gatsby"

import theme from "../assets/themes/theme"

import Container from "react-bootstrap/esm/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
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
              Download Dawn and Runtime software, view documents and guides, and
              check for updates.
            </p>
            <AlternativeButton link="/404">Software Hub</AlternativeButton>
            <AlternativeButton link="/404">Kit Hub</AlternativeButton>
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
              Forums
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
            <AlternativeButton link="https://www.wejoinin.com/sheets/ssuba">
              Worksession Sign Up
            </AlternativeButton>
          </div>
        </Col>
        <Col sm={12} md={6} lg={6}>
          <div>
            <h3>Robot Simulator</h3>
            <p>
              Get up to speed with the Robot API quickly, or test your robot
              code.
            </p>
            <AlternativeButton link="https://pimulator.pierobotics.org/">
              Simulator
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
      <SEO
        title="Competition"
        description="Linked here will be the various resources pertaining to our competition."
      />
      <HeroWrapper>
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
    /* background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7)),
      url("../assets/images/stock-images/blog.jpg") center/cover fixed no-repeat; */
    background-color: coral;
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
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
`

export default Competition
