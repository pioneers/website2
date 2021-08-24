import React from "react"
import CustomizedContainer from "../../../components/CustomizedContainer"
import Layout from "../../../components/Layout"
import SEO from "../../../components/Seo"
import styled from "styled-components"

import theme from "../../../assets/themes/theme"

import HubPage from "../../../components/HubPage"

const Autonomous = () => {
  return (
    <Layout>
      <SEO title="Autonomous" description="Here is the info for Autonomous" />

      <CustomizedContainer>
        <HubPage name="Autonomous" mechanicalOrSoftware="Software" />
      </CustomizedContainer>
    </Layout>
  )
}

export default Autonomous
