import React from "react"
import CustomizedContainer from "../../../components/CustomizedContainer"
import Layout from "../../../components/Layout"
import HelmetWrapper from "../../../components/HelmetWrapper"

import HubPage from "../../../components/HubPage"

const MotorController = () => {
  return (
    <Layout>
      <HelmetWrapper
        title="Motor Controller"
        description="Here is the info for Motor Controller"
      />

      <CustomizedContainer>
        <HubPage name="Motor Controller" mechanicalOrSoftware="Mechanical" />
      </CustomizedContainer>
    </Layout>
  )
}

export default MotorController
