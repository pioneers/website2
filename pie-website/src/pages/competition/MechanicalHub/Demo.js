import React from "react"
import CustomizedContainer from "../../../components/CustomizedContainer"
import Layout from "../../../components/Layout"
import HelmetWrapper from "../../../components/HelmetWrapper"

import HubPage from "../../../components/HubPage"

const Demo = () => {
  return (
    <Layout>
      <HelmetWrapper title="Demo" description="Here is the info for Demo" />

      <CustomizedContainer>
        <HubPage name="Demo" mechanicalOrSoftware="Mechanical" />
      </CustomizedContainer>
    </Layout>
  )
}

export default Demo
