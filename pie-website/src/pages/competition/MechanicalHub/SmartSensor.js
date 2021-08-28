import React from "react"
import CustomizedContainer from "../../../components/CustomizedContainer"
import Layout from "../../../components/Layout"
import HelmetWrapper from "../../../components/HelmetWrapper"
import styled from "styled-components"

import theme from "../../../assets/themes/theme"

import HubPage from "../../../components/HubPage"

const SmartSensor = () => {
  return (
    <Layout>
      <HelmetWrapper
        title="Smart Sensor"
        description="Here is the info for Smart Sensor"
      />

      <CustomizedContainer>
        <HubPage name="Smart Sensor" mechanicalOrSoftware="Mechanical" />
      </CustomizedContainer>
    </Layout>
  )
}

export default SmartSensor
