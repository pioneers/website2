import React from "react"
import CustomizedContainer from "../../../components/CustomizedContainer"
import Layout from "../../../components/Layout"
import SEO from "../../../components/SEO"
import styled from "styled-components"

import theme from "../../../assets/themes/theme"

import HubPage from "../../../components/HubPage"

const TeamFlag = () => {
  return (
    <Layout>
      <SEO title="Team Flag" description="Here is the info for Team Flag" />

      <CustomizedContainer>
        <HubPage name="Team Flag" mechanicalOrSoftware="Mechanical" />
      </CustomizedContainer>
    </Layout>
  )
}

export default TeamFlag
