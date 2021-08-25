// scope css locally
import React from "react"
import Layout from "../components/Layout"

import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"

import Header from "../components/Header"
import AlternativeButton from "../components/AlternativeButton"

import styled from "styled-components"

import { IoMdSchool } from "@react-icons/all-files/io/IoMdSchool"
import { BsFillPersonFill } from "@react-icons/all-files/bs/BsFillPersonFill"
import { BiCheckDouble } from "@react-icons/all-files/bi/BiCheckDouble"

import { FaHandsHelping } from "@react-icons/all-files/fa/FaHandsHelping"
import { BiGroup } from "@react-icons/all-files/bi/BiGroup"
import { VscOpenPreview } from "@react-icons/all-files/vsc/VscOpenPreview"

import CustomizedContainer from "../components/CustomizedContainer"
import SEO from "../components/Seo"
import { BoxesWrapper } from "../assets/themes/boxes"

import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import theme from "../assets/themes/theme"
import Row from "react-bootstrap/esm/Row"
import Col from "react-bootstrap/esm/Col"
import Container from "react-bootstrap/esm/Container"

import pic from "../assets/images/homepage-banners/explaining.jpg"

const query = graphql`
  {
    allContentfulIndexCarousel {
      nodes {
        name
        image {
          gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
        }
      }
    }
  }
`

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
}

export default function Home(props) {
  const data = useStaticQuery(query)
  const carouselNodes = data.allContentfulIndexCarousel.nodes

  return (
    <Layout>
      <SEO title="Home" />
      <HeroWrapper>
        {/* need to use the query stuff for images */}
        <div className="hero-image">
          <div>
            <h1>Pioneers in Engineering</h1>
            <h3>Bringing STEM education to the Bay Area</h3>
            <AlternativeButton type="hipster" link="/GetInvolved#timeline">
              Events
            </AlternativeButton>
            <AlternativeButton color="gold" link="/getInvolved/Forms">
              Join Pie
            </AlternativeButton>
          </div>
        </div>
      </HeroWrapper>

      <CustomizedContainer>
        <Container fluid>
          <h4 style={{ marginBottom: "1.5em", color: theme.colors.grey400 }}>
            WHO WE ARE
          </h4>
          <Header type={"blue-header"}>About Us</Header>
          <p>
            Pioneers in Engineering (PiE) promotes STEM education through an
            exciting, mentorship-based process. We strongly believe that no
            student should be denied a quality educational experience.
          </p>
        </Container>

        <AboutBoxesWrapper
          fluid
          align="center"
          iconSize="5rem"
          padding="2rem 1.25rem"
        >
          <Row className="inner-container">
            <Col sm={12} md={4} lg={4}>
              <div className="card">
                <div>
                  <IoMdSchool className="bounce" />
                  <h3>700 High School Students</h3>
                </div>
              </div>
            </Col>
            <Col sm={12} md={4} lg={4}>
              <div className="card">
                <div>
                  <BsFillPersonFill className="bounce" />
                  <h3>30 Students </h3>
                </div>
              </div>
            </Col>
            <Col sm={12} md={4} lg={4}>
              <div className="card">
                <div>
                  <BiCheckDouble className="bounce" />
                  <h3>350 Berkeley Students </h3>
                </div>
              </div>
            </Col>
          </Row>
        </AboutBoxesWrapper>
      </CustomizedContainer>

      <CustomizedContainer color="#f4f4f5">
        <Container fluid>
          <h4 style={{ marginBottom: "1.5em", color: theme.colors.grey400 }}>
            HIGH SCHOOLERS
          </h4>
          <Header type={"gold-header"}>Students</Header>
          <p>
            Are you in high school? Compete in our 8-week Spring robotics
            competition! For only $100, your team will receive a robotics kit
            and 2-3 mentors for support. We also host a Fall reboot of our past
            Spring competition, as well as workshops such as PiE On The Road.
          </p>
          {/* <CarouselWrapper>
            <Carousel
              swipeable={true}
              draggable={true}
              responsive={responsive}
              ssr={true} // means to render carousel on server-side.
              infinite={true}
              autoPlay={props.deviceType !== "mobile" ? true : false}
              autoPlaySpeed={5000}
              keyBoardControl={true}
              customTransition="transform 400ms ease-in-out"
              containerClass="react-multi-carousel-list"
              removeArrowOnDeviceType={["mobile"]}
              deviceType={props.deviceType}
              itemClass="carousel-padding"
            >
              {carouselNodes.map(node => {
                const { image } = node
                return <GatsbyImage image={image.gatsbyImageData}></GatsbyImage>
              })}
            </Carousel>
          </CarouselWrapper> */}
          <AlternativeButton link="/Competition">
            2021 PIE Robotics Competition
          </AlternativeButton>
        </Container>
      </CustomizedContainer>

      <CustomizedContainer>
        <Container fluid>
          <h4 style={{ marginBottom: "1.5em", color: theme.colors.grey400 }}>
            HELP US OUT
          </h4>
          <Header type={"blue-header"}>Get Involved</Header>
          <p>
            Excited to help? You could be the next to design the back-end of our
            robots, mentor our students, judge our competitions, and lots more!
          </p>
        </Container>
        <TeamsBoxesWrapper
          fluid
          textColor={theme.colors.white}
          headerColor={theme.colors.grey300}
          iconSize="3.5rem"
          padding="2rem 1.5rem"
        >
          <Row className="inner-container">
            <Col sm={12} md={4} lg={4}>
              <div
                className="card"
                style={{ backgroundColor: theme.colors.darkblue400 }}
              >
                <div>
                  <FaHandsHelping />
                  <h3>Decal</h3>
                  <p>
                    Interested in participating in PiE's mission by becoming a
                    mentor and role model for a team of high school students?
                    PiE RC DeCal, offered every spring, offers just that!
                  </p>
                  <AlternativeButton link="/getInvolved/Decal">
                    Learn More
                  </AlternativeButton>
                </div>
              </div>
            </Col>
            <Col sm={12} md={4} lg={4}>
              <div
                className="card"
                style={{ backgroundColor: theme.colors.blue500 }}
              >
                <div>
                  <BiGroup />
                  <h3>Team</h3>
                  <p>
                    Join our team and be part of providing STEM education to the
                    Bay Area
                  </p>
                  <AlternativeButton color="gold" link="/GetInvolved">
                    Learn More
                  </AlternativeButton>
                </div>
              </div>
            </Col>
            <Col sm={12} md={4} lg={4}>
              <div
                className="card"
                style={{ backgroundColor: theme.colors.green500 }}
              >
                <div>
                  <VscOpenPreview />
                  <h3>Volunteer</h3>
                  <p>
                    We are looking for professors and industry professionals to
                    volunteer at our events. You can help us by being a judge at
                    our Design Reviews and/or Final Competition.
                  </p>
                  <AlternativeButton link="/GetInvolved#volunteer">
                    Learn More
                  </AlternativeButton>
                </div>
              </div>
            </Col>
          </Row>
        </TeamsBoxesWrapper>
      </CustomizedContainer>
    </Layout>
  )
}

const AboutBoxesWrapper = styled(BoxesWrapper)`
  @media screen and (max-width: 766px) {
    .container {
      grid-template-columns: repeat(1, 1fr);
    }
    .container > div {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }

    .container > div > svg {
      justify-self: center;
    }
  }
`
const TeamsBoxesWrapper = styled(BoxesWrapper)`
  @media screen and (max-width: 992px) {
    .container {
      grid-template-columns: repeat(1, 1fr);
    }

    .container > div > svg {
      display: none;
    }
  }
`

const HeroWrapper = styled.div`
  .hero-image {
    background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7)),
      url(${pic}) center/cover fixed no-repeat;
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    top: 0;
  }
`

const CarouselWrapper = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;
  .carousel-padding {
    margin: 0 0.5rem;
  }
`
