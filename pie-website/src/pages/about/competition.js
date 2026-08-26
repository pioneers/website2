// scope css locally
import React from "react"
import Layout from "../../components/Layout"

import Header from "../../components/Header"

import styled from "styled-components"
import { BoxesWrapper } from "../../assets/themes/boxes"

import { FaRegHandPaper } from "@react-icons/all-files/fa/FaRegHandPaper"
import { AiOutlineTeam } from "@react-icons/all-files/ai/AiOutlineTeam"
import { BsBuilding } from "@react-icons/all-files/bs/BsBuilding"

import CustomizedContainer from "../../components/CustomizedContainer"
import HelmetWrapper from "../../components/HelmetWrapper"
import theme from "../../assets/themes/theme"
import Row from "react-bootstrap/esm/Row"
import Col from "react-bootstrap/esm/Col"
import Container from "react-bootstrap/esm/Container"

import pic from "../../assets/images/homepage-banners/explaining.jpg"
import mapimg from "../../assets/images/about-us/schoolmap.png"


const Competition = () => {
 

  return (
    <Layout>
      <HelmetWrapper title="Competition" />
      <HeroWrapper>
        <div className="filler"></div>
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
                    <h4>We provide mentorship and a responsive Discord</h4>
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

      <CustomizedContainer color={theme.colors.grey100}>
        <Container fluid>
          <h4 style={{ marginBottom: "1.5em", color: theme.colors.grey400 }}>
            WHO WE ARE
          </h4>
          <h2 style={{ maxWidth: "700px", marginBottom: "1rem" }}>
            Promoting STEM education to the Bay Area because we strongly believe
            that no student should be denied a quality educational experience
          </h2>
          <br />
        </Container>

        <WhoWeServe fluid>
          <Row>
            <Col xs={12} sm={4} md={4} lg={4}>
              <div>
                <h3>350+</h3>
                <p>Berkeley students have contributed to our competition </p>
              </div>
            </Col>
            <Col xs={12} sm={4} md={4} lg={4}>
              <div>
                <h3>700+</h3>
                <p>high school competitors over the years</p>
              </div>
            </Col>
            <Col xs={12} sm={4} md={4} lg={4}>
              <div>
                <h3>30+</h3>
                <p>
                  Bay Area schools that have participated in our competition
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
                <div>
                    <h4>
                        Linking the Bay Area through our competition at the University of California, Berkeley.
                    </h4>
                    <p>
                        Schools in the Bay Area can participate in our competition to ensure that a growing group
                        of students with an interest in robotics are not prevented from enriching their experience
                        by lessening barriers to participation.
                    </p>
                </div>
            </Col>
            <Col>
                <div>
                    <img src={mapimg} fluid alt="School Map" />
                </div>
            </Col>
          </Row>
        </WhoWeServe>
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
    z-index: -1;
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
    padding: 1rem;
    h1 {
      font-size: 5rem;
      container-name: "hero-title";
    }
    @media (max-width: 500px) {
      h1 {
        font-size: 3em;
      }
    }
  }
`

const JoinUsHeader = styled(Container)`
  p > a {
    font-weight: 600;
    color: ${theme.colors.blue500};
  }

  p > a:hover {
    color: ${theme.colors.black};
  }
`

const Students = styled(Container)`
  h2 {
    margin-bottom: 2rem;
  }
  p {
    margin-bottom: 1.5rem;
  }

  p > a {
    font-weight: 600;
    color: ${theme.colors.blue500};
  }

  p > a:hover {
    color: ${theme.colors.black};
  }
`

const JoinUs = styled(Container)`
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
    padding-left: 0.75rem;
    color: ${theme.colors.gold600};
  }

  a:hover {
    color: ${theme.colors.black};
  }

  .row > div {
    margin: 1.25rem 0;
  }
`

const WhoWeServe = styled(Container)`
  h3 {
    border-left: 1px ${theme.colors.blue600} solid;
    line-height: 1.2rem;
    padding-left: 0.75rem;
    color: ${theme.colors.blue600};
  }

  p {
    padding-left: 0.75rem;
  }

  .row > div {
    margin: 1.25rem 0;
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
const WorksBoxesWrapper = styled(BoxesWrapper)``

export default Competition