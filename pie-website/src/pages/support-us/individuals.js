import React from "react"

import Header from "../../components/Header"

import Layout from "../../components/Layout"

import styled from "styled-components"
import CustomizedContainer from "../../components/CustomizedContainer"

import KitCost from "../../assets/images/sponsors/kit-cost.png"
import Poster from "../../assets/images/companyposter.jpg"

import HelmetWrapper from "../../components/HelmetWrapper"
import { BoxesWrapper } from "../../assets/themes/boxes"

import { useStaticQuery, graphql, Script } from "gatsby"

import theme from "../../assets/themes/theme"
import Row from "react-bootstrap/esm/Row"
import Col from "react-bootstrap/esm/Col"
import Container from "react-bootstrap/esm/Container"

import pic from "../../assets/images/robot2.jpg"


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

const Individuals = () => {
  const data = useStaticQuery(query)
  const sponsors = data.allContentfulSponsors.nodes

function showDonorbox() {
    
    return(
      <div>
        <Script type="module" src="https://donorbox.org/widgets.js" async={true} strategy="post-hydrate"/><dbox-widget campaign="pioneers-in-engineering" type="donation_form" enable-auto-scroll="true"></dbox-widget>
      </div>
    );
    
}

  return (
    <React.Fragment>
      <Layout>
        <HelmetWrapper
          title="Individuals"
          description="Because of our low entry fee to our competition over $900 of our kit is subsidized by Pioneers in Engineering. For that reason, we rely on donations and grants to continue our operation to provide STEM education to the Bay Area"
        />
        <HeroWrapper>
          <div className="filler"></div>
          <div className="hero-image">
            <div>
              <h1>Individuals</h1>
            </div>
          </div>
        </HeroWrapper>

        
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
                </p>
                  <ul style={{listStyleType: 'square', marginLeft: '2rem'}}>
                    <li>Competition field construction</li>
                    <li>Campus-mandated insurance</li>
                    <li>Room reservation fees</li>
                    <li>Funding for mentor transportation to school campuses</li>
                    <li>
                    Tools available to teams when working on the UC Berkeley
                    campus
                  </li>
                  </ul>

              </Col>
              <Col sm={12} md={6} lg={6}>
                <h3>Workshops</h3>
                <p>
                  We hold a number of workshops on and off Berkeley's campus,
                  for high school students and Berkeley students alike. Our
                  workshops are always free for participants, so funding comes
                  out of our own budget. Your donations help us provide:
                </p>
                <ul style={{listStyleType: 'square', marginLeft: '2rem'}}>
                  <li>
                    Passes to utilize campus spaces and resources to create
                    workshop materials
                  </li>
                </ul>
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

         <CustomizedContainer>
        <div id="resources" />
        <Container fluid>
          
          <Header type={"blue"}>Consider Donating to Our Donorbox Campaign</Header>
          <div>
            <p>Consider a recurring or one-time donation to help further PiE's capacity to reach students!</p>
          </div>
          {showDonorbox()} 

        </Container>
      </CustomizedContainer>

        <CustomizedContainer color="white">
          <Sponsors fluid>
            <h4 style={{ marginBottom: "1.5em", color: theme.colors.grey400 }}>
              OUR THANKS
            </h4>
            <div id="sponsors" />
            <Container fluid>
            <Header type={"gold-header"}>To Our Sponsors</Header>

            <ForYouWrapper fluid>
              <Row>
                <Col sm={12} md={6} lg={6}>
                  <img src={Poster} className="img" alt="Poster" />
                </Col>
                <Col sm={12} md={6} lg={6}>
                  <p>
                    We appreciate and recognize our sponsors in the form
                    of posters, banners and logos, and t-shirts seen by
                    thousands of members of the UC Berkeley community. In
                    addition, sponsors are warmly welcomed and encouraged to
                    attend the{" "}
                    <a href="/about/competition">competition day</a>. If
                    you would like more information about the benefits, please
                    refer to{" "}
                    <a
                      href="/assets/sponsors/PiE_Sponsorship_Packet_2025_2026.pdf"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Sponsorship Packet 2025-2026.pdf
                    </a>
                  </p>
                </Col>
              </Row>
            </ForYouWrapper>
          </Container>
          <Container style={{marginTop:"4rem"}}>
        
            <div style={{display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center"}}>
                <Header type={"gold-header"}>Special thanks to our 2026 Crowdfunders!</Header>
                <p style={{fontSize: "1.5rem"}}>
                  <strong>Jacob Pruess</strong>
                </p>
                <p style={{fontSize: "1.5rem"}}>
                  <strong>Ethan Seither</strong>
                </p>
                <p style={{fontSize: "1.5rem"}}>
                  <strong>Lisa Branum</strong>
                </p>
            </div>
            </Container>
          </Sponsors>
        </CustomizedContainer>
      </Layout>
    </React.Fragment>
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

export default Individuals
