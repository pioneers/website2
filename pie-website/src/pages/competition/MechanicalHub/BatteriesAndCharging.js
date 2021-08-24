import React from "react"
import CustomizedContainer from "../../../components/CustomizedContainer"
import Layout from "../../../components/Layout"
import SEO from "../../../components/SEO"
import styled from "styled-components"

import theme from "../../../assets/themes/theme"

import HubPage from "../../../components/HubPage"

const BatteriesAndCharging = () => {
  return (
    <Layout>
      <SEO
        title="Batteries and Charging"
        description="Here is the info for BatteriesAndCharging"
      />

      <CustomizedContainer>
        <HubPage
          name="Batteries and Charging"
          mechanicalOrSoftware="Mechanical"
        />
      </CustomizedContainer>
    </Layout>
  )
}

export default BatteriesAndCharging
