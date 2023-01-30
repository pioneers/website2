import React from "react";
import Layout from "../components/Layout";
import styled from "styled-components";

import theme from "../styles/theme";

import pic from "../images/explaining.jpg";

import Header from "../components/Header";
import Btn from "../components/Btn";

import { FaHandsHelping } from "@react-icons/all-files/fa/FaHandsHelping";
import { BiGroup } from "@react-icons/all-files/bi/BiGroup";
import { VscOpenPreview } from "@react-icons/all-files/vsc/VscOpenPreview";

import Block from "../components/Block";

import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";

import CLink from "../components/CLink";

import MailchimpFormContainer from "../components/Mailchimp";

import { AnchorLink } from "gatsby-plugin-anchor-links";

import { SEO } from "../components/SEO";

export default function Home(props) {
  return (
    <Layout>
      <SEO />
      <Hero>
        <div className="hero-image">
          <div>
            <h1>Pioneers in Engineering</h1>
            <h3>Bringing STEM education to the Bay Area</h3>
          </div>
        </div>
      </Hero>

      <Block>
        <Container fluid>
          <h4 style={{ marginBottom: "1.5em", color: theme.colors.grey400 }}>
            WHO WE ARE
          </h4>
          <h2 style={{ maxWidth: "700px", marginBottom: "1rem" }}>
            Promoting STEM education to the Bay Area because we strongly believe
            that no student should be denied a quality educational experience
          </h2>
          <Btn type="hipster" link="/GetInvolved#timeline">
            Events
          </Btn>
          <Btn color="gold" link="/getInvolved/Forms">
            Join Pie
          </Btn>
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
        </WhoWeServe>
      </Block>

      <Block color="white">
        <JoinUsHeader fluid>
          <h4 style={{ marginBottom: "1.5em", color: theme.colors.grey400 }}>
            GET INVOLVED
          </h4>
          <Header type={"blue-header"}>Be a part in our competition</Header>
          <p style={{ marginTop: "1.5rem" }}>
            Excited to participate? Sign up as a school, a mentor, or a general
            club member!
          </p>
        </JoinUsHeader>
        <JoinUs fluid>
          <Row>
            <Col sm={12} md={4} lg={4}>
              <div>
                <FaHandsHelping />
                <h4>Become a mentor</h4>
                <p>
                  Interested in participating in PiE's mission by becoming a
                  mentor and role model for a team of high school students? PiE
                  RC DeCal, offered every spring, offers just that!
                </p>
                <CLink to="/getInvolved/Decal">Learn More &rsaquo;</CLink>
              </div>
            </Col>
            <Col sm={12} md={4} lg={4}>
              <div>
                <BiGroup />
                <h4>Join our team</h4>
                <p>
                  Join our team and be part of providing STEM education to the
                  Bay Area.
                </p>
                <CLink to="/getInvolved/Forms">Learn More &rsaquo;</CLink>
              </div>
            </Col>
            <Col sm={12} md={4} lg={4}>
              <div>
                <VscOpenPreview />
                <h4>School Sign Up</h4>
                <p>
                  Want to participate in our 8 week long competition? Learn more
                  and sign up today.
                </p>
                <CLink to="https://google.com">Learn More &rsaquo;</CLink>
              </div>
            </Col>
          </Row>
        </JoinUs>
      </Block>
      <Block color={theme.colors.grey100}>
        <div id="mailinglist"></div>
        <MailchimpFormContainer />
      </Block>
    </Layout>
  );
}

const Hero = styled.div`
  z-index: 0;
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
    position: relative;

    padding: 1rem;
    h1 {
      font-size: 5rem;
    }
  }
`;

const JoinUsHeader = styled(Container)`
  a {
    font-weight: 600;
    color: ${theme.colors.blue500};
  }
  a:hover {
    color: ${theme.colors.black};
  }
`;

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
`;

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
`;

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
`;
