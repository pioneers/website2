import React from "react"
import CustomizedContainer from "../../../components/CustomizedContainer"
import Layout from "../../../components/Layout"
import SEO from "../../../components/SEO"
import styled from "styled-components"

import theme from "../../../assets/themes/theme"

import HubPage from "../../../components/HubPage"

const StudentSkeletonCode = () => {
  return (
    <Layout>
      <SEO
        title="Student Skeleton Code"
        description="Here is the info for Student Skeleton Code"
      />

      <CustomizedContainer>
        <HubPage name="Student Skeleton Code" mechanicalOrSoftware="Software" />
      </CustomizedContainer>
    </Layout>
  )
}

export default StudentSkeletonCode
