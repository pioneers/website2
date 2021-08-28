import React from "react"
import CustomizedContainer from "../../../components/CustomizedContainer"
import Layout from "../../../components/Layout"
import HelmetWrapper from "../../../components/HelmetWrapper"
import styled from "styled-components"

import theme from "../../../assets/themes/theme"

import HubPage from "../../../components/HubPage"

const DawnGuide = () => {
  return (
    <Layout>
      <HelmetWrapper
        title="Dawn Guide"
        description="Here is the quickstart information for Dawn"
      />

      <CustomizedContainer>
        <HubPage name="Dawn Guide" mechanicalOrSoftware="Software" />
      </CustomizedContainer>
    </Layout>
  )
}

export default DawnGuide
