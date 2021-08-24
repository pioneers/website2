import React from "react"

import styled from "styled-components"
import Header from "../../components/Header"
import Layout from "../../components/Layout"
import SEO from "../../components/Seo"
import CustomizedContainer from "../../components/CustomizedContainer"
import AlternativeButton from "../../components/AlternativeButton"

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
      <SEO
        title="Pioneers in Engineering Alumni Scholarship"
        description="Linked here will be the alumni scholarship that PiE provides."
      />
      <HeroWrapper>
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
                    <h3>Application opens Saturday 3/6/2021</h3>
                  </div>
                </div>
              </Col>
              <Col sm={12} md={6} lg={3}>
                <div className="card">
                  <div>
                    <AiOutlineFileDone />
                    <h3>Application due Saturday 4/17/2021</h3>
                  </div>
                </div>
              </Col>
              <Col sm={12} md={6} lg={3}>
                <div className="card">
                  <div>
                    <FaUserTie />
                    <h3>Interviews with finalists - Saturday 5/1/2021</h3>
                  </div>
                </div>
              </Col>
              <Col sm={12} md={6} lg={3}>
                <div className="card">
                  <div>
                    <GiPodiumWinner />
                    <h3>Recipient announced - Sunday 5/2/2021</h3>
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
          <Header type="blue">Applicant Eligibility</Header>
          <p>
            Applicants must be current or past PiE participants in their last
            year of high school, and must intend to pursue post-secondary
            education (four-year, technical, vocational, etc.).
          </p>
          <p>
            Please use the online web application to submit your scholarship
            application.
          </p>
          <AlternativeButton link="https://scholarship.pierobotics.org/accounts/google/login">
            Go to the web application! (Sign in with Google)
          </AlternativeButton>
        </Container>
        <br />
        <br />
        <Container fluid>
          <h3 style={{ color: theme.colors.grey900 }}>Resources</h3>
          <p>
            The following documents from the 2021 season are provided for your
            convenience.
          </p>
          <p>Click on them for more info!</p>
          <ResourcesWrapper fluid padding="3rem 1.25rem" align="center">
            <Row className="inner-container">
              <Col sm={12} md={4} lg={4}>
                <div
                  style={{ cursor: "pointer" }}
                  className="card"
                  onClick={function () {
                    window.open(
                      "https://pioneers.berkeley.edu/assets/scholarship/2021_pie_scholarship_workshop.pdf",
                      "mywindow"
                    )
                  }}
                >
                  <div>
                    <BiVideoRecording />
                    <h3>2021 Scholarship Workshop</h3>
                    <div />
                    <AlternativeButton
                      color="gold"
                      link="https://drive.google.com/file/d/1WK6IHjJFmyEaO8QcdZC1ZEn1EVLeVSgT/view"
                    >
                      Recording
                    </AlternativeButton>
                  </div>
                </div>
              </Col>
              <Col sm={12} md={4} lg={4}>
                <div
                  style={{ cursor: "pointer" }}
                  className="card"
                  onClick={function () {
                    window.open(
                      "https://pioneers.berkeley.edu/assets/scholarship/2021_pie_scholarship_application.pdf",
                      "mywindow"
                    )
                  }}
                >
                  <div>
                    <AiOutlineUnorderedList />
                    <h3>2021 Scholarship Application Summary</h3>
                  </div>
                </div>
              </Col>
              <Col sm={12} md={4} lg={4}>
                <div
                  style={{ cursor: "pointer" }}
                  className="card"
                  onClick={function () {
                    window.open(
                      "https://pioneers.berkeley.edu/assets/scholarship/2021_pie_scholarship_interview_tips.pdf",
                      "mywindow"
                    )
                  }}
                >
                  <div>
                    <BsInfoCircle />
                    <h3>2021 Scholarship Interview Tips</h3>
                  </div>
                </div>
              </Col>
            </Row>
          </ResourcesWrapper>
        </Container>
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
        <Container fluid>
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

const ScheduleWrapper = styled(BoxesWrapper)``

const ResourcesWrapper = styled(BoxesWrapper)``

export default RCScholarship
