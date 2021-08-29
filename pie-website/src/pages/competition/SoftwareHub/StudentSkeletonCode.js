import React from "react"
import CustomizedContainer from "../../../components/CustomizedContainer"
import Layout from "../../../components/Layout"
import HelmetWrapper from "../../../components/HelmetWrapper"

import HubPage from "../../../components/HubPage"
import styled from "styled-components"
import theme from "../../../assets/themes/theme"
const StudentSkeletonCode = () => {
  return (
    <Layout nav="black">
      <HelmetWrapper
        title="Student Skeleton Code"
        description="Here is the info for Student Skeleton Code"
      />

      <CustomizedContainer>
        <SoftwareBanner>
          <h1>Software Hub Page</h1>
        </SoftwareBanner>
        <HubPage name="Student Skeleton Code" mechanicalOrSoftware="Software" />
      </CustomizedContainer>
    </Layout>
  )
}
const SoftwareBanner = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.grey900};
  color: ${theme.colors.white};
  height: 15rem;
  border-radius: ${theme.borderRadius};
  margin-bottom: 4.5rem;
  padding: 2rem;

  @media screen and (max-width: 630px) {
    height: 10rem;
    h1 {
      font-size: 2rem;
    }
  }
`
export default StudentSkeletonCode
