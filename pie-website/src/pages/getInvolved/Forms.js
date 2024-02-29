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
        <div className="filler"></div>
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
                className="card card-hover"
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
                className="card card-hover"
                onClick={function () {
                  window.open(
                    "mailto:recruiting@pierobotics.org?subject=Filled out forms&body=Hey, just completed my forms. They are ready to be processed!",
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
                  Evans 3 (Announcements), then 101 O'Brien
                </td>
              </tr>
              <tr>
                <td>Saturday 1 - 3 PM </td>
                <td>
                  {" "}
                  101 O'Brien
                </td>
              </tr>
            </tbody>
          </Table>
        </Container>
        <br />
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
