import React from "react"
import CustomizedContainer from "../../../components/CustomizedContainer"
import Layout from "../../../components/Layout"
import HelmetWrapper from "../../../components/HelmetWrapper"

import HubPage from "../../../components/HubPage"

const Autonomous = () => {
  return (
    <Layout>
      <HelmetWrapper
        title="Autonomous"
        description="Here is the info for Autonomous"
      />

      <CustomizedContainer>
        <HubPage name="Autonomous" mechanicalOrSoftware="Software" />
      </CustomizedContainer>
    </Layout>
  )
}

export default Autonomous
