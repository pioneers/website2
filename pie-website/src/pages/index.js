// scope css locally
import React from "react"
import Layout from "../components/Layout"

import Header from "../components/Header"
import AlternativeButton from "../components/AlternativeButton"

import styled from "styled-components"

import { FaHandsHelping } from "@react-icons/all-files/fa/FaHandsHelping"
import { BiGroup } from "@react-icons/all-files/bi/BiGroup"
import { VscOpenPreview } from "@react-icons/all-files/vsc/VscOpenPreview"

import CustomizedContainer from "../components/CustomizedContainer"
import HelmetWrapper from "../components/HelmetWrapper"

// import { useStaticQuery, graphql } from "gatsby"
// import { GatsbyImage } from "gatsby-plugin-image"
import theme from "../assets/themes/theme"
import Row from "react-bootstrap/esm/Row"
import Col from "react-bootstrap/esm/Col"
import Container from "react-bootstrap/esm/Container"

import pic from "../assets/images/homepage-banners/explaining.jpg"

import { AnchorLink as Link } from "gatsby-plugin-anchor-links"

import MailchimpFormContainer from "../components/Mailchimp"

// const query = graphql`
//   {
//     allContentfulIndexCarousel {
//       nodes {
//         name
//         image {
//           gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
//         }
//       }
//     }
//   }
// `

export default function Home(props) {
  // const data = useStaticQuery(query)
  // const carouselNodes = data.allContentfulIndexCarousel.nodes

  return (
    <Layout>
      <HelmetWrapper title="Home" />
      <HeroWrapper>
        <div className="filler"></div>
        <div className="hero-image">
          <div>
            <h1>Pioneers in Engineering</h1>
            <h3>Bringing STEM education to the Bay Area</h3>
          </div>
        </div>
      </HeroWrapper>

      <CustomizedContainer>
        <Container fluid>
          <h4 style={{ marginBottom: "1.5em", color: theme.colors.grey400 }}>
            WHO WE ARE
          </h4>
          <h2 style={{ maxWidth: "700px", marginBottom: "1rem" }}>
            Promoting STEM education to the Bay Area because we strongly believe
            that no student should be denied a quality educational experience
          </h2>
          <AlternativeButton type="hipster" link="/GetInvolved#timeline">
            Events
          </AlternativeButton>
          <AlternativeButton color="gold" link="/getInvolved/Forms">
            Join Pie
          </AlternativeButton>
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
      </CustomizedContainer>

      <CustomizedContainer color="#f4f4f5">
        <Students fluid>
          <h4 style={{ marginBottom: "1.5em", color: theme.colors.grey400 }}>
            HIGH SCHOOLERS
          </h4>
          <Header type={"gold-header"}>Students</Header>
          <p>
            Are you in high school?{" "}
            <Link to="/getInvolved/Schools">
              Compete in our 8-week Spring robotics competition!
            </Link>{" "}
            For only $100, your team will receive a robotics kit and 2-3 mentors
            for support. We also host a Fall reboot of our past Spring
            competition, as well as workshops such as PiE On The Road.
          </p>

          <AlternativeButton link="/Competition">
            2023 Spring Competition &rsaquo;
          </AlternativeButton>
        </Students>
      </CustomizedContainer>

      <CustomizedContainer>
        <JoinUsHeader fluid>
          <h4 style={{ marginBottom: "1.5em", color: theme.colors.grey400 }}>
            HELP US OUT
          </h4>
          <Header type={"blue-header"}>Be a part in our competition</Header>
          <p style={{ marginTop: "1.5rem" }}>
            Excited to help? You could be the next to design the back-end of our
            robots, <Link to="/getInvolved/Decal">mentor</Link> our students,{" "}
            <Link to="/GetInvolved#volunteer">judge our competitions</Link>, and
            lots more!
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
                <Link to="/getInvolved/Decal">Learn More &rsaquo;</Link>
              </div>
            </Col>
            <Col sm={12} md={4} lg={4}>
              <div>
                <BiGroup />
                <h4>Join our team</h4>
                <p>
                  Join our team and be part of providing STEM education to the
                  Bay Area
                </p>
                <Link to="/GetInvolved">Learn More &rsaquo;</Link>
              </div>
            </Col>
            <Col sm={12} md={4} lg={4}>
              <div>
                <VscOpenPreview />
                <h4>Volunteer at competition</h4>
                <p>
                  We are looking for professors and industry professionals to
                  volunteer at our events. You can help us by being a judge at
                  our Design Reviews and/or Final Competition.
                </p>
                <Link to="/GetInvolved">Learn More &rsaquo;</Link>
              </div>
            </Col>
          </Row>
        </JoinUs>
      </CustomizedContainer>
      <CustomizedContainer color={theme.colors.grey100}>
        <div id="mailinglist"></div>
        <MailchimpFormContainer />
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
    z-index: -1;
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
    padding: 1rem;
    h1 {
      font-size: 5rem;
    }
  }
`

const JoinUsHeader = styled(Container)`
  p > a {
    font-weight: 600;
    color: ${theme.colors.blue500};
  }

  p > a:hover {
    color: ${theme.colors.black};
  }
`

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
`

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
`

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
`
