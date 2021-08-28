import React from "react"
import CustomizedContainer from "../../components/CustomizedContainer"

import Layout from "../../components/Layout"
import SEO from "../../components/Seo"

import theme from "../../assets/themes/theme"
import styled from "styled-components"

const EduHub = () => {
  return (
    <Layout>
      <SEO title="Edu Hub" description="Under Construction" />
      <HeroWrapper>
        <div className="placeholder"></div>
        <div className="hero-image">
          <div>
            <h1>Edu Hub</h1>
          </div>
        </div>
      </HeroWrapper>
      <CustomizedContainer>
        <h1>Under Construction</h1>
      </CustomizedContainer>
    </Layout>
  )
}

const HeroWrapper = styled.div`
  .hero-image {
    background-color: ${theme.colors.grey900};

    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    top: 0;
    position: absolute;
    z-index: -1;
  }
  .placeholder {
    height: 90vh;
    width: 100%;
  }
`

export default EduHub
