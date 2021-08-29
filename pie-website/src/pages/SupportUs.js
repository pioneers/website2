import React from "react"

import Header from "../components/Header"

import Layout from "../components/Layout"

import styled from "styled-components"
import AlternativeButton from "../components/AlternativeButton"
import CustomizedContainer from "../components/CustomizedContainer"

import KitCost from "../assets/images/sponsors/kit-cost.png"
import Poster from "../assets/images/companyposter.jpg"

import HelmetWrapper from "../components/HelmetWrapper"
import { BoxesWrapper } from "../assets/themes/boxes"

import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import theme from "../assets/themes/theme"
import Row from "react-bootstrap/esm/Row"
import Col from "react-bootstrap/esm/Col"
import Container from "react-bootstrap/esm/Container"

import pic from "../assets/images/robot2.jpg"

import { AnchorLink as Link } from "gatsby-plugin-anchor-links"

const query = graphql`
  {
    allContentfulSponsors {
      nodes {
        name
        sponsorshipLevel
        image {
          gatsbyImageData(
            placeholder: BLURRED
            layout: CONSTRAINED
            height: 100
          )
        }
        link
      }
    }
  }
`

const SupportUs = () => {
  const data = useStaticQuery(query)
  const sponsors = data.allContentfulSponsors.nodes
  const levels = [
    "Platinum Sponsor",
    "Gold Sponsor",
    "Silver Sponsor",
    "Bronze Sponsor",
  ]
  return (
    <React.Fragment>
      <Layout>
        <HelmetWrapper
          title="Support Us"
          description="Because of our low entry fee to our competition over $900 of our kit is subsidized by Pioneers in Engineering. For that reason, we rely on donations and grants to continue our operation to provide STEM education to the Bay Area"
        />
        <HeroWrapper>
          <div className="placeholder"></div>
          <div className="hero-image">
            <div>
              <h1>Support Us</h1>
            </div>
          </div>
        </HeroWrapper>

        <CustomizedContainer color="#f4f4f5">
          <HowToDonateWrapper
            fluid
            padding="3rem 2rem"
            display="block"
            backgroundColor={theme.colors.grey200}
            headerColor={theme.colors.grey900}
            textColor={theme.colors.grey700}
          >
            <Row className="inner-container">
              <Col sm={12} md={12} lg={6}>
                <div className="card">
                  <div>
                    <div id="how-to-help" />
                    <h2>How You Can Help</h2>
                    <p>
                      Use our AmazonSmile link to support us! Once you sign up
                      using our link, you can shop at smile.amazon.com just like
                      you would normally at amazon.com, and we will receive 0.5%
                      of the cost of any eligible purchases you make.
                    </p>
                    <AlternativeButton link="https://smile.amazon.com/ch/47-4554504">
                      Amazon Smile Link &rsaquo;
                    </AlternativeButton>
                  </div>
                </div>
              </Col>
              <Col sm={12} md={12} lg={6}>
                <div className="card">
                  <div>
                    <div id="donate" />
                    <h2>How Your Org Can Help</h2>
                    <p>
                      With our yearly fundraising goal of $75,000, Pioneers in
                      Engineering is seeking support from corporations and
                      philanthropic organizations. In addition, PiE appreciates
                      and accepts gifts in the form of parts and tools to
                      complete the robotics kits. Donations to PiE are 501(c)(3)
                      tax-deductible.
                      <br></br>
                      If you would like more information about PiE and how to
                      partner with us, please email{" "}
                      <a href="mailto:partnerships@pioneers.berkeley.edu">
                        partnerships@pioneers.berkeley.edu
                      </a>
                    </p>
                    <AlternativeButton link="https://donorbox.org/pioneers-in-engineering">
                      Donorbox Link &rsaquo;
                    </AlternativeButton>
                    {/* <AlternativeButton link="https://donorbox.org/pioneers-in-engineering">
                      Big Give Link &rsaquo;
                    </AlternativeButton> */}
                  </div>
                </div>
              </Col>
            </Row>
          </HowToDonateWrapper>
        </CustomizedContainer>

        <CustomizedContainer>
          <div id="howused"></div>
          <h4 style={{ marginBottom: "1.5em", color: theme.colors.grey400 }}>
            HOW THEY ARE USED
          </h4>
          <Header type={"blue-header"}>Donations</Header>
          <DonationsWrapper fluid>
            <Row>
              <Col sm={12} md={6} lg={6}>
                <h3>Robotics Competition</h3>
                <p>
                  Through our Robotics Competition program, we are able to
                  provide robotics kits, parts, and mentors for 24 teams. Our
                  program includes:
                  <li>Competition field construction</li>
                  <li>Campus-mandated insurance</li>
                  <li>Room reservation fees</li>
                  <li>Funding for mentor transportation to school campuses</li>
                  <li>
                    Tools available to teams when working on the UC Berkeley
                    campus
                  </li>
                </p>
              </Col>
              <Col sm={12} md={6} lg={6}>
                <h3>Workshops</h3>
                <p>
                  We hold a number of workshops on and off Berkeley's campus,
                  for high school students and Berkeley students alike. Our
                  workshops are always free for participants, so funding comes
                  out of our own budget. Your donations help us provide:
                  <li>Trebuchet construction materials</li>
                  <li>
                    Materials to fabricate a plywood gear kit for 90+ students
                  </li>
                  <li>
                    Printing to help schools hosting our workshops advertise
                  </li>
                  <li>
                    Passes to utilize campus spaces and resources to create
                    workshop materials
                  </li>
                </p>
              </Col>
              <Col sm={12} md={5} lg={5}>
                <h3>Cost of Participation</h3>
                <p>
                  We ask teams for only a $100 entry fee in order to ensure that
                  money is not a barrier to entry.
                  <br />
                  <br />
                  Our budget is extremely efficient and cost-effective compared
                  to most robotics competitions, which often require each team
                  to spend thousands of dollars. Over $900 of our kit is
                  subsidized by Pioneers in Engineering.
                </p>
              </Col>
              <Col sm={12} md={7} lg={7}>
                <img src={KitCost} className="img" alt="Kit Cost" />
              </Col>
            </Row>
          </DonationsWrapper>
        </CustomizedContainer>

        <CustomizedContainer color="#e8f1fb">
          <Container fluid>
            <Header type={"gold-header"}>What PiE Can Do For You</Header>

            <ForYouWrapper fluid>
              <Row>
                <Col sm={12} md={6} lg={6}>
                  <img src={Poster} className="img" alt="Poster" />
                </Col>
                <Col sm={12} md={6} lg={6}>
                  <p>
                    As PiE is an organization with close ties to{" "}
                    <a href="https://tbp.berkeley.edu/">Tau Beta Pi</a>, the
                    staff and faculty of the College of Engineering, engineering
                    honor societies, and about 27,000 undergraduate students at
                    UC Berkeley, your support of the program is extremely
                    visible to the community at and around UC Berkeley.
                  </p>
                  <p>
                    We appreciate and recognize our{" "}
                    <Link to="/SupportUs#sponsors">sponsors</Link> in the form
                    of posters, banners and logos, and t-shirts seen by
                    thousands of members of the UC Berkeley community. In
                    addition, sponsors are warmly welcomed and encouraged to
                    attend the{" "}
                    <Link to="/Competition#timeline">competition day</Link>. If
                    you would like more information about the benefits, please
                    refer to{" "}
                    <a href="https://pioneers.berkeley.edu/assets/sponsors/sponsorship-packet_2018-2019.pdf">
                      Sponsorship Levels 2018-2019.pdf
                    </a>
                  </p>
                </Col>
              </Row>
            </ForYouWrapper>
          </Container>
        </CustomizedContainer>

        <CustomizedContainer color="white">
          <Sponsors fluid>
            <h4 style={{ marginBottom: "1.5em", color: theme.colors.grey400 }}>
              OUR THANKS
            </h4>
            <div id="sponsors" />
            <Header type={"gold-header"}>Sponsors</Header>
            <p>
              As of 2021-2022 competition year, Pioneers in Engineering would
              like to extend its thanks for the support granted by the following
              organizations. If you interested in becoming one of our sponsors
              and the benefits of being one, please refer to{" "}
              <a href="https://pioneers.berkeley.edu/assets/sponsors/sponsorship-packet_2018-2019.pdf">
                Sponsorship Levels 2018-2019.pdf
              </a>
            </p>

            {levels.map(level => {
              const items = sponsors.filter(
                sponsor => sponsor.sponsorshipLevel === level
              )
              if (items.length > 0) {
                return (
                  <SponsorWrapper>
                    <div className="outer-container">
                      <h3>{level}</h3>
                      <div className="container">
                        {items.map(thing => {
                          const { link, image } = thing
                          return (
                            <React.Fragment>
                              <a href={link} target="_blank" rel="noreferrer">
                                <GatsbyImage
                                  image={image.gatsbyImageData}
                                ></GatsbyImage>
                              </a>
                            </React.Fragment>
                          )
                        })}
                      </div>
                    </div>
                  </SponsorWrapper>
                )
              }
              return <div></div>
            })}
          </Sponsors>
        </CustomizedContainer>
      </Layout>
    </React.Fragment>
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

const DonationsWrapper = styled(Container)`
  & > div > div {
    padding: 0.5rem;
  }
`

const SponsorWrapper = styled.div`
  h3 {
    margin: 1rem;
  }
  .outer-container {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .container {
    flex-direction: row;
    flex-wrap: wrap;
  }

  .logo {
    width: 12rem;
    height: auto;
    margin: 1rem;
  }

  p > a {
    font-weight: 600;
    color: ${theme.colors.blue500};
  }

  p > a:hover {
    color: ${theme.colors.black};
  }
`

const Sponsors = styled(Container)`
  p > a {
    font-weight: 600;
    color: ${theme.colors.blue500};
  }

  p > a:hover {
    color: ${theme.colors.black};
  }
`

const ForYouWrapper = styled(Container)`
  & > div > div {
    padding: 0.5rem;
  }

  p > a {
    font-weight: 600;
    color: ${theme.colors.blue500};
  }

  p > a:hover {
    color: ${theme.colors.black};
  }
`

const HowToDonateWrapper = styled(BoxesWrapper)`
  p > a {
    font-weight: 600;
    color: ${theme.colors.blue500};
  }

  p > a:hover {
    color: ${theme.colors.black};
  }
`

export default SupportUs
