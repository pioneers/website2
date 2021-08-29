import React from "react"
import CustomizedContainer from "../../../components/CustomizedContainer"
import Layout from "../../../components/Layout"
import HelmetWrapper from "../../../components/HelmetWrapper"

import HubPage from "../../../components/HubPage"

const QuickstartGuide = () => {
  return (
    <Layout>
      <HelmetWrapper
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
