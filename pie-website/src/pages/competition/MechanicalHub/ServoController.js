import React from "react"
import CustomizedContainer from "../../../components/CustomizedContainer"
import Layout from "../../../components/Layout"
import HelmetWrapper from "../../../components/HelmetWrapper"
import styled from "styled-components"

import theme from "../../../assets/themes/theme"

import HubPage from "../../../components/HubPage"

const ServoController = () => {
  return (
    <Layout>
      <HelmetWrapper
        title="Servo Controller"
        description="Here is the info for Servo Controller"
      />

      <CustomizedContainer>
        <HubPage name="Servo Controller" mechanicalOrSoftware="Mechanical" />
      </CustomizedContainer>
    </Layout>
  )
}

export default ServoController
