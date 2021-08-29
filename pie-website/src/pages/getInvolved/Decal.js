import React from "react"
import Layout from "../../components/Layout"
import HelmetWrapper from "../../components/HelmetWrapper"

import styled from "styled-components"
import CustomizedContainer from "../../components/CustomizedContainer"
import Header from "../../components/Header"
import Carousel from "react-bootstrap/Carousel"

import theme from "../../assets/themes/theme"

import { useStaticQuery, graphql } from "gatsby"

import { BLOCKS } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"
// import { TimelineOne } from "../../components/Timelines"
import Row from "react-bootstrap/esm/Row"
import Col from "react-bootstrap/esm/Col"
import Container from "react-bootstrap/esm/Container"

import pic from "../../assets/images/stock-images/mentor.jpg"

const query = graphql`
  {
    allContentfulTestimonials {
      nodes {
        major
        name
        quote {
          raw
        }
        year
      }
    }
    allContentfulDecalTimeline(sort: { fields: internalTime, order: ASC }) {
      nodes {
        content {
          raw
        }
        event
        time
        link
        internalTime
      }
    }
  }
`

const Decal = () => {
  const data = useStaticQuery(query)
  const testimonials = data.allContentfulTestimonials.nodes
  // const events = data.allContentfulDecalTimeline.nodes

  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: item => {
        const text = item.content[0].value
        return <Paragraph>{text.trim()}</Paragraph>
      },
    },
  }

  return (
    <Layout>
      <HelmetWrapper
        title="Decal"
        description="Become a mentor for a high school robotics team. Be a role model for local students as you guide them in building a robot for PiE’s Robotics Competition. Through our class, you’ll learn what you need to know to be a mentor and help build the robot."
      />
      <HeroWrapper>
        <div className="placeholder"></div>
        <div className="hero-image">
          <div>
            <h1>Decal</h1>
          </div>
        </div>
      </HeroWrapper>
      <CustomizedContainer>
        <Container fluid>
          <h4 style={{ marginBottom: "1.5em", color: theme.colors.grey400 }}>
            MENTOR
          </h4>
          <Header type="blue">Inspire High School Students</Header>
          <p>
            Become a mentor for a high school robotics team. Be a role model for
            local students as you guide them in building a robot for PiE’s
            Robotics Competition. Through our class, you’ll learn what you need
            to know to be a mentor and help build the robot.
          </p>
        </Container>
      </CustomizedContainer>
      <CustomizedContainer color={theme.colors.white}>
        <Container fluid>
          <h4 style={{ marginBottom: "1.5em", color: theme.colors.grey400 }}>
            THE TIMELINE
          </h4>
          <Header type="yellow">List of Events</Header>
          <h1>Events to Come</h1>
          {/* <TimelineOne timelineFor={events} /> */}
        </Container>
      </CustomizedContainer>
      <CustomizedContainer>
        <Container fluid>
          <div>
            <div id="details"></div>
            <h4 style={{ marginBottom: "1.5em", color: theme.colors.grey400 }}>
              DETAILS
            </h4>
            <Header type="blue">What You Will Learn</Header>
          </div>
          <SkillsUsed fluid>
            <Row>
              <Col xs={12} sm={6} md={3} lg={3}>
                <div>
                  <h3>Guide</h3>
                  <p>
                    How to guide high school students in the robotics
                    competition
                  </p>
                </div>
              </Col>
              <Col xs={12} sm={6} md={3} lg={3}>
                <div>
                  <h3>Robotics</h3>
                  <p>How to work with the robotics kit</p>
                </div>
              </Col>
              <Col xs={12} sm={6} md={3} lg={3}>
                <div>
                  <h3>Analyze</h3>
                  <p>How to analyze and breakdown the competition</p>
                </div>
              </Col>
              <Col xs={12} sm={6} md={3} lg={3}>
                <div>
                  <h3>Inspire</h3>
                  <p>How to inspire high school students through STEM</p>
                </div>
              </Col>
            </Row>
          </SkillsUsed>

          <DetailsWrapper fluid>
            <Row>
              <Col sm={12} md={12} lg={5}>
                <br />
                <div>
                  <p>
                    <ul>
                      <li>Enroll in our DeCal class for 2 units, P/NP.</li>
                      <li>
                        Choose to attend section on either (not both):{" "}
                        <ul>
                          <li>Wednesday 7 PM - 9</li>
                          <li>Saturday 1 PM - 3</li>
                        </ul>
                      </li>
                      <li>
                        Meet with your team for two hours each week during our
                        9-week competition.
                      </li>
                      <li>
                        Come to PiE Robotics Competition events at UC Berkeley
                        on select weekend season events.
                      </li>
                      <li>
                        Help students at worksessions at O'Brien Hall Breezeway
                        (2nd floor).
                      </li>
                      <li>Check out our syllabus.</li>
                      <li>
                        Grab the CCN by coming to an infosession or attending
                        the first day of class.
                      </li>
                    </ul>
                  </p>
                </div>
              </Col>
              <Col sm={12} md={12} lg={7}>
                <br />
                <div>
                  <iframe
                    src="https://www.youtube.com/embed/IQ-xtgo2VG4"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                    className="video"
                  ></iframe>
                </div>
              </Col>
            </Row>
          </DetailsWrapper>
        </Container>
      </CustomizedContainer>
      <CustomizedContainer color={theme.colors.blue50}>
        <Container fluid>
          <CustomCarousel variant="dark">
            {testimonials.map(item => {
              const { quote, name, year, major } = item
              const output = renderRichText(quote, options)
              return (
                <Carousel.Item>
                  <div className="testimonial">
                    <h3>{output}</h3>
                    <p>
                      - {name}, {year}, {major}
                    </p>
                  </div>
                </Carousel.Item>
              )
            })}
          </CustomCarousel>
        </Container>
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

const CustomCarousel = styled(Carousel)`
  .testimonial {
    padding: 10rem;
    text-align: center;
  }

  p {
    line-height: 1rem;
  }

  @media screen and (max-width: 860px) {
    .testimonial {
      padding: 5rem;
    }

    h3 {
      font-size: 1.05rem;
    }
  }
`

const Paragraph = styled.div`
  p {
    color: ${theme.colors.grey900};
  }
`

const DetailsWrapper = styled(Container)`
  .video {
    width: 100%;
    aspect-ratio: 16 / 9;
    border-radius: ${theme.borderRadius};
  }

  li {
    list-style-type: disc;
  }
  ul {
    margin-left: 1rem;
  }
`

const SkillsUsed = styled(Container)`
  h3 {
    border-left: 1px ${theme.colors.blue600} solid;
    line-height: 1.2rem;
    padding-left: 0.75rem;
    color: ${theme.colors.gold600};
  }

  p {
    padding-left: 0.75rem;
  }

  .row > div {
    margin: 1 0 0 0;
  }

  @media screen and (max-width: 575px) {
    h3 {
      font-size: 2rem;
      line-height: 2rem;
    }

    p {
      font-size: 1.5rem;
    }
  }
`

export default Decal
