// import React from "react"
// import CustomizedContainer from "../../../components/CustomizedContainer"
// import Layout from "../../../components/Layout"
// import SEO from "../../../components/SEO"
// import styled from "styled-components"

// import theme from "../../../assets/themes/theme"

// import HubPage from "../../../components/HubPage"

// const Demo = () => {
//   return (
//     <Layout>
//       <SEO title="Demo" description="Here is the info for Demo" />

//       <CustomizedContainer>
//         <HubPage name="Demo" mechanicalOrSoftware="Mechanical" />
//       </CustomizedContainer>
//     </Layout>
//   )
// }

// export default Demo

/////////////////////////////////////////////////////////////////////

import React, { useState } from "react"
import CustomizedContainer from "../../../components/CustomizedContainer"
import Layout from "../../../components/Layout"
import SEO from "../../../components/SEO"
import styled from "styled-components"

import SyntaxHighlighter from "react-syntax-highlighter"

import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs"

import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import Alert from "react-bootstrap/Alert"

import theme from "../../../assets/themes/theme"

import { BsClipboard } from "@react-icons/all-files/bs/BsClipboard"
import { AiOutlineCheck } from "@react-icons/all-files/ai/AiOutlineCheck"

import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import Button from "react-bootstrap/Button"

// https://dev.to/myogeshchavan97/an-easy-way-for-adding-copy-to-clipboard-functionality-in-react-app-4oo0
// https://www.youtube.com/watch?v=RnWmtpT6Ttg&ab_channel=AlexMerced-FullStackDeveloper
// https://edpike365.medium.com/gatsby-contentful-rich-text-migrate-to-gatsby-source-contentful-version-4-in-early-2021-321904587470
import { CopyToClipboard } from "react-copy-to-clipboard"

const query = graphql`
  {
    allContentfulMechanicalHubPosts(filter: { name: { eq: "Demo" } }) {
      nodes {
        postContent {
          raw
          references {
            ... on ContentfulAsset {
              __typename
              contentful_id
              gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
              title
              id
              internal {
                mediaType
                content
                description
              }
              sys {
                type
                revision
              }
              file {
                details {
                  image {
                    height
                    width
                  }
                  size
                }
                fileName
                url
              }
            }
            ... on ContentfulBanner {
              __typename
              id
              backgroundImage {
                gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
                sys {
                  type
                  revision
                }
              }
              banner
              contentful_id
              sys {
                contentType {
                  sys {
                    linkType
                    type
                    id
                  }
                }
              }
              node_locale
            }
            ... on ContentfulProjects {
              id
              name
              description {
                raw
              }
              program
              contentful_id
              sys {
                contentType {
                  sys {
                    linkType
                    type
                    id
                  }
                }
              }
              node_locale
            }
            ... on ContentfulPostTwoColumns {
              __typename
              contentful_id
              id
              name
              columnOne {
                raw
              }
              columnTwo {
                raw
              }
              sys {
                contentType {
                  sys {
                    id
                    linkType
                    type
                  }
                }
              }
            }
          }
        }
        name
        alerts
      }
    }
  }
`

const AlertDismissible = ({ children }) => {
  const [show, setShow] = useState(true)

  if (show && children !== "temp") {
    return (
      <CustomAlert variant="warning" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>Important Information</Alert.Heading>
        <p>{children}</p>
      </CustomAlert>
    )
  }
  return <div></div>
}

const Demo = () => {
  const data = useStaticQuery(query)
  console.log(data)

  const post = data.allContentfulMechanicalHubPosts.nodes[0].postContent
  const alert = data.allContentfulMechanicalHubPosts.nodes[0].alerts

  const [isToggled, setIsToggled] = useState(false)
  const [isCopied, setIsCopied] = useState(false)

  const toggleIcon = () => {
    setIsToggled(true)
    setTimeout(() => {
      setIsToggled(false)
    }, 1000)
  }

  const onCopyText = () => {
    setIsCopied(true)
    setTimeout(() => {
      setIsCopied(false)
    }, 1000)
  }

  const CodeBlock = ({ children }) => {
    const block = children.content[0].value.trim()
    return (
      <BlockCode>
        <CopyToClipboard text={block} onCopy={onCopyText}>
          <div className="copy-area">
            <Button onClick={toggleIcon}>
              {!isToggled && <BsClipboard />}
              {isToggled && <AiOutlineCheck />}
            </Button>
          </div>
        </CopyToClipboard>
        <SyntaxHighlighter language="python" style={docco}>
          {block}
        </SyntaxHighlighter>
      </BlockCode>
    )
  }

  const RenderEmbeddedEntry = ({ stuff }) => {
    // const img = children.data.target.gatsbyImageData
    // return <CustomGatsbyImage image={img} />
    console.log(stuff)
    const data = stuff.data.target
    console.log(data)
    console.log(data.__typename)
    if (data.__typename === "ContentfulPostTwoColumns") {
      console.log("We in this bitch")
      const colOne = renderRichText(data.columnOne, options)
      const colTwo = renderRichText(data.columnTwo, options)
      return (
        <Row>
          <Col sm={12} md={6} lg={6}>
            {colOne}
          </Col>
          <Col sm={12} md={6} lg={6} l>
            {colTwo}
          </Col>
        </Row>
      )
    } else if (data.__typename === "ContentfulBanner") {
      return (
        <Banner>
          <h1 className="header-h1">{data.banner}</h1>
          <GatsbyImage
            image={data.backgroundImage.gatsbyImageData}
            className="header-img"
            style={{ filter: "brightness(60%)" }}
          />
        </Banner>
      )
    }
    return <div> not found</div>
  }

  const BlockQuote = ({ children }) => {
    const con = children.content
    return (
      <React.Fragment>
        {con.map(item => {
          const temp = item.content
          return (
            <QuoteWrapper>
              {temp.map(thing => {
                if (thing.nodeType === "hyperlink") {
                  return (
                    <React.Fragment>
                      {thing.content.map(those => {
                        if (those.marks !== null) {
                          let classes = ""
                          for (let i = 0; i < those.marks.length; i++) {
                            classes += those.marks[i].type + " "
                          }
                          return (
                            <a href={thing.data.uri} className={classes}>
                              {those.value}
                            </a>
                          )
                        } else {
                          return (
                            <a href={thing.data.uri}>{thing.content.value}</a>
                          )
                        }
                      })}
                    </React.Fragment>
                  )
                } else {
                  if (thing.marks !== null) {
                    let classes = ""
                    for (let i = 0; i < thing.marks.length; i++) {
                      classes += thing.marks[i].type + " "
                    }
                    return <span className={classes}>{thing.value}</span>
                  } else {
                    return <span>{thing.value}</span>
                  }
                }
              })}
            </QuoteWrapper>
          )
        })}
      </React.Fragment>
    )
  }

  const options = {
    renderNode: {
      [BLOCKS.HEADING_6]: codeBlock => {
        return <CodeBlock>{codeBlock}</CodeBlock>
      },
      [BLOCKS.EMBEDDED_ENTRY]: thing => {
        // console.log(thing)
        return <RenderEmbeddedEntry stuff={thing}></RenderEmbeddedEntry>
      },
      [BLOCKS.UL_LIST]: list => {
        const ul = list.content
        return (
          <ul style={{ listStyle: "inside" }}>
            {ul.map(item => {
              const temp = item.content[0].content
              return (
                <ListItem>
                  {temp.map(thing => {
                    if (thing.nodeType === "hyperlink") {
                      return (
                        <React.Fragment>
                          {thing.content.map(those => {
                            if (those.marks !== null) {
                              let classes = ""
                              for (let i = 0; i < those.marks.length; i++) {
                                classes += those.marks[i].type + " "
                              }
                              return (
                                <a href={thing.data.uri} className={classes}>
                                  {those.value}
                                </a>
                              )
                            } else {
                              return (
                                <a href={thing.data.uri}>
                                  {thing.content.value}
                                </a>
                              )
                            }
                          })}
                        </React.Fragment>
                      )
                    } else {
                      if (thing.marks !== null) {
                        let classes = ""
                        for (let i = 0; i < thing.marks.length; i++) {
                          classes += thing.marks[i].type + " "
                        }
                        return <span className={classes}>{thing.value}</span>
                      } else {
                        return <span>{thing.value}</span>
                      }
                    }
                  })}
                </ListItem>
              )
            })}
          </ul>
        )
      },
      [BLOCKS.OL_LIST]: list => {
        const ul = list.content
        return (
          <ol style={{ listStyle: "decimal", paddingLeft: "1rem" }}>
            {ul.map(item => {
              const temp = item.content[0].content
              return (
                <ListItem>
                  {temp.map(thing => {
                    if (thing.nodeType === "hyperlink") {
                      return (
                        <React.Fragment>
                          {thing.content.map(those => {
                            if (those.marks !== null) {
                              let classes = ""
                              for (let i = 0; i < those.marks.length; i++) {
                                classes += those.marks[i].type + " "
                              }
                              return (
                                <a href={thing.data.uri} className={classes}>
                                  {those.value}
                                </a>
                              )
                            } else {
                              return (
                                <a href={thing.data.uri}>
                                  {thing.content.value}
                                </a>
                              )
                            }
                          })}
                        </React.Fragment>
                      )
                    } else {
                      if (thing.marks !== null) {
                        let classes = ""
                        for (let i = 0; i < thing.marks.length; i++) {
                          classes += thing.marks[i].type + " "
                        }
                        return <span className={classes}>{thing.value}</span>
                      } else {
                        return <span>{thing.value}</span>
                      }
                    }
                  })}
                  {/* {item.content[0].content.map(listitem => {
                    return <span>{listitem.value}</span>
                  })} */}
                </ListItem>
              )
            })}
          </ol>
        )
      },
      [BLOCKS.EMBEDDED_ASSET]: node => {
        // return <RenderedGastbyImage>{node}</RenderedGastbyImage>
        return <div> hi</div>
      },
      [BLOCKS.QUOTE]: quote => {
        return <BlockQuote>{quote}</BlockQuote>
      },
    },
    renderMark: {
      [MARKS.CODE]: codeInline => {
        if (codeInline.length === 0) {
          return
        }
        return <InlineCode>{codeInline}</InlineCode>
      },
    },
  }
  const output = renderRichText(post, options)
  return (
    <Layout>
      <SEO
        title="Quickstart Guide"
        description="Here is the quickstart information for Dawn"
      />

      <CustomizedContainer>
        {alert.map((thing, idx) => {
          return <AlertDismissible key={idx}>{thing}</AlertDismissible>
        })}
        <CustomDiv style={{ padding: "1rem", color: theme.colors.grey900 }}>
          {output}
        </CustomDiv>

        <iframe
          frameborder="0"
          width="100%"
          height="500px"
          src="https://replit.com/@JonathanAtkins1/Test?lite=true"
        ></iframe>
      </CustomizedContainer>
    </Layout>
  )
}

const Banner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 0.5rem;

  .header-img {
    width: 100%;
    height: 18rem;
    border-radius: 0.25rem;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
      0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }

  .header-h1 {
    position: absolute;
    color: white;
    z-index: 3;
    margin: 1rem;
  }

  @media screen and (max-width: 520px) {
    .header-h1 {
      font-size: 2.5rem;
    }
  }
`

const CustomDiv = styled.div``

const CustomGatsbyImage = styled(GatsbyImage)`
  margin: 2.5rem 0;
  img {
    border-radius: ${theme.borderRadius};
  }
`

const CustomAlert = styled(Alert)`
  color: ${theme.colors.grey900};
  padding: 1rem 1.5rem 0 1.5rem;
  p {
    color: ${theme.colors.grey900};
  }
`

const QuoteWrapper = styled.blockquote`
  padding: 0 2rem;
  margin: 1rem 0.5rem;
  color: ${theme.colors.grey900};
  border-left: 5px solid ${theme.colors.grey500};
  .code {
    color: #d63384;
    word-wrap: break-word;
    padding: 0 0.25rem;
    background-color: #e4e4e7;
    border-radius: 0.25rem;
  }
  .italic {
    font-style: italic;
  }
  .bold {
    font-weight: bolder;
  }
  .underline {
    text-decoration: underline;
  }
`

const InlineCode = styled.code`
  padding: 0 0.25rem;
  background-color: ${theme.colors.grey200};
  border-radius: ${theme.borderRadius};
`

const BlockCode = styled.pre`
  position: relative;
  padding: 4rem 2.5rem 2.5rem 2.5rem;
  background-color: ${theme.colors.grey200};
  border-radius: ${theme.borderRadius};
  width: 100%;
  button {
    position: absolute;
    right: 1rem;
    top: 1rem;
  }
  .btn:focus {
    outline: none;
    box-shadow: none;
  }
  pre {
    background: ${theme.colors.grey200} !important;
    margin: 0;
    padding: 0;
    font-size: 1rem;
    overflow-x: auto;
  }
`

const ListItem = styled.li`
  color: ${theme.colors.grey700};
  .code {
    color: #d63384;
    word-wrap: break-word;
    padding: 0 0.25rem;
    background-color: #e4e4e7;
    border-radius: 0.25rem;
  }
  .italic {
    font-style: italic;
  }
  .bold {
    font-weight: bolder;
  }
  .underline {
    text-decoration: underline;
  }
`
export default Demo
