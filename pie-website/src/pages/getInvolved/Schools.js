import React from "react"

import CustomizedContainer from "../../components/CustomizedContainer"
import Layout from "../../components/Layout"
import HelmetWrapper from "../../components/HelmetWrapper"
import theme from "../../assets/themes/theme"
import styled from "styled-components"
const Schools = () => {
  return (
    <Layout>
      <HelmetWrapper title="Schools" description="Under Construction" />
      <HeroWrapper>
        <div className="filler"></div>
        <div className="hero-image">
          <div>
            <h1>Schools</h1>
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
  .filler {
    position: relative;
    height: 92vh;
    z-index: -1;
  }
  .hero-image {
    background-color: ${theme.colors.grey900};
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

export default Schools
