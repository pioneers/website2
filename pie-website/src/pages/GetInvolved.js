import React from "react"

import Header from "../components/Header"
import { TimelineOne } from "../components/Timelines"
import { FaHandsHelping } from "@react-icons/all-files/fa/FaHandsHelping"
import { BiGroup } from "@react-icons/all-files/bi/BiGroup"

import Layout from "../components/Layout"

import styled from "styled-components"
import CustomizedContainer from "../components/CustomizedContainer"
import AlternativeButton from "../components/AlternativeButton"
import SEO from "../components/SEO"
import { BoxesWrapper } from "../assets/themes/boxes"

import { useStaticQuery, graphql } from "gatsby"

import theme from "../assets/themes/theme"
import Row from "react-bootstrap/esm/Row"
import Col from "react-bootstrap/esm/Col"
import Container from "react-bootstrap/esm/Container"

const query = graphql`
  {
    allContentfulRecruitingTimeline(
      sort: { fields: internalTime, order: ASC }
    ) {
      nodes {
        content {
          raw
        }
        event
        time
        week
        link
        internalTime
      }
    }
  }
`

const GetInvolved = () => {
  const data = useStaticQuery(query)
  const events = data.allContentfulRecruitingTimeline.nodes
  return (
    <Layout>
      <SEO
        title="Get Involved"
        description="Want to help out? Here at PiE, we don't have an application process. Rather, we firmly believe that any UC Berkeley student who is interested in our club has something to offer, whether community-wise, project-wise, or anything else that we can't think of ourselves! Simply fill out the forms or come check out worksession and we'll get you started!"
      />
      <HeroWrapper>
        <div className="hero-image">
          <div>
            <h1>Get Involved</h1>
          </div>
        </div>
      </HeroWrapper>

      <CustomizedContainer color={theme.colors.white}>
        <div id="recruiting" />
        <Container fluid>
          <h4 style={{ marginBottom: "1.5em", color: theme.colors.grey400 }}>
            JOIN US
          </h4>
          <Header type={"blue-header"}>Fall Recruiting</Header>
          <p>
            We've got a great lineup of events ready to welcome you (back) to
            Berkeley. Come to an infosession to find out what we're all about,
            then decide which project team you want to help out with at Project
            Expo. We believe that everyone can find a place to contribute in
            PiE, regardless of year or major, so don't hesitate to come out!
            You'll also be able to find us tabling at{" "}
            <a
              href="https://lead.berkeley.edu/calapalooza/"
              target="_blank"
              rel="noreferrer"
            >
              Calapalooza
            </a>{" "}
            online.
          </p>
          <p>
            <a
              href="https://calendar.google.com/calendar/u/0/embed?src=pioneers.berkeley.edu_4vdtnqvtt5hlcnc54n7i52en88@group.calendar.google.com&ctz=America/Los_Angeles"
              target="_blank"
              rel="noreferrer"
            >
              Add our Google calendar
            </a>{" "}
            (plus sign on the bottom right)
          </p>
        </Container>
      </CustomizedContainer>

      <CustomizedContainer>
        <div id="timeline" />
        <Container fluid>
          <h4 style={{ marginBottom: "1.5em", color: theme.colors.grey400 }}>
            THE TIMELINE
          </h4>
          <Header type={"gold-header"}>Our Events</Header>
          <TimelineOne timelineFor={events} />
        </Container>
      </CustomizedContainer>

      <CustomizedContainer color={theme.colors.white}>
        <OptionsBoxesWrapper
          fluid
          align="center"
          headerColor={theme.colors.grey300}
          padding="2rem 1.25rem"
        >
          <Row className="inner-container">
            <Col sm={12} md={6} lg={6}>
              <div className="card">
                <div>
                  <BiGroup />
                  <h3>Team</h3>
                  <p>
                    Interested in participating in PiE's mission by becoming a
                    mentor and role model for a team of high school students?
                    PiE RC DeCal, offered every spring, offers just that!
                  </p>
                  <div>
                    <AlternativeButton color="gold" link="/getInvolved/forms">
                      Join Us
                    </AlternativeButton>
                    <AlternativeButton
                      color="gold"
                      link="/getInvolved/projects"
                    >
                      Projects
                    </AlternativeButton>
                  </div>
                </div>
              </div>
            </Col>
            <Col sm={12} md={6} lg={6}>
              <div
                className="card"
                style={{ backgroundColor: theme.colors.darkblue400 }}
              >
                <div>
                  <FaHandsHelping />
                  <div id="decal" />
                  <h3>Decal</h3>
                  <p>
                    Join our team and be part of providing STEM education to the
                    Bay Area
                  </p>
                  <AlternativeButton link="/getInvolved/decal">
                    Learn More
                  </AlternativeButton>
                </div>
              </div>
            </Col>
          </Row>
        </OptionsBoxesWrapper>
      </CustomizedContainer>

      <CustomizedContainer color="#f4f4f5">
        <VolunteerWrapper fluid>
          <Row>
            <Col sm={12} md={12} lg={12}>
              <h3>Volunteer</h3>
              <p>
                We are looking for professors and industry professionals to
                volunteer at our events. You can help us by being a judge at our
                Design Reviews and/or Final Competition.
              </p>
              <p>
                Please contact us at{" "}
                <a
                  href="mailto:presentationerships@pioneers.berkeley.edu"
                  target="_blank"
                  rel="noreferrer"
                >
                  presentationerships@pioneers.berkeley.edu
                </a>
              </p>
            </Col>
            <Col sm={12} md={6} lg={6}>
              <div>
                <p>
                  We require each high school team to give a presentation to a
                  panel of professors and industry professionals during the
                  first few weeks of the competition season. The purpose of the
                  reviews is to encourage high school students to present their
                  ideas and to receive feedback on their design.
                </p>
              </div>
            </Col>
            <Col sm={12} md={6} lg={6}>
              <div>
                <p>
                  At Final Competition, teams can earn awards for superior
                  mechanical, electrical, and software robot design. We invite
                  professors and industry professionals to judge these designs
                  and decide on an award winner in each category.
                </p>
              </div>
            </Col>
          </Row>
        </VolunteerWrapper>
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

const VolunteerWrapper = styled(Container)`
  padding: 1rem;
`

const OptionsBoxesWrapper = styled(BoxesWrapper)``

export default GetInvolved
