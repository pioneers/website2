import React from "react"
import CustomizedContainer from "../../../components/CustomizedContainer"
import Layout from "../../../components/Layout"
import SEO from "../../../components/Seo"
import styled from "styled-components"

import theme from "../../../assets/themes/theme"

import HubPage from "../../../components/HubPage"

const Teleop = () => {
  return (
    <Layout>
      <SEO title="Teleop" description="Here is the info for Teleop" />

      <CustomizedContainer>
        <HubPage name="Teleop" mechanicalOrSoftware="Software" />
      </CustomizedContainer>
    </Layout>
  )
}

export default Teleop
