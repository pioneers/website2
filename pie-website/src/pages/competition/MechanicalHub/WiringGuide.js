import React from "react"
import CustomizedContainer from "../../../components/CustomizedContainer"
import Layout from "../../../components/Layout"
import HelmetWrapper from "../../../components/HelmetWrapper"

import HubPage from "../../../components/HubPage"

const WiringGuide = () => {
  return (
    <Layout>
      <HelmetWrapper
        title="Wiring Guide"
        description="Here is the info for Wiring Guide"
      />

      <CustomizedContainer>
        <HubPage name="Wiring Guide" mechanicalOrSoftware="Mechanical" />
      </CustomizedContainer>
    </Layout>
  )
}

export default WiringGuide
