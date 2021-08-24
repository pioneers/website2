import React from "react"
import CustomizedContainer from "../../../components/CustomizedContainer"
import Layout from "../../../components/Layout"
import SEO from "../../../components/Seo"
import styled from "styled-components"

import theme from "../../../assets/themes/theme"

import HubPage from "../../../components/HubPage"

const RFIDSensor = () => {
  return (
    <Layout>
      <SEO title="RFID Sensor" description="Here is the info for RFIDSensor" />

      <CustomizedContainer>
        <HubPage name="RFID Sensor" mechanicalOrSoftware="Mechanical" />
      </CustomizedContainer>
    </Layout>
  )
}

export default RFIDSensor
