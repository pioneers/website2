import React, { useState } from "react"

import Container from "react-bootstrap/Container"

import Tabs from "react-bootstrap/Tabs"
import Tab from "react-bootstrap/Tab"

import styled from "styled-components"
import theme from "../assets/themes/theme"

import Modal from "react-bootstrap/Modal"
import Carousel from "react-bootstrap/Carousel"

import Layout from "../components/Layout"

import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import SEO from "../components/Seo"

import pic from "../assets/images/about-us/gallery_hero.jpg"

const years = [2019, 2016, 2015, 2014, 2013]

const query = graphql`
  {
    allFile {
      nodes {
        name
        relativeDirectory
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
      distinct(field: relativeDirectory)
      totalCount
    }
  }
`

const GalleryModal = ({ picture, index, data }) => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const [picIndex, setPicIndex] = useState(index)
  const handleSelect = (selectedIndex, e) => {
    setPicIndex(selectedIndex)
  }

  return (
    <GalleryPicture>
      <div onClick={handleShow} className="non-phone">
        <GatsbyImage
          image={picture.childImageSharp.gatsbyImageData}
          className="img-gallery"
        />
      </div>
      <div className="phone">
        <GatsbyImage
          image={picture.childImageSharp.gatsbyImageData}
          className="img-gallery"
        />
      </div>

      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <Carousel
            variant="light"
            indicators="false"
            interval={null}
            activeIndex={picIndex}
            onSelect={handleSelect}
          >
            {data.map(pic => {
              return (
                <Carousel.Item>
                  <GatsbyImage image={pic.childImageSharp.gatsbyImageData} />
                </Carousel.Item>
              )
            })}
          </Carousel>
        </Modal.Body>
      </Modal>
    </GalleryPicture>
  )
}

const Gallery = () => {
  const imageData = useStaticQuery(query)
  const nodes = imageData.allFile.nodes

  return (
    <Layout>
      <SEO
        title="Gallery"
        description="On this page we have a gallery of photos from our events over the years."
      />
      <HeroWrapper>
        <div className="placeholder"></div>
        <div className="hero-image">
          <div>
            <h1>Gallery</h1>
          </div>
        </div>
      </HeroWrapper>
      <Container style={{ maxWidth: "1020px" }}>
        <GalleryWrapper>
          <Tabs className="tabs">
            {years.map(year => {
              const filteredNodes = nodes.filter(node =>
                node.relativeDirectory.includes(year)
              )
              const headerNodes = filteredNodes.filter(node =>
                node.name.includes("-h")
              )
              const galleryNodes = filteredNodes.filter(
                node => !node.name.includes("-h")
              )

              return (
                <Tab eventKey={year} title={year}>
                  {headerNodes.map(item => {
                    const sectionNodes = galleryNodes.filter(
                      pic => item.relativeDirectory === pic.relativeDirectory
                    )
                    return (
                      <React.Fragment>
                        <article style={{ marginTop: "2rem 0" }}>
                          <div className="gallery-header">
                            <h1 className="gallery-header-h1">
                              {item.relativeDirectory}
                            </h1>
                            <GatsbyImage
                              image={item.childImageSharp.gatsbyImageData}
                              className="gallery-header-img"
                              style={{ filter: "brightness(60%)" }}
                            />
                          </div>
                          <div className="gallery">
                            {sectionNodes.map((picture, index) => {
                              return (
                                <GalleryModal
                                  index={index}
                                  data={sectionNodes}
                                  picture={picture}
                                />
                              )
                            })}
                          </div>
                        </article>
                      </React.Fragment>
                    )
                  })}
                </Tab>
              )
            })}
          </Tabs>
        </GalleryWrapper>
      </Container>
    </Layout>
  )
}

const HeroWrapper = styled.div`
  .hero-image {
    background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5)),
      url(${pic}) center/cover fixed no-repeat;
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: ${theme.colors.white};
    top: 0;
    position: absolute;
    z-index: -1;
    padding: 1rem;
  }
  .placeholder {
    height: 90vh;
    width: 100%;
  }
`

const GalleryWrapper = styled.div`
  .gallery-header {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-bottom: 0.5rem;
  }

  .gallery-header-img {
    width: 100%;
    height: 18rem;
    border-radius: 0.25rem;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
      0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }

  .gallery-header-h1 {
    position: absolute;
    color: white;
    z-index: 3;
    margin: 1rem;
  }

  .gallery {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
  .img-gallery {
    height: 15rem;
    width: 15rem;
    margin: 0.25rem;
    border-radius: 0.25rem;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
      0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }

  .tabs {
    margin: 2rem 0;
  }

  @media screen and (max-width: 520px) {
    .gallery {
      display: block;
    }
    .img-gallery {
      height: auto;
      width: 100%;
      margin: 0.25rem 0;
    }

    .gallery-header-h1 {
      font-size: 2.5rem;
    }
  }
`

const GalleryPicture = styled.div`
  .non-phone {
    display: block;
  }
  .phone {
    display: none;
  }
  @media screen and (max-width: 520px) {
    .non-phone {
      display: none;
    }
    .phone {
      display: block;
    }
  }
`

export default Gallery
