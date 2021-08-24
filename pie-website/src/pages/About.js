import React from "react"

import Container from "react-bootstrap/Container"

import Header from "../components/Header"

import { FaHandsHelping } from "@react-icons/all-files/fa/FaHandsHelping"
import { RiMoneyDollarCircleLine } from "@react-icons/all-files/ri/RiMoneyDollarCircleLine"
import { BiGroup } from "@react-icons/all-files/bi/BiGroup"

import Layout from "../components/Layout"

import styled from "styled-components"
import SEO from "../components/SEO"

import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import { BoxesWrapper } from "../assets/themes/boxes"

import Col from "react-bootstrap/esm/Col"
import Row from "react-bootstrap/esm/Row"

import theme from "../assets/themes/theme"
import CustomizedContainer from "../components/CustomizedContainer"

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
  // console.log(advisors)

  return (
    <Layout>
      <SEO
        title="About"
        description="Pioneers in Engineering (PiE) promotes science, technology, engineering, and mathematics (STEM) education through an exciting, mentorship-based process. PiE is a student outreach organization based in UC Berkeley and was founded in 2008 by members of Tau Beta Pi led by Xiao-Yu Fu. We strongly believe that no student should be denied a quality STEM education experience."
      />
      <HeroWrapper>
        <div className="hero-image">
          <div>
            <h1>About</h1>
          </div>
        </div>
      </HeroWrapper>
      <CustomizedContainer>
        {advisors.map(person => {
          return (
            <div>
              <GatsbyImage image={person.image.gatsbyImageData}></GatsbyImage>
              {person.name}
              {person.position}
            </div>
          )
        })}
      </CustomizedContainer>
      <CustomizedContainer>
        {alumni.map(person => {
          return (
            <div>
              <GatsbyImage image={person.image.gatsbyImageData}></GatsbyImage>
              {person.name}
              {person.positionInClub !== "N/A"
                ? person.whereAreTheyWorking !== null
                  ? person.positionInClub + " | " + person.whereAreTheyWorking
                  : person.positionInClub
                : person.whereAreTheyWorking}
            </div>
          )
        })}
      </CustomizedContainer>

      <CustomizedContainer>
        <div id="mission" />
        <Container fluid>
          <h4 style={{ marginBottom: "1.5em", color: theme.colors.grey400 }}>
            ABOUT US
          </h4>
          <Header type={"blue-header"}>Mission</Header>
          <p>
            The Pioneers in Engineering Foundation is an independent, tax-exempt
            501(c)(3) non-profit organization. Its mission is to promote STEM
            education through an exciting, mentor-based process.
          </p>
        </Container>

        <Container fluid>
          <h3 style={{ color: theme.colors.grey900 }}>Why This Works</h3>
          <AboutBoxesWrapper
            fluid
            align="center"
            headerColor={theme.colors.grey300}
            iconSize="4rem"
            textColor={theme.colors.white}
          >
            <Row className="inner-container">
              <Col sm={12} md={4} lg={4}>
                <div className="card">
                  <div>
                    <FaHandsHelping />
                    <h3>Mentors</h3>
                    <p>
                      Decal of dedicated mentors who are ready and willing to
                      help the students
                    </p>
                  </div>
                </div>
              </Col>
              <Col sm={12} md={4} lg={4}>
                <div className="card">
                  <div>
                    <RiMoneyDollarCircleLine />
                    <h3>Low Cost</h3>
                    <p>
                      Something in here about how it is very inexpensive
                      compared to other robotics competitinos
                    </p>
                  </div>
                </div>
              </Col>
              <Col sm={12} md={4} lg={4}>
                <div className="card">
                  <div>
                    <BiGroup />
                    <h3>Club Members</h3>
                    <p>
                      A group of talented students who make everything happen
                      from the game design to the software to the robot kits
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </AboutBoxesWrapper>
        </Container>
      </CustomizedContainer>
      <div id="staff" />
      <CustomizedContainer>
        <Container fluid>
          <Header type={"blue-header"}>Overlords</Header>
          <Header type={"gold-header"}>Project Managers</Header>
          <Header type={"blue-header"}>All Staff and Bios</Header>
        </Container>
      </CustomizedContainer>
      <CustomizedContainer>
        <div id="foundation" />
        <Container fluid>
          <Header type={"gold-header"}>PiE Foundation</Header>
        </Container>
        <PieFoundation data={data} />
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

const AboutBoxesWrapper = styled(BoxesWrapper)`
  @media screen and (max-width: 992px) {
    .inner-container > div > svg {
      display: none;
    }
  }
`

export default About
