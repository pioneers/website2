import React from "react"
import CustomizedContainer from "../../../components/CustomizedContainer"
import Layout from "../../../components/Layout"
import SEO from "../../../components/Seo"
import styled from "styled-components"

import theme from "../../../assets/themes/theme"

import HubPage from "../../../components/HubPage"

const ElectricalIntro = () => {
  return (
    <Layout>
      <SEO
        title="Electrical Intro"
        description="Here is the info for Electrical Intro"
      />

      <CustomizedContainer>
        <HubPage name="Electrical Intro" mechanicalOrSoftware="Mechanical" />
      </CustomizedContainer>
    </Layout>
  )
}

export default ElectricalIntro
