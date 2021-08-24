import React from "react"
import CustomizedContainer from "../../../components/CustomizedContainer"
import Layout from "../../../components/Layout"
import SEO from "../../../components/SEO"
import styled from "styled-components"

import theme from "../../../assets/themes/theme"

import HubPage from "../../../components/HubPage"

const PowerDistributionBoard = () => {
  return (
    <Layout>
      <SEO
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
