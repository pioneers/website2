import React, { useState } from "react"
import Container from "react-bootstrap/Container"
import Layout from "../../components/Layout"
import SEO from "../../components/Seo"
import Header from "../../components/Header"
import styled from "styled-components"
import CustomizedContainer from "../../components/CustomizedContainer"

import { projects } from "../../assets/data/projects"

import "../../assets/css/projects.css"

import pic from "../../assets/images/stock-images/pie-staff.jpg"

const ReadMore = ({ children, maxCharacterCount = 100 }) => {
  const [isTruncated, setIsTruncated] = useState(true)
  const text = children
  const resultString = isTruncated ? text.slice(0, maxCharacterCount) : text

  const toggleIsTruncated = () => {
    setIsTruncated(!isTruncated)
  }

  return (
    <p>
      {resultString + " "}
      <span onClick={toggleIsTruncated} className="read-more-button">
        {isTruncated ? "Read more..." : "Read less"}
      </span>
    </p>
  )
}

const Projects = () => {
  const seen = {}
  let departments
  return (
    <Layout>
      <SEO title="Projects" description="Project teams you can join!" />
      <HeroWrapper>
        <div className="hero-image">
          <div>
            <h1>Projects</h1>
          </div>
        </div>
      </HeroWrapper>
      <CustomizedContainer>
        <h1>Under Construction</h1>
      </CustomizedContainer>
      {/* <Container>
        <ProjectsContainer>
          <Header type="blue">PiE Projects</Header>
          {projects.forEach(project => {
            if (!seen.hasOwnProperty(project.department)) {
              seen[project.department] = 1
              departments = Object.keys(seen)
            }
          })}
          {departments.map(depart => {
            return (
              <>
                <DepartmentContainer>
                  <h2>{depart}</h2>
                </DepartmentContainer>
                <div className="grid">
                  {projects.map(proj => {
                    const {
                      project,
                      manager,
                      description,
                      department,
                      subdepartment,
                      numOfCharacters,
                    } = proj

                    if (depart === department) {
                      return (
                        <div>
                          <div className="square">
                            <h4>{project}</h4>
                          </div>
                          <p>{subdepartment ? subdepartment : department}</p>
                          {manager === undefined ? (
                            <p>PM: None</p>
                          ) : (
                            <p>PM: {manager}</p>
                          )}
                          <Paragraph>
                            {numOfCharacters === 100 ? (
                              description
                            ) : (
                              <ReadMore maxCharacterCount={numOfCharacters}>
                                {description}
                              </ReadMore>
                            )}
                          </Paragraph>
                        </div>
                      )
                    }
                    return
                  })}
                </div>
              </>
            )
          })}
        </ProjectsContainer>
      </Container> */}
    </Layout>
  )
}

const HeroWrapper = styled.div`
  .hero-image {
    background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7)),
      url(${pic}) center/cover fixed no-repeat;
    background-color: coral;
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
  }
`
const ProjectsContainer = styled.div`
  padding: 4rem 0;
`

const DepartmentContainer = styled.div`
  text-align: center;
  padding: 2rem 0;
`

const Paragraph = styled.p`
  line-height: 1.6;
  width: 80%;
  margin: 0 auto;
`

export default Projects
