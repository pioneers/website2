import React from "react"
import CustomizedContainer from "../../../components/CustomizedContainer"
import Layout from "../../../components/Layout"
import HelmetWrapper from "../../../components/HelmetWrapper"
import styled from "styled-components"

import theme from "../../../assets/themes/theme"

import HubPage from "../../../components/HubPage"

const PowerDistributionBoard = () => {
  return (
    <Layout>
      <HelmetWrapper
        title="Power Distribution Board"
        description="Here is the info for Power Distribution Board"
      />

      <CustomizedContainer>
        <HubPage
          name="Power Distribution Board"
          mechanicalOrSoftware="Mechanical"
        />
      </CustomizedContainer>
    </Layout>
  )
}

export default PowerDistributionBoard
