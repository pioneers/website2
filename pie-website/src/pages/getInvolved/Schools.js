import React from "react"

import CustomizedContainer from "../../components/CustomizedContainer"
import Layout from "../../components/Layout"
import HelmetWrapper from "../../components/HelmetWrapper"
import theme from "../../assets/themes/theme"
import styled from "styled-components"
import Container from "react-bootstrap/esm/Container"
import Header from "../../components/Header"
import AlternativeButton from "../../components/AlternativeButton"


const Schools = () => {
  return (
    <Layout>
      <HelmetWrapper title="Schools" description="Under Construction" />
      <HeroWrapper>
        <div className="filler"></div>
        <div className="hero-image">
          <div>
            <h1>Schools</h1>
          </div>
        </div>
      </HeroWrapper>
      <CustomizedContainer>
        <Container fluid>
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
              href="mailto:leadership@pioneers.berkeley.edu"
              target="_blank"
              rel="noreferrer"
            >
              foundation@pioneers.berkeley.edu
            </a>{" "} for more info and to get contacted when our application opens.
          </p>
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
    background-color: ${theme.colors.grey900};
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

export default Schools
