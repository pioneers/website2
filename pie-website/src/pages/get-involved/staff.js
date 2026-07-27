import React, { useState } from "react"
import { Flipper, Flipped } from "react-flip-toolkit"
// import "./styles.css"
import theme from "../../assets/themes/theme"
import styled, { css, keyframes } from "styled-components"

import { TimelineOne } from "../../components/Timelines"

import Layout from "../../components/Layout"
import Header from "../../components/Header"
import HelmetWrapper from "../../components/HelmetWrapper"
import CustomizedContainer from "../../components/CustomizedContainer"
import pic from "../../assets/images/stock-images/pie-staff.jpg"

import { BsPencil } from "@react-icons/all-files/bs/BsPencil"
import { AiOutlineMail } from "@react-icons/all-files/ai/AiOutlineMail"

import { useStaticQuery, graphql } from "gatsby"

import { renderRichText } from "gatsby-source-contentful/rich-text"

import Row from "react-bootstrap/esm/Row"
import Col from "react-bootstrap/esm/Col"
import Container from "react-bootstrap/esm/Container"
import Table from "react-bootstrap/Table"

const query = graphql`
  {
    allContentfulProjects {
      nodes {
        description {
          raw
        }
        name
        pMs
        program
      }
    }
    allContentfulRecruitingTimeline(
      sort: { internalTime: ASC }
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

const Square = ({ toggleFullScreen, name, program }) => {
  let prog = ""
  if (program.includes("Electrical")) {
    prog = "Electrical"
  } else if (program.includes("Software")) {
    prog = "Software"
  } else if (program.includes("Mechanical")) {
    prog = "Mechanical"
  } else if (program.includes("Programs")) {
    prog = "Programs"
  } else {
    prog = "Operations & Outreach"
  }
  return (
    <Flipped flipId="square">
      <SquareStyles
        className="square"
        onClick={toggleFullScreen}
        program={program}
      >
        <h3>{name}</h3>
        <h4>{prog}</h4>
      </SquareStyles>
    </Flipped>
  )
}

const FullScreenSquare = ({ toggleFullScreen, text, name, pMs, program }) => {
  let prog = ""
  if (program.includes("Electrical")) {
    prog = "Electrical"
  } else if (program.includes("Software")) {
    prog = "Software"
  } else if (program.includes("Mechanical")) {
    prog = "Mechanical"
  } else if (program.includes("Programs")) {
    prog = "Programs"
  } else {
    prog = "Operations & Outreach"
  }
  return (
    <Flipped flipId="square">
      <FullScreenSquareStyles
        text={text}
        name={name}
        pMs={pMs}
        program={program}
        onClick={toggleFullScreen}
      >
        <div>
          <div>
            <h5>Click anywhere to minimize</h5>
            <h1>{name}</h1>
            <h3>{prog}</h3>
          </div>
          {pMs && (
            <div>
              PM{pMs.length > 1 && <span>s</span>}:{" "}
              {pMs.map((pm, idx) => {
                return (
                  <span>
                    {idx === 1 && <span>, </span>}
                    {pm}
                  </span>
                )
              })}
            </div>
          )}

          <p>{text}</p>
        </div>
      </FullScreenSquareStyles>
    </Flipped>
  )
}

const AnimatedSquare = ({ text, name, pMs, program }) => {
  const [fullScreen, setFullScreen] = useState(false)
  const toggleFullScreen = () => {
    document.body.style.overflow =
      document.body.style.overflow === "hidden" ? "auto" : "hidden"
    setFullScreen(prevState => !prevState)
  }

  return (
    <Flipper flipKey={fullScreen}>
      {fullScreen ? (
        <FullScreenSquare
          toggleFullScreen={toggleFullScreen}
          text={text}
          name={name}
          pMs={pMs}
          program={program}
        />
      ) : (
        <Square
          toggleFullScreen={toggleFullScreen}
          name={name}
          program={program}
        />
      )}
    </Flipper>
  )
}

const Projects = () => {
  const data = useStaticQuery(query)
  const projects = data.allContentfulProjects.nodes
  return (
    <Container fluid>
      <CustomizedContainer>
        <Container fluid>
          <h2>Click on any box for more details!</h2>
        </Container>
        <ListOfProjects>
          {projects.map(project => {
            const { description, name, pMs, program } = project
            const text = renderRichText(description)
            return (
              <Col xs={12} sm={6} md={3}>
                <AnimatedSquare
                  text={text}
                  name={name}
                  pMs={pMs}
                  program={program}
                />
              </Col>
            )
          })}
        </ListOfProjects>
      </CustomizedContainer>
    </Container>
  )
}

const Forms = () => {
  return (
    <Container fluid>
        <CustomizedContainer fluid>
        <Wrapper fluid>
          <Row style={{ color: theme.colors.grey900 }}>
            <Col sm={12} md={6}>
              <div
                aria-hidden="true"
                className="card card-hover"
                onClick={function () {
                  window.open(
                    "https://www.cognitoforms.com/PioneersInEngineering/NewStaffRegistration",
                    "mywindow"
                  )
                }}
              >
                <BsPencil />
                <h3>1. Fill out forms</h3>
              </div>
            </Col>
            <Col sm={12} md={6}>
              <div
                aria-hidden="true"
                className="card card-hover"
                onClick={function () {
                  window.open(
                    "mailto:recruiting@pierobotics.org?subject=Filled out forms&body=Hey, just completed my forms. They are ready to be processed!",
                    "mywindow"
                  )
                }}
              >
                <AiOutlineMail />
                <h3>2. Email us that you've completed the forms</h3>
              </div>
            </Col>
          </Row>
        </Wrapper>
      </CustomizedContainer>

      <CustomizedContainer color={theme.colors.white}>
        <Container fluid>
          <Header type={"blue-header"}>Our Worksessions</Header>
          <p>
            After filling out our forms and emailing us, the next thing to do is
            attend our worksessions.
          </p>
        </Container>
        <Container fluid>
          <Table responsive="lg" hover>
            <thead>
              <tr>
                <th style={{ lineHeight: "1rem" }}>Worksession Time</th>
                <th>Location</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Wednesday 7 - 9 PM </td>
                <td>
                  101 O'Brien (for announcements) and then 101 O'Brien
                </td>
              </tr>
              <tr>
                <td>Saturday 1 - 3 PM </td>
                <td>
                  {" "}
                  101 O'Brien
                </td>
              </tr>
            </tbody>
          </Table>
        </Container>
        <br />
      </CustomizedContainer>
    </Container>
  )
}

const Staff = () => {
    const data = useStaticQuery(query)
    const events = data.allContentfulRecruitingTimeline.nodes
    return(
    <Layout>
      <HelmetWrapper
        title="Club Staff"
        description="Want to help out? Here at PiE, we don't have an application process. Rather, we firmly believe that any UC Berkeley student who is interested in our club has something to offer, whether community-wise, project-wise, or anything else that we can't think of ourselves! Simply fill out the forms or come check out worksession and we'll get you started!"
      />
      <HeroWrapper>
        <div className="filler"></div>
        <div className="hero-image">
          <div>
            <h1>Club Staff</h1>
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
            We've got a great lineup of events ready to welcome you to
            Berkeley. Come to an infosession to find out what we're all about,
            then decide which{" "}
            <a href="/getInvolved/Projects">project team</a> you want to
            help out with at Project Expo. We believe that everyone can find a
            place to contribute in PiE, regardless of year or major, so don't
            hesitate to come out! You'll also be able to find us tabling at{" "}
            <a
              href="https://lead.berkeley.edu/calapalooza/"
              target="_blank"
              rel="noreferrer"
            >
              Calapalooza
            </a>.
          </p>
          <p>
            If you're interested in joining, fill out our interest form{" "}
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSd1tHle9P-RwM608u0iMOOXlPt26cCSCqKKQaa5ND8WjL0aWQ/viewform"
              target="_blank"
              rel="noreferrer"
            >
              here
            </a>
            ! We'll send information at a later time about welcome events in the fall and how to join.
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

            <Forms />
            <Projects />
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

const ListOfProjects = styled(Row)`
  & > div {
    padding: 0.5rem;
  }
  padding: 1rem;
`

const SquareStyles = styled.div`
  color: ${theme.colors.white};
  width: 100%;
  height: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  cursor: pointer;
  background-color: ${theme.colors.grey100};
  border-radius: ${theme.borderRadius};
  box-shadow: ${theme.shadows.shadow1};
  padding: 1rem;
  /* transition: ${theme.transition}; */

  ${({ program }) =>
    program.includes("Software") &&
    css`
      background-color: ${theme.colors.blue400};
    `}
  ${({ program }) =>
    program.includes("Mechanical") &&
    css`
      background-color: ${theme.colors.darkblue400};
    `}
  ${({ program }) =>
    program.includes("Electrical") &&
    css`
      background-color: ${theme.colors.gold400};
    `}
  ${({ program }) =>
    program.includes("Programs") &&
    css`
      background-color: ${theme.colors.red400};
    `}
    ${({ program }) =>
    program.includes("Outreach") &&
    css`
      background-color: ${theme.colors.green400};
    `}

  &:hover {
    box-shadow: ${theme.shadows.shadow4};

    /* background-color: ${theme.colors.grey200}; */
  }
`

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
  }
`

const fadeUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
  }
`

const FullScreenSquareStyles = styled.div`
  z-index: 10;
  color: ${theme.colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
  padding: 1rem;
  ${({ program }) =>
    program.includes("Software") &&
    css`
      background-color: ${theme.colors.blue600};
    `}
  ${({ program }) =>
    program.includes("Mechanical") &&
    css`
      background-color: ${theme.colors.darkblue600};
    `}
  ${({ program }) =>
    program.includes("Electrical") &&
    css`
      background-color: ${theme.colors.gold600};
    `}
  ${({ program }) =>
    program.includes("Programs") &&
    css`
      background-color: ${theme.colors.red600};
    `}
    ${({ program }) =>
    program.includes("Outreach") &&
    css`
      background-color: ${theme.colors.green600};
    `}

  p {
    font-size: 16px;
    color: white;
  }

  h1 {
    animation: ${fadeIn} 1s forwards;
  }
  h3 {
    animation: ${fadeIn} 0.8s forwards;
    animation-delay: 0.1s;
  }
  h5 {
    font-size: 0.75rem;
  }
  & > div > div {
    animation: ${fadeIn} 0.8s forwards;
    animation-delay: 0.1s;
  }
  p {
    animation: ${fadeUp} 0.8s forwards;
  }

  @media screen and (max-width: 580px) {
    h1 {
      font-size: 1.5rem;
    }
    h3 {
      font-size: 1.25rem;
    }
    p {
      font-size: 14px;
      margin-bottom: 0.5rem;
    }
  }
`

const Wrapper = styled(Container)`
  & > div > div {
    padding: 1rem;
  }
  & > div > div > div {
    cursor: pointer;
    cursor: pointer;
    background-color: #e4e4e7;
    padding: 3rem;
    border-radius: 0.25rem;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
      0 10px 10px -5px rgba(0, 0, 0, 0.04);

    width: 100%;
    height: 100%;
  }

  svg {
    font-size: 7rem;
    margin-bottom: 1rem;
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

export default Staff
