import React from "react"
import Layout from "../../components/Layout"
import HelmetWrapper from "../../components/HelmetWrapper"
import CustomizedContainer from "../../components/CustomizedContainer"
import styled from "styled-components"
import theme from "../../assets/themes/theme"
import Container from "react-bootstrap/esm/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { useStaticQuery, graphql } from "gatsby"

import { AnchorLink as Link } from "gatsby-plugin-anchor-links"

import pic from "../../assets/images/stock-images/robotics-competition.jpg"

const query = graphql`
  {
    allContentfulMechanicalHubPosts {
      nodes {
        name
        link
      }
    }
  }
`
const MechanicalHub = () => {
  const data = useStaticQuery(query)
  const nodes = data.allContentfulMechanicalHubPosts.nodes
  // console.log(nodes)
  return (
    <Layout>
      <HelmetWrapper
        title="Mechanical Hub"
        description="This is technically Software Hub but we will host things here for now."
      />
      <HeroWrapper>
        <div className="placeholder"></div>
        <div className="hero-image">
          <div>
            <h1>Mechanical Hub</h1>
          </div>
        </div>
      </HeroWrapper>

      <CustomizedContainer>
        <FlexContainer fluid>
          <h3>Click on the boxes for more info!</h3>
          <Row>
            {nodes
              .filter(post => post.name !== "Demo")
              .map(node => {
                const { name, link } = node
                return (
                  <Col
                    xs={12}
                    sm={6}
                    md={4}
                    lg={3}
                    style={{ padding: ".5rem" }}
                  >
                    <MechLink className="card" to={link}>
                      {name}
                    </MechLink>
                  </Col>
                )
              })}
            <Col xs={12} sm={6} md={4} lg={3} style={{ padding: ".5rem" }}>
              <ALink
                className="card"
                href="https://docs.google.com/presentation/d/1exFh8omQUhVyKWl13IeF9a14lCKwgus19ZrIyFJMcNY/edit#slide=id.g36c193894e_0_230"
              >
                Kit Extension
              </ALink>
            </Col>
          </Row>
        </FlexContainer>
      </CustomizedContainer>
    </Layout>
  )
}

const FlexContainer = styled(Container)``

const ALink = styled.a`
  color: ${theme.colors.grey50};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem 1rem;
  border-radius: ${theme.borderRadius};
  background-color: ${theme.colors.blue500};
  text-align: center;
  height: 100%;
  width: 100%;
  transition: ${theme.transition};

  font-weight: 600;
  font-size: 1.25rem;

  &:hover {
    color: ${theme.colors.grey50};
    background-color: ${theme.colors.blue600};
  }
`
const MechLink = styled(Link)`
  color: ${theme.colors.grey50};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem 1rem;
  border-radius: ${theme.borderRadius};
  background-color: ${theme.colors.blue500};
  text-align: center;
  height: 100%;
  width: 100%;
  transition: ${theme.transition};

  font-weight: 600;
  font-size: 1.25rem;

  &:hover {
    color: ${theme.colors.grey50};
    background-color: ${theme.colors.blue600};
  }
`

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

export default MechanicalHub
