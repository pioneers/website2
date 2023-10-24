import React from "react"

import theme from "../assets/themes/theme"
import styled from "styled-components"
import Col from "react-bootstrap/esm/Col"
import CustomizedContainer from "../components/CustomizedContainer"
import HelmetWrapper from "../components/HelmetWrapper"
import Layout from "../components/Layout"
import { AnchorLink as Link } from "gatsby-plugin-anchor-links"
import { GrDocumentPdf } from "@react-icons/all-files/gr/GrDocumentPdf"

const Policies = () => {
  return (
    <Layout>
      <HelmetWrapper
        title="Policies"
        description="Our policies as an organization"
      />
      <HeroWrapper>
        <div className="filler"></div>
        <div className="hero-image">
          <div>
            <h1>Our Policies</h1>
          </div>
        </div>
      </HeroWrapper>
      <CustomizedContainer color="#f4f4f5">
        <Resources>
          <div className="section">
            <h2>Non-Discrimination Resolution</h2>
            <p>
              This document establishes that PiE-Foundation will not discriminate based on a variety of characteristics when considering membership into PiE Foundation.
            </p>
            <GrDocumentPdf />
            <Link to="/assets/policies/pie_foundation_non_discrimination_resolution.pdf">
            PiE Foundation Non-Discrimination Resolution &rsaquo;
            </Link>
          </div>
        </Resources>
        <Resources>
          <div className="section">
            <h2>Sexual Violence and Sexual Harassment Policy</h2>
            <p>
            This document specifies the guidelines PiE will follow to create a safe environment for all PiE-affiliated individuals.
            </p>
            <GrDocumentPdf />
            <Link to="/assets/policies/pie_policy_framework_for_sexual_violence_and_sexual_harassment.pdf">
              Policy Framework for Sexual Violence and Sexual Harassment &rsaquo;
            </Link>
          </div>
        </Resources>
        <Resources>
          <div className="section">
            <h2>Interactions between PiE Affiliates and High School Students</h2>
            <p>
            This document specifies the guidelines all PiE affiliates should follow when working with high school students
            </p>
            <GrDocumentPdf />
            <Link to="/assets/policies/pie_policy_on_interactions_between_pie_staff_mentors_and_high_school_students.pdf">
            Policy on Interactions Between PiE Staff/Mentors and High School Students &rsaquo;
            </Link>
          </div>
        </Resources>
      </CustomizedContainer>
    </Layout>
  )
}

const HeroWrapper = styled.div`
  .filler {
    position: relative;
    height: 25vh;
    z-index: -1;
  }
  .hero-image {
    background: ${theme.colors.blue700};
    height: 30vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: ${theme.colors.white};
    top: 0;
    z-index: -1;
    position: absolute;
    padding: 1rem;
    h1 {
      font-size: 5rem;
    }
  }
`

const Resources = styled(Col)`
  p {
    margin-bottom: 0.5rem;
    line-height: 1.15rem;
  }

  a {
    padding-left: 0.75rem;
    font-size: 16px;
  }

  div.section {
    margin-bottom: 3rem;
  }

  h2 {
    line-height: 1.2rem;
    color: ${theme.colors.blue600};
    margin: 0.25rem 0 1.5rem 0;
  }
`

export default Policies
