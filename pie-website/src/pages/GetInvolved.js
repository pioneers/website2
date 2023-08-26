import React from "react"

import Header from "../components/Header"
import { TimelineOne } from "../components/Timelines"
import { FaHandsHelping } from "@react-icons/all-files/fa/FaHandsHelping"
import { BiGroup } from "@react-icons/all-files/bi/BiGroup"

import Layout from "../components/Layout"

import styled from "styled-components"
import CustomizedContainer from "../components/CustomizedContainer"
import AlternativeButton from "../components/AlternativeButton"
import HelmetWrapper from "../components/HelmetWrapper"
import { BoxesWrapper } from "../assets/themes/boxes"

import { useStaticQuery, graphql } from "gatsby"

import theme from "../assets/themes/theme"
import Row from "react-bootstrap/esm/Row"
import Col from "react-bootstrap/esm/Col"
import Container from "react-bootstrap/esm/Container"

import pic from "../assets/images/stock-images/pie-staff.jpg"

import { AnchorLink as Link } from "gatsby-plugin-anchor-links"

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
      <HelmetWrapper
        title="Get Involved"
        description="Want to help out? Here at PiE, we don't have an application process. Rather, we firmly believe that any UC Berkeley student who is interested in our club has something to offer, whether community-wise, project-wise, or anything else that we can't think of ourselves! Simply fill out the forms or come check out worksession and we'll get you started!"
      />
      <HeroWrapper>
        <div className="filler"></div>
        <div className="hero-image">
          <div>
            <h1>Get Involved</h1>
          </div>
        </div>
      </HeroWrapper>

      <CustomizedContainer color={theme.colors.white}>
        <div id="recruiting" />
        <HeaderContainer fluid>
          <h4 style={{ marginBottom: "1.5em", color: theme.colors.grey400 }}>
            JOIN US
          </h4>
          <Header type={"blue-header"}>Fall Recruiting</Header>
          <p>
            We've got a great lineup of events ready to welcome you (back) to
            Berkeley. Come to an infosession to find out what we're all about,
            then decide which{" "}
            <Link to="/getInvolved/Projects">project team</Link> you want to
            help out with at Project Expo. We believe that everyone can find a
            place to contribute in PiE, regardless of year or major, so don't
            hesitate to come out! You'll also be able to find us tabling at{" "}
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
        </HeaderContainer>
      </CustomizedContainer>

      <CustomizedContainer>
        <div id="timeline" />
        <Container fluid>
          <h4 style={{ marginBottom: "1.5em", color: theme.colors.grey400 }}>
            THE TIMELINE
          </h4>
          <Header type={"gold-header"}>Our Events</Header>
        </Container>
        <TimelineOne timelineFor={events} />
      </CustomizedContainer>

      <CustomizedContainer color={theme.colors.white}>
        <OptionsBoxesWrapper
          fluid
          padding="3rem"
          backgroundColor={theme.colors.grey200}
          headerColor={theme.colors.grey900}
          textColor={theme.colors.grey700}
          iconColor={theme.colors.grey900}
          display="block"
        >
          <Row className="inner-container">
            <Col sm={12} md={6} lg={6}>
              <div className="card">
                <div>
                  <BiGroup />
                  <h3>Team</h3>
                  <p>
                    Join our team and be part of providing STEM education to the
                    Bay Area
                  </p>
                  <div>
                    <AlternativeButton color="gold" link="/getInvolved/Forms">
                      Join Us &rsaquo;
                    </AlternativeButton>
                    <AlternativeButton
                      color="gold"
                      link="/getInvolved/Projects"
                    >
                      Projects &rsaquo;
                    </AlternativeButton>
                  </div>
                </div>
              </div>
            </Col>
            <Col sm={12} md={6} lg={6}>
              <div className="card">
                <div>
                  <FaHandsHelping />
                  <div id="decal" />
                  <h3>Decal</h3>
                  <p>
                    Interested in participating in PiE's mission by becoming a
                    mentor and role model for a team of high school students?
                    PiE RC DeCal, offered every spring, offers just that!
                  </p>

                  <AlternativeButton link="/getInvolved/Decal">
                    Learn More &rsaquo;
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
              <div id="volunteer"></div>
              <h3>Volunteer</h3>
              <p>
                We are looking for professors and industry professionals to
                volunteer at our events. You can help us by being a judge at our
                Design Reviews and/or Final Competition.
              </p>
              <p>
                Please contact us at{" "}
                <a
                  href="mailto:leadership@pioneers.berkeley.edu"
                  target="_blank"
                  rel="noreferrer"
                >
                  leadership@pioneers.berkeley.edu
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

const VolunteerWrapper = styled(Container)`
  padding: 1rem;

  p > a {
    font-weight: 600;
    color: ${theme.colors.blue500};
  }

  p > a:hover {
    color: ${theme.colors.black};
  }
`

const HeaderContainer = styled(Container)`
  p > a {
    font-weight: 600;
    color: ${theme.colors.blue500};
  }

  p > a:hover {
    color: ${theme.colors.black};
  }
`

const OptionsBoxesWrapper = styled(BoxesWrapper)``

export default GetInvolved
