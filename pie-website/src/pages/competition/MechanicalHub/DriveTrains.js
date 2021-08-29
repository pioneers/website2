import React from "react"
import CustomizedContainer from "../../../components/CustomizedContainer"
import Layout from "../../../components/Layout"
import HelmetWrapper from "../../../components/HelmetWrapper"
import styled from "styled-components"

import theme from "../../../assets/themes/theme"

import HubPage from "../../../components/HubPage"

const DriveTrains = () => {
  return (
    <Layout>
      <HelmetWrapper
        title="Drive Trains"
        description="Here is the info for Drive Trains"
      />

      <CustomizedContainer>
        <HubPage name="Drive Trains" mechanicalOrSoftware="Mechanical" />
      </CustomizedContainer>
    </Layout>
  )
}

export default DriveTrains
