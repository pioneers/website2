import React from "react"

import styled from "styled-components"
import Header from "../../components/Header"
import Layout from "../../components/Layout"
import HelmetWrapper from "../../components/HelmetWrapper"
import CustomizedContainer from "../../components/CustomizedContainer"

import Table from "react-bootstrap/esm/Table"

import { VscDebugStart } from "@react-icons/all-files/vsc/VscDebugStart"
import { AiOutlineFileDone } from "@react-icons/all-files/ai/AiOutlineFileDone"
import { FaUserTie } from "@react-icons/all-files/fa/FaUserTie"
import { GiPodiumWinner } from "@react-icons/all-files/gi/GiPodiumWinner"

import { BiVideoRecording } from "@react-icons/all-files/bi/BiVideoRecording"
import { AiOutlineUnorderedList } from "@react-icons/all-files/ai/AiOutlineUnorderedList"
import { BsInfoCircle } from "@react-icons/all-files/bs/BsInfoCircle"
import { BoxesWrapper } from "../../assets/themes/boxes"

import theme from "../../assets/themes/theme"
import { useStaticQuery, graphql } from "gatsby"
import Row from "react-bootstrap/esm/Row"
import Col from "react-bootstrap/esm/Col"
import Container from "react-bootstrap/esm/Container"

import pic from "../../assets/images/stock-images/prep.jpg"

import { AnchorLink as Link } from "gatsby-plugin-anchor-links"

const query = graphql`
  {
    allContentfulPastScholars {
      nodes {
        college
        highSchool
        name
        year
      }
    }
  }
`

const RCScholarship = () => {
  const data = useStaticQuery(query)
  const scholarsUnordered = data.allContentfulPastScholars.nodes
  const scholars = scholarsUnordered.sort((a, b) => (a.year > b.year ? 1 : -1))

  return (
    <Layout>
      <HelmetWrapper
        title="Pioneers in Engineering Alumni Scholarship"
        description="Linked here will be the alumni scholarship that PiE provides."
      />
      <HeroWrapper>
        <div className="placeholder"></div>
        <div className="hero-image">
          <div>
            <h1>Pioneers in Engineering Alumni Scholarship</h1>
          </div>
        </div>
      </HeroWrapper>
      <CustomizedContainer>
        <Container fluid>
          <Header type="blue">
            Pioneers in Engineering Alumni Scholarship
          </Header>
          <p>
            Pioneers in Engineering strives to provide a quality STEM
            educational experience for Bay Area high school students. In keeping
            with our mission to promote science and engineering, we are happy to
            announce our eighth annual PiE alumni-funded scholarship for PiE
            students. The scholarship is for a single $2000 award, with $500 for
            finalists.
          </p>
          <p>
            The scholarship committee will review each application holistically,
            taking into account academic achievement, extracurricular
            activities, leadership skills, and passion. As a STEM organization,
            we are especially interested in how your pursuits involve science
            and engineering.
          </p>
        </Container>
      </CustomizedContainer>
      <CustomizedContainer color={theme.colors.white}>
        <Container fluid>
          <h4 style={{ marginBottom: "1.5em", color: theme.colors.grey400 }}>
            THE TIMELINE
          </h4>
          <Header type="gold">2021 Scholarship Schedule</Header>
          <ScheduleWrapper fluid align="center" padding="3rem 1.25rem">
            <Row className="inner-container">
              <Col sm={12} md={6} lg={3}>
                <div className="card">
                  <div>
                    <VscDebugStart />
                    <h3>Application opens Saturday 3/5/2022</h3>
                  </div>
                </div>
              </Col>
              <Col sm={12} md={6} lg={3}>
                <div className="card">
                  <div>
                    <AiOutlineFileDone />
                    <h3>Application due Saturday 4/16/2022</h3>
                  </div>
                </div>
              </Col>
              <Col sm={12} md={6} lg={3}>
                <div className="card">
                  <div>
                    <FaUserTie />
                    <h3>Interviews with finalists - Saturday 4/30/2022</h3>
                  </div>
                </div>
              </Col>
              <Col sm={12} md={6} lg={3}>
                <div className="card">
                  <div>
                    <GiPodiumWinner />
                    <h3>Recipient announced - Sunday 5/1/2022</h3>
                  </div>
                </div>
              </Col>
            </Row>
          </ScheduleWrapper>
        </Container>
      </CustomizedContainer>
      <CustomizedContainer>
        <Container fluid>
          <h4 style={{ marginBottom: "1.5em", color: theme.colors.grey400 }}>
            INFORMATION
          </h4>
        </Container>
        <Scholarship fluid>
          <Row>
            <Col sm={12} md={7} lg={7}>
              <Header type="blue">Applicant Eligibility</Header>
              <p>
                Applicants must be current or past PiE participants in their
                last year of high school, and must intend to pursue
                post-secondary education (four-year, technical, vocational,
                etc.).
              </p>
              <p>
                Please use the online web application to submit your scholarship
                application.
              </p>
              <Link to="https://scholarship.pierobotics.org/accounts/google/login">
                Submit Here &rsaquo;
              </Link>
              <h3 style={{ color: theme.colors.grey900, marginTop: "1rem" }}>
                Resources
              </h3>
              <p>
                The following documents from the 2021 season are provided for
                your convenience.
              </p>
            </Col>
            <Resources sm={12} md={5} lg={5}>
              <Row>
                <Col sm={12} md={12} lg={12}>
                  <div>
                    <BiVideoRecording />
                    <h4>2022 Workshop</h4>
                    <p>
                      <Link to="https://pioneers.berkeley.edu/assets/scholarship/2022_pie_scholarship_workshop_presentation.pdf">
                        {" "}
                        Scholarship workshop slides &rsaquo;{" "}
                      </Link>
                    </p>
                  </div>
                </Col>
                <Col sm={12} md={12} lg={12}>
                  <div>
                    <AiOutlineUnorderedList />
                    <h4>2022 Scholarship Application Summary</h4>
                    <p>
                      <Link to="https://pioneers.berkeley.edu/assets/scholarship/2022_pie_scholarship_application.pdf">
                        {" "}
                        Pdf of the application &rsaquo;{" "}
                      </Link>
                    </p>
                  </div>
                </Col>
                <Col sm={12} md={12} lg={12}>
                  <div>
                    <BsInfoCircle />
                    <h4>2021 Scholarship Interview Tips</h4>
                    <p>
                      <Link to="https://pioneers.berkeley.edu/assets/scholarship/2021_pie_scholarship_interview_tips.pdf">
                        {" "}
                        Interview Tips &rsaquo;{" "}
                      </Link>
                    </p>
                  </div>
                </Col>
              </Row>
            </Resources>
          </Row>
        </Scholarship>
      </CustomizedContainer>
      <CustomizedContainer color={theme.colors.white}>
        <Container fluid>
          <h2 style={{ color: theme.colors.grey900 }}>Past Scholars</h2>
          <Table responsive="lg" hover>
            <thead>
              <tr>
                <th>Name</th>
                <th>High School</th>
                <th>College</th>
                <th>Year</th>
              </tr>
            </thead>
            <tbody>
              {scholars.map((scholar, index) => {
                const { name, highSchool, college, year } = scholar
                return (
                  <tr>
                    <td>{name}</td>
                    <td>{highSchool}</td>
                    <td>{college}</td>
                    <td>{year}</td>
                  </tr>
                )
              })}
            </tbody>
          </Table>
        </Container>
      </CustomizedContainer>
      <CustomizedContainer color={theme.colors.blue50}>
        <AnythingContainer fluid>
          <h4 style={{ marginBottom: "1.5em", color: theme.colors.grey400 }}>
            ANYTHING ELSE
          </h4>
          <Header type="gold">Questions?</Header>
          <p>
            For any questions about the scholarship or application, contact us
            at{" "}
            <a
              href="mailto:scholarship@pioneers.berkeley.edu"
              target="_blank"
              rel="noreferrer"
            >
              scholarship@pioneers.berkeley.edu
            </a>
          </p>
        </AnythingContainer>
      </CustomizedContainer>
    </Layout>
  )
}

const AnythingContainer = styled(Container)`
  p > a {
    font-weight: 600;

    color: ${theme.colors.blue600};
  }

  p > a:hover {
    color: ${theme.colors.black};
  }
`

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

const Scholarship = styled(Container)`
  a {
    /* padding-left: 0.75rem; */
    color: ${theme.colors.gold600};
    font-weight: 600;
  }

  a:hover {
    color: ${theme.colors.black};
  }
`

const Resources = styled(Col)`
  p {
    margin-bottom: 0.35rem;
    line-height: 1.15rem;
  }

  a {
    padding-left: 0.75rem;
    font-size: 16px;
  }

  .row > div {
    margin-bottom: 1rem;
  }

  h4 {
    border-left: 1px ${theme.colors.blue600} solid;
    /* margin-bottom: 0; */
    line-height: 1.2rem;
    padding-left: 0.75rem;
    color: ${theme.colors.blue600};
    margin: 0.25rem 0 0.75rem 0;
  }

  svg {
    padding: 0 0 0 0.75rem;
    font-size: 3rem;
  }
`

const ScheduleWrapper = styled(BoxesWrapper)``

export default RCScholarship
