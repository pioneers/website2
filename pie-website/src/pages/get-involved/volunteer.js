import React from "react"

import Header from "../../components/Header"
import Layout from "../../components/Layout"

import styled from "styled-components"
import CustomizedContainer from "../../components/CustomizedContainer"
import HelmetWrapper from "../../components/HelmetWrapper"

import theme from "../../assets/themes/theme"
import Row from "react-bootstrap/esm/Row"
import Col from "react-bootstrap/esm/Col"
import Container from "react-bootstrap/esm/Container"

import pic from "../../assets/images/stock-images/pie-staff.jpg"

const Volunteer = () => {
    return (
    <Layout>
      <HelmetWrapper
        title="Volunteer"
        description="Are you a professor or industry professional? Help us out by volunteering at one of our events!"
      />
      <HeroWrapper>
        <div className="filler"></div>
        <div className="hero-image">
          <div>
            <h1>Volunteer</h1>
          </div>
        </div>
      </HeroWrapper>
      <CustomizedContainer>
        <VolunteerWrapper fluid>
          <Row>
            <Col sm={12} md={12} lg={12}>
              <div id="volunteer"></div>
              <h3>Volunteer</h3>
              <p>
                We are looking for professors and industry professionals to
                volunteer at our events. You can help us by being a judge at our
                Design Reviews and/or Final Competition.
              </p>
              <p>
                Please contact us at{" "}
                <a
                  href="mailto:leadership@pierobotics.org"
                  target="_blank"
                  rel="noreferrer"
                >
                  leadership@pierobotics.org
                </a>
              </p>
            </Col>
            <Col sm={12} md={6} lg={6}>
              <div>
                <p>
                  We require each high school team to give a presentation to a
                  panel of professors and industry professionals during the
                  first few weeks of the competition season. The purpose of the
                  reviews is to encourage high school students to present their
                  ideas and to receive feedback on their design.
                </p>
              </div>
            </Col>
            <Col sm={12} md={6} lg={6}>
              <div>
                <p>
                  At Final Competition, teams can earn awards for superior
                  mechanical, electrical, and software robot design. We invite
                  professors and industry professionals to judge these designs
                  and decide on an award winner in each category.
                </p>
              </div>
            </Col>
          </Row>
        </VolunteerWrapper>
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

const VolunteerWrapper = styled(Container)`
  padding: 1rem;

  p > a {
    font-weight: 600;
    color: ${theme.colors.blue500};
  }

  p > a:hover {
    color: ${theme.colors.black};
  }
`

export default Volunteer