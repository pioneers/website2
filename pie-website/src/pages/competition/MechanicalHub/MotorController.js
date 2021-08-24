import React from "react"
import CustomizedContainer from "../../../components/CustomizedContainer"
import Layout from "../../../components/Layout"
import SEO from "../../../components/Seo"
import styled from "styled-components"

import theme from "../../../assets/themes/theme"

import HubPage from "../../../components/HubPage"

const MotorController = () => {
  return (
    <Layout>
      <SEO
        title="Motor Controller"
        description="Here is the info for Motor Controller"
      />

      <CustomizedContainer>
        <HubPage name="Motor Controller" mechanicalOrSoftware="Mechanical" />
      </CustomizedContainer>
    </Layout>
  )
}

export default MotorController
