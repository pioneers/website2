import React, { useState } from "react"
import { Flipper, Flipped } from "react-flip-toolkit"
// import "./styles.css"
import theme from "../../assets/themes/theme"
import styled, { css, keyframes } from "styled-components"

import Layout from "../../components/Layout"
import HelmetWrapper from "../../components/HelmetWrapper"
import CustomizedContainer from "../../components/CustomizedContainer"
import pic from "../../assets/images/stock-images/pie-staff.jpg"

import { useStaticQuery, graphql } from "gatsby"

import { renderRichText } from "gatsby-source-contentful/rich-text"

import Row from "react-bootstrap/esm/Row"
import Col from "react-bootstrap/esm/Col"
import Container from "react-bootstrap/esm/Container"

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
  }
`

const Square = ({ toggleFullScreen, name, program }) => {
  console.log(name, program)
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
    <Layout>
      <HelmetWrapper
        title="Projects"
        description="Here is a list of the various projects in Pioneers in Engineering"
      />
      <HeroWrapper>
        <div className="placeholder"></div>
        <div className="hero-image">
          <div>
            <h1>Projects</h1>
          </div>
        </div>
      </HeroWrapper>
      <CustomizedContainer>
        <Container fluid>
          <h2>Click on any box for more details!</h2>
        </Container>
        <ListOfProjects>
          {projects.map(project => {
            const { description, name, pMs, program } = project
            const text = renderRichText(description)
            // console.log(text)
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

export default Projects
