import React from "react"

import Header from "../../components/Header"
import Layout from "../../components/Layout"
import { TimelineTwo } from "../../components/Timelines"

import { FaRegHandPaper } from "@react-icons/all-files/fa/FaRegHandPaper"
import { AiOutlineTeam } from "@react-icons/all-files/ai/AiOutlineTeam"
import { BsBuilding } from "@react-icons/all-files/bs/BsBuilding"

import styled from "styled-components"
import CustomizedContainer from "../../components/CustomizedContainer"
import AlternativeButton from "../../components/AlternativeButton"
import HelmetWrapper from "../../components/HelmetWrapper"
import { BoxesWrapper } from "../../assets/themes/boxes"

import { useStaticQuery, graphql } from "gatsby"

import theme from "../../assets/themes/theme"

import Container from "react-bootstrap/esm/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import pic from "../../assets/images/stock-images/robotics_competition_sp17.jpg"

const Communication = () => {
  return (
    <Layout>
      <HelmetWrapper
        title="Communication"
        description="Linked here will be the various resources to get in contact with PiE staff."
      />
      <HeroWrapper>
        <div className="filler"></div>
        <div className="hero-image">
          <div>
            <h1>Communication</h1>
          </div>
        </div>
      </HeroWrapper>

      <CustomizedContainer>
        <Container fluid>
          <h4 style={{ marginBottom: "1.5em", color: theme.colors.grey400 }}>
            REACH OUT TO STAFF
          </h4>
          <Header type={"blue"}>Discord</Header>
          <p style={{ maxWidth: "700px"}}>
            If you have questions about events, debugging, hardware, or anything else relating
            to the PiE competition, we're here to help! The best way to reach out to PiE staff is
            through our student discord, where high school teams can directly communicate with the
            competition organizers. Don't need help right now? We encourage all high schoolers
            to join the discord to receive important announcements about our events.
          </p>
          <AlternativeButton type="hipster" link="https://discord.com/invite/hYREQD2N5r">
            Join the Discord
          </AlternativeButton>
        </Container>
      </CustomizedContainer>

      <CustomizedContainer color={theme.colors.grey100}>
        <Container fluid>
          
          <Header type={"blue"}>Schedule a Worksession With Our Staff!</Header>
          <div>
            <h3>Book an Appointment</h3>
            <p>
              Find and {" "}
              <a href="https://calendar.app.google/iRvf5JCuYUjFw23R7">
                Schedule a Time
              </a>{" "}
              for Office Hours with Members of PiE.
            </p>
            {/* <AlternativeButton link="https://pimulator.pierobotics.org/">
              Simulator &rsaquo;
            </AlternativeButton> */}
            <iframe src="https://calendar.app.google/iRvf5JCuYUjFw23R7" title = "Schedule a Worksession" 
                style = {{width: '100vh', height: '70vh' }}/> 
          </div>
        </Container>
        
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

const WorksBoxesWrapper = styled(BoxesWrapper)``

const ResourcesWrapper = styled(Container)`
  padding: 0rem 2rem;
  .resource-container {
    background-color: ${theme.colors.grey100};
    margin-top: 2rem;
    padding: 1.5rem;
    border-radius: 0.25rem;
    box-shadow: ${theme.shadows.darkShadow};
  }

  & > div > div {
    padding: 0.5rem;
  }

  p {
    margin-bottom: 0.25rem;
  }

  h3 {
    color: ${theme.colors.grey900};
  }

  p > a {
    font-weight: 600;

    color: ${theme.colors.gold600};
  }

  p > a:hover {
    color: ${theme.colors.black};
  }
`

export default Communication
