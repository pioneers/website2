import React from "react"
import CustomizedContainer from "../../../components/CustomizedContainer"
import Layout from "../../../components/Layout"
import HelmetWrapper from "../../../components/HelmetWrapper"
import styled from "styled-components"

import theme from "../../../assets/themes/theme"

import HubPage from "../../../components/HubPage"

const ElectricalIntro = () => {
  return (
    <Layout>
      <HelmetWrapper
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
