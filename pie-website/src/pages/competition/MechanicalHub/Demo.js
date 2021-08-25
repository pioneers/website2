import React from "react"
import CustomizedContainer from "../../../components/CustomizedContainer"
import Layout from "../../../components/Layout"
import SEO from "../../../components/Seo"
import styled from "styled-components"

import theme from "../../../assets/themes/theme"

import HubPage from "../../../components/HubPage"

const Demo = () => {
  return (
    <Layout>
      <SEO title="Demo" description="Here is the info for Demo" />

      <CustomizedContainer>
        <HubPage name="Demo" mechanicalOrSoftware="Mechanical" />
      </CustomizedContainer>
    </Layout>
  )
}

export default Demo
