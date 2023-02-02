import React, { useState } from "react"
import styled from "styled-components"
import theme from "../assets/themes/theme"

import SyntaxHighlighter from "react-syntax-highlighter"

import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs"

import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import Alert from "react-bootstrap/Alert"

import { BsClipboard } from "@react-icons/all-files/bs/BsClipboard"
import { AiOutlineCheck } from "@react-icons/all-files/ai/AiOutlineCheck"

import Button from "react-bootstrap/Button"

// https://dev.to/myogeshchavan97/an-easy-way-for-adding-copy-to-clipboard-functionality-in-react-app-4oo0
// https://www.youtube.com/watch?v=RnWmtpT6Ttg&ab_channel=AlexMerced-FullStackDeveloper
// https://edpike365.medium.com/gatsby-contentful-rich-text-migrate-to-gatsby-source-contentful-version-4-in-early-2021-321904587470
import { CopyToClipboard } from "react-copy-to-clipboard"

const query = graphql`
  {
    allContentfulSoftwareHubPosts {
      nodes {
        postContent {
          raw
          references {
            ... on ContentfulAsset {
              __typename
              contentful_id
              gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
              title
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

const HubPage = ({ name, mechanicalOrSoftware }) => {
  const data = useStaticQuery(query)
  console.log(data)
  let post
  let alert
  if (mechanicalOrSoftware === "Mechanical") {
    post = data.allContentfulMechanicalHubPosts.nodes.filter(
      item => item.name === name
    )[0].postContent
    alert = data.allContentfulMechanicalHubPosts.nodes.filter(
      item => item.name === name
    )[0].alerts
  } else {
    post = data.allContentfulSoftwareHubPosts.nodes.filter(
      item => item.name === name
    )[0].postContent
    alert = data.allContentfulSoftwareHubPosts.nodes.filter(
      item => item.name === name
    )[0].alerts
  }

  console.log(post)
  console.log(alert)

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

  const RenderedGastbyImage = ({ children }) => {
    const img = children.data.target.gatsbyImageData
    return <CustomGatsbyImage image={img} />
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
                </ListItem>
              )
            })}
          </ol>
        )
      },
      [BLOCKS.EMBEDDED_ASSET]: node => {
        return <RenderedGastbyImage>{node}</RenderedGastbyImage>
      },
      [BLOCKS.QUOTE]: quote => {
        return <BlockQuote>{quote}</BlockQuote>
      },
    },
    renderMark: {
      [MARKS.CODE]: codeInline => {
        console.log(typeof codeInline)
        if (codeInline.length === 0) {
          return
        }
        return <InlineCode>{codeInline}</InlineCode>
      },
    },
  }
  const output = renderRichText(post, options)
  return (
    <React.Fragment>
      {alert.map((thing, idx) => {
        return <AlertDismissible key={idx}>{thing}</AlertDismissible>
      })}
      <CustomDiv>{output}</CustomDiv>
    </React.Fragment>
  )
}

export default HubPage

const CustomDiv = styled.div`
  color: ${theme.colors.grey900};
  margin: 0.5rem;
`

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
