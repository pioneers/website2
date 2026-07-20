import React from "react"
import {Link, Element} from "react-scroll"

import CustomizedContainer from "../../components/CustomizedContainer"
import Layout from "../../components/Layout"
import HelmetWrapper from "../../components/HelmetWrapper"
import theme from "../../assets/themes/theme"
import styled from "styled-components"
import Container from "react-bootstrap/esm/Container"
import Header from "../../components/Header"

import { TimelineTwo } from "../../components/Timelines"

import { useStaticQuery, graphql } from "gatsby"
import pic from "../../assets/images/stock-images/robotics_competition_sp17.jpg"

const query = graphql`
  {
    allContentfulCompetitionTimeline(
      sort: { internalTime: ASC }
    ) {
      nodes {
        content {
          raw
        }
        event
        date
        time
        internalTime
      }
    }
  }
`

const Compete = () => {
  const data = useStaticQuery(query)
  const events = data.allContentfulCompetitionTimeline.nodes
  return (
    <Layout>
      <HelmetWrapper title="compete" description="Competition info for the current competition season and schools that want to join PiE." />
      <HeroWrapper>
        <div className="filler"></div>
        <div className="hero-image">
          <div>
            <h1>Compete</h1>
          </div>
        </div>
      </HeroWrapper>
      <CustomizedContainer>
        <Header type="blue">Competition Information</Header>
        <p>
            Here you can find all information regarding the current competition season. To read about 
            our robotics competition in general, visit our <a href="/about/competition">cometition about</a> page. Not a current 
            participant? See how to <Hyperlink to="new-teams" smooth={true} offset={-50}>join</Hyperlink>!
        </p>
        <div id="timeline" />
      </CustomizedContainer>
      <CustomizedContainer>
        <Container fluid>
          <h4 style={{ marginBottom: "1.5em", color: theme.colors.grey400 }}>
            THE TIMELINE
          </h4>
          <Header type={"gold"}>Our Events</Header>
        </Container>
        <TimelineTwo timelineFor={events} />
      </CustomizedContainer>
      <CustomizedContainer>
         <Container fluid>
            <Element name="new-teams">
            <Header type="blue">Learn Robotics an at Affordable Price!</Header>
            <p>
            Pioneers in Engineering is committed to making robotics more accessible
            to underresourced schools. We provide all of the necessary materials,
            resources, and support required for schools to start a robotics team and
            participate in our biannual robotics competition at the low cost of just
            $100 per team.
            <br /><br />
            If you are from a school without robotics education and are interested in 
            starting a team, please email us at{" "}
            <a
              href="mailto:leadership@pierobotics.org"
              target="_blank"
              rel="noreferrer"
            >
              leadership@pierobotics.org
            </a>{" "} for more info and to get contacted when our application opens.
            </p>
            </Element>
        </Container>
      </CustomizedContainer>
    </Layout>
  )
}

const Hyperlink = styled(Link)`
    color: cerulean;
    cursor: pointer;
`

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

export default Compete