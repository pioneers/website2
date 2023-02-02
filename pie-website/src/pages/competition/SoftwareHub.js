import React from "react"
import Layout from "../../components/Layout"
import HelmetWrapper from "../../components/HelmetWrapper"
import CustomizedContainer from "../../components/CustomizedContainer"
import styled from "styled-components"
import { BoxesWrapper } from "../../assets/themes/boxes"
import theme from "../../assets/themes/theme"
import AlternativeButton from "../../components/AlternativeButton"
import Header from "../../components/Header"
import Container from "react-bootstrap/esm/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { useStaticQuery, graphql } from "gatsby"

import { AnchorLink as Link } from "gatsby-plugin-anchor-links"

import pic from "../../assets/images/about-us/work-in-progress.jpg"

const query = graphql`
  {
    allContentfulSoftwareHubLinks {
      nodes {
        dawnDate
        dawnLinux
        dawnMacOs
        dawnVersion
        dawnWindows
        latestPythonDocumentation
        piazza
        robotApi
        runtimeAllRobots
        runtimeDate
        runtimeVersion
      }
    }
  }
`

const SoftwareHub = () => {
  const data = useStaticQuery(query)
  const {
    dawnDate,
    dawnLinux,
    dawnMacOs,
    dawnVersion,
    dawnWindows,
    latestPythonDocumentation,
    piazza,
    robotApi,
    runtimeAllRobots,
    runtimeDate,
    runtimeVersion,
  } = data.allContentfulSoftwareHubLinks.nodes[0]
  return (
    <Layout>
      <HelmetWrapper
        title="Software Hub"
        description="This is technically Software Hub but we will host things here for now."
      />
      <HeroWrapper>
        <div className="filler"></div>
        <div className="hero-image">
          <div>
            <h1>Software Hub</h1>
          </div>
        </div>
      </HeroWrapper>

      <CustomizedContainer>
        <BoxesWrapper
          fluid
          align="center"
          headerColor={theme.colors.blue500}
          backgroundColor={theme.colors.grey200}
          padding="3rem 1.5rem"
        >
          <Row className="inner-container">
            <Col sm={12} md={6} lg={6}>
              <div className="card">
                <div>
                  <h2 style={{ color: theme.colors.blue700 }}>Dawn</h2>
                  <h3 style={{ color: theme.colors.grey900 }}>
                    Version: {dawnVersion}
                  </h3>
                  <h3 style={{ color: theme.colors.grey500 }}>{dawnDate}</h3>
                  <br />
                  <div>
                    <AlternativeButton
                      link={
                        dawnWindows === "disable"
                          ? "/competition/SoftwareHub/"
                          : dawnWindows
                      }
                    >
                      Windows
                    </AlternativeButton>
                    <AlternativeButton
                      link={
                        dawnLinux === "disable"
                          ? "/competition/SoftwareHub/"
                          : dawnLinux
                      }
                    >
                      Linux
                    </AlternativeButton>
                    <AlternativeButton
                      link={
                        dawnMacOs === "disable"
                          ? "/competition/SoftwareHub/"
                          : dawnMacOs
                      }
                    >
                      MacOS
                    </AlternativeButton>
                  </div>
                </div>
              </div>
            </Col>
            <Col sm={12} md={6} lg={6}>
              <div className="card">
                <div>
                  <h2 style={{ color: theme.colors.blue700 }}>Runtime</h2>
                  <h3 style={{ color: theme.colors.grey900 }}>
                    Version: {runtimeVersion}
                  </h3>
                  <h3 style={{ color: theme.colors.grey500 }}>{runtimeDate}</h3>
                  <br />
                  <AlternativeButton
                    link={
                      runtimeAllRobots === "disable"
                        ? "/competition/SoftwareHub/"
                        : runtimeAllRobots
                    }
                  >
                    All Robots
                  </AlternativeButton>
                </div>
              </div>
            </Col>
          </Row>
        </BoxesWrapper>
      </CustomizedContainer>
      <CustomizedContainer color={theme.colors.white}>
        <Container fluid>
          <h4 style={{ marginBottom: "1.5em", color: theme.colors.grey400 }}>
            GETTING STARTED
          </h4>

          <Header type="blue">Introduction</Header>
          <p>
            Dawn is the software you will use to interface with your robot. It
            includes a code editor for writing your robot’s code and a dashboard
            for displaying data from the robot. Runtime is the software on the
            robot that communicates with Dawn, processes your code, and executes
            the commands you program. Battery a Lithium-Polymer battery that has
            a voltage of ~11.2 Volts during regular use. These kinds of
            batteries are powerful but can be rather dangerous if charged
            incorrectly.
          </p>
        </Container>

        <Container fluid>
          <h3 style={{ color: theme.colors.grey900 }}>Downloading Dawn</h3>
        </Container>
        <BoxesWrapper fluid>
          <Row className="inner-container">
            <Col sm={12} md={6} lg={3}>
              <div className="card">
                <div>
                  <p>
                    1. Download the ZIP file of Dawn corresponding to your
                    system by clicking one of the buttons above.
                  </p>
                </div>
              </div>
            </Col>
            <Col sm={12} md={6} lg={3}>
              <div
                className="card"
                style={{ backgroundColor: theme.colors.darkblue400 }}
              >
                <div>
                  <p>
                    2. Extract the ZIP file you just downloaded. On Windows, you
                    can do this by right clicking on the ZIP file and selecting
                    "Extract all" and following the instructions.
                  </p>
                </div>
              </div>
            </Col>
            <Col sm={12} md={6} lg={3}>
              <div
                className="card"
                style={{ backgroundColor: theme.colors.green500 }}
              >
                <div>
                  <p>
                    3. Extracting the ZIP file will create a new folder. Open
                    this folder and find the file "Dawn.exe" (Windows) or "Dawn"
                    (Mac) and double click on it to start Dawn.
                  </p>
                </div>
              </div>
            </Col>
            <Col sm={12} md={6} lg={3}>
              <div
                div
                className="card"
                style={{ backgroundColor: theme.colors.orange500 }}
              >
                <div>
                  <p>
                    4. You can move this folder to a different location on your
                    computer if you wish. You can also delete the ZIP file you
                    downloaded.{" "}
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </BoxesWrapper>
      </CustomizedContainer>
      <CustomizedContainer>
        <MoreWrapper fluid>
          <h4 style={{ marginBottom: "1.5em", color: theme.colors.grey400 }}>
            USEFUL TIDBITS
          </h4>
          <Row>
            <Col xs={12} sm={6} md={6} lg={6}>
              <h2>Documentation</h2>
              <ul>
                <li>
                  <Link to="/competition/SoftwareHub/QuickstartGuide/">
                    Quickstart Guide
                  </Link>
                </li>
                <li>
                  <Link to={robotApi}>Robot API</Link>
                </li>
                <li>
                  <Link to="/competition/SoftwareHub/StudentSkeletonCode/">
                    Student Skeleton Code
                  </Link>
                </li>
                <li>
                  <Link to="/competition/SoftwareHub/DawnGuide/">
                    Guide: Dawn
                  </Link>
                </li>
                <li>
                  Programming Guides
                  <ul>
                    <li>
                      <Link to="/competition/SoftwareHub/Teleop/">
                        Guide #1: Tele-Operated Code
                      </Link>
                    </li>
                    <li>
                      <Link to="/competition/SoftwareHub/Autonomous/">
                        Guide #2: Autonomous Code
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </Col>
            <Col xs={12} sm={6} md={6} lg={6}>
              <h2>More Resources</h2>
              <ul>
                <li>
                  <Link to={latestPythonDocumentation}>
                    Latest Python Documentation
                  </Link>
                </li>
                <li>
                  <Link to={piazza}>Piazza</Link> - Still have questions? Ask on
                  the Forums!
                </li>
              </ul>
            </Col>
          </Row>
        </MoreWrapper>
        <br />
        <UpdatesWrapper
          fluid
          backgroundColor={theme.colors.grey200}
          align="center"
          textColor={theme.colors.grey900}
          headerColor={theme.colors.grey900}
          padding="1rem"
        >
          <Row className="inner-container">
            <Col>
              <div>
                <div>
                  <h2>Version History</h2>
                  <p>
                    We will list updates to Dawn throughout the season here.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </UpdatesWrapper>
      </CustomizedContainer>
    </Layout>
  )
}

const HeroWrapper = styled.div`
  z-index: 0;
  .filler {
    position: relative;
    height: 92vh;
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

const UpdatesWrapper = styled(BoxesWrapper)``

const MoreWrapper = styled(Container)`
  li {
    list-style-type: disc;
  }
  ul {
    margin-left: 1rem;
  }

  h2 {
    color: ${theme.colors.grey900};
  }

  li > a {
    font-weight: 600;
    color: ${theme.colors.blue500};
  }

  li > a:hover {
    color: ${theme.colors.black};
  }
`

export default SoftwareHub
