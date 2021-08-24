import React from "react"
import CustomizedContainer from "../../../components/CustomizedContainer"
import Layout from "../../../components/Layout"
import SEO from "../../../components/Seo"
import styled from "styled-components"

import theme from "../../../assets/themes/theme"

import HubPage from "../../../components/HubPage"

const QuickstartGuide = () => {
  return (
    <Layout>
      <SEO
        title="Quickstart Guide"
        description="Here is the info for Quickstart Guide"
      />

      <CustomizedContainer>
        <HubPage name="Quickstart Guide" mechanicalOrSoftware="Software" />
      </CustomizedContainer>
    </Layout>
  )
}

export default QuickstartGuide
