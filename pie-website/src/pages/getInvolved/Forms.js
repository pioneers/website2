import React from "react"

import Header from "../../components/Header"

import { BsPencil } from "@react-icons/all-files/bs/BsPencil"
import { AiOutlineMail } from "@react-icons/all-files/ai/AiOutlineMail"

import Layout from "../../components/Layout"
import CustomizedContainer from "../../components/CustomizedContainer"
import styled from "styled-components"

import HelmetWrapper from "../../components/HelmetWrapper"

import Table from "react-bootstrap/Table"
import Container from "react-bootstrap/esm/Container"
import Row from "react-bootstrap/esm/Row"
import Col from "react-bootstrap/esm/Col"
import theme from "../../assets/themes/theme"

import pic from "../../assets/images/botwork.jpg"
const Forms = () => {
  return (
    <Layout>
      <HelmetWrapper
        title="Forms"
        description="Use the forms here to join our team!"
      />
      <HeroWrapper>
        <div className="placeholder"></div>
        <div className="hero-image">
          <div>
            <h1>Forms</h1>
          </div>
        </div>
      </HeroWrapper>
      <CustomizedContainer fluid>
        <Wrapper fluid>
          <Row style={{ color: theme.colors.grey900 }}>
            <Col sm={12} md={6}>
              <div
                aria-hidden="true"
                className="card"
                onClick={function () {
                  window.open(
                    "https://www.cognitoforms.com/PioneersInEngineering/NewStaffRegistration",
                    "mywindow"
                  )
                }}
              >
                <BsPencil />
                <h3>1. Fill out forms</h3>
              </div>
            </Col>
            <Col sm={12} md={6}>
              <div
                aria-hidden="true"
                className="card"
                onClick={function () {
                  window.open(
                    "mailto:recruiting@pioneers.berkeley.edu?subject=Filled out forms&body=Hey, just completed my forms. They are ready to be processed!",
                    "mywindow"
                  )
                }}
              >
                <AiOutlineMail />
                <h3>2. Email us that you've completed the forms</h3>
              </div>
            </Col>
          </Row>
        </Wrapper>
      </CustomizedContainer>

      <CustomizedContainer color={theme.colors.white}>
        <Container fluid>
          <Header type={"blue-header"}>Our Worksessions</Header>
          <p>
            After filling out our forms and emailing us, the next thing to do is
            attend our worksessions.
          </p>
        </Container>
        <Container fluid>
          <Table responsive="lg" hover>
            <thead>
              <tr>
                <th style={{ lineHeight: "1rem" }}>Worksession Time</th>
                <th>Location</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Wednesday 7 - 9 PM </td>
                <td>
                  575 McCone (Announcements), then 101 O'Brien or O'Brien
                  Breezeway 2nd Floor (depending on team)
                </td>
              </tr>
              <tr>
                <td>Saturday 1 - 3 PM </td>
                <td>
                  {" "}
                  101 O'Brien or O'Brien Breezeway 2nd Floor (depending on team)
                </td>
              </tr>
            </tbody>
          </Table>
        </Container>
        <br />
        <Container fluid style={{ padding: "1rem 2rem" }}>
          <iframe
            title="berkeley map"
            src="https://www.google.com/maps/d/u/0/embed?mid=1zVieVgGgfPfW8yv6wN9TDJZPzDOW3XL9&ll=37.87498246754354%2C-122.25991490933154&z=19"
            width="100%"
            height="480"
            style={{
              borderRadius: theme.borderRadius,
              boxShadow: theme.shadows.otherShadow,
            }}
          ></iframe>
        </Container>
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

const Wrapper = styled(Container)`
  & > div > div {
    padding: 1rem;
  }
  & > div > div > div {
    cursor: pointer;
    cursor: pointer;
    background-color: #e4e4e7;
    padding: 3rem;
    border-radius: 0.25rem;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
      0 10px 10px -5px rgba(0, 0, 0, 0.04);

    width: 100%;
    height: 100%;
  }

  svg {
    font-size: 7rem;
    margin-bottom: 1rem;
  }
`

export default Forms
