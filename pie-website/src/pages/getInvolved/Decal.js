import React from "react"
import Layout from "../../components/Layout"
import SEO from "../../components/Seo"

import styled from "styled-components"
import CustomizedContainer from "../../components/CustomizedContainer"
import Header from "../../components/Header"
import Carousel from "react-bootstrap/Carousel"

import theme from "../../assets/themes/theme"

import { BoxesWrapper } from "../../assets/themes/boxes"
import { useStaticQuery, graphql } from "gatsby"

import { BLOCKS } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { TimelineOne } from "../../components/Timelines"
import Row from "react-bootstrap/esm/Row"
import Col from "react-bootstrap/esm/Col"
import Container from "react-bootstrap/esm/Container"

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
  const events = data.allContentfulDecalTimeline.nodes

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
      <SEO
        title="Decal"
        description="Become a mentor for a high school robotics team. Be a role model for local students as you guide them in building a robot for PiE’s Robotics Competition. Through our class, you’ll learn what you need to know to be a mentor and help build the robot."
      />
      <HeroWrapper>
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
          <TimelineOne timelineFor={events} />
        </Container>
      </CustomizedContainer>
      <CustomizedContainer>
        <Container fluid>
          <div>
            <h4 style={{ marginBottom: "1.5em", color: theme.colors.grey400 }}>
              DETAILS
            </h4>
            <Header type="blue">What You Will Learn</Header>
          </div>
          <SkillsWrapper fluid padding="2rem 1.25rem">
            <Row className="inner-container">
              <Col sm={12} md={6} lg={3}>
                <div
                  className="card"
                  style={{ backgroundColor: theme.colors.darkblue400 }}
                >
                  <div>
                    <h3>Guide</h3>
                    <p>
                      How to guide high school students in the robotics
                      competition
                    </p>
                  </div>
                </div>
              </Col>
              <Col sm={12} md={6} lg={3}>
                <div className="card">
                  <div>
                    <h3>Robotics</h3>
                    <p>How to work with the robotics kit</p>
                  </div>
                </div>
              </Col>
              <Col sm={12} md={6} lg={3}>
                <div
                  className="card"
                  style={{ backgroundColor: theme.colors.orange500 }}
                >
                  <div>
                    <h3>Analyze</h3>
                    <p>How to analyze and breakdown the competition</p>
                  </div>
                </div>
              </Col>
              <Col sm={12} md={6} lg={3}>
                <div
                  className="card"
                  style={{ backgroundColor: theme.colors.green500 }}
                >
                  <div>
                    <h3>Inspire</h3>
                    <p>How to inspire high school students through STEM</p>
                  </div>
                </div>
              </Col>
            </Row>
          </SkillsWrapper>
          <DetailsWrapper fluid>
            <Row>
              <Col sm={12} md={12} lg={4}>
                <br />
                <div>
                  <ul>
                    <li>Enroll in our DeCal class for 2 units, P/NP.</li>
                    <li>
                      Choose to attend section on either (not both):{" "}
                      <ul>
                        <li>Monday 6 PM - 8, 210 Jacobs Hall</li>
                        <li>Thursday 6 PM - 8, 145 McCone Hall</li>
                      </ul>
                    </li>
                    <li>
                      Meet with your team for two hours each week during our
                      9-week competition.
                    </li>
                    <li>
                      Come to PiE Robotics Competition events at UC Berkeley on
                      select weekend season events.
                    </li>
                    <li>
                      Help students at worksessions at O'Brien Hall Breezeway
                      (2nd floor).
                    </li>
                    <li>Check out our syllabus.</li>
                    <li>
                      Grab the CCN by coming to an infosession or attending the
                      first day of class.
                    </li>
                  </ul>
                </div>
              </Col>
              <Col sm={12} md={12} lg={8}>
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

const SkillsWrapper = styled(BoxesWrapper)`
  h3 {
    color: ${theme.colors.grey300} !important;
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
`

export default Decal
