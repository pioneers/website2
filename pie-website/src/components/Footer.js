import React from "react"

import { AnchorLink as Link } from "gatsby-plugin-anchor-links"

import theme from "../assets/themes/theme"

import styled from "styled-components"

import sublinks from "../assets/data/data"
import CustomizedContainer from "./CustomizedContainer"

import { AiFillGithub } from "@react-icons/all-files/ai/AiFillGithub"
import { AiFillFacebook } from "@react-icons/all-files/ai/AiFillFacebook"
import { AiFillYoutube } from "@react-icons/all-files/ai/AiFillYoutube"

/*
Creates a footer component
*/
function Footer() {
  const d = new Date()
  const year = d.getFullYear()
  return (
    <CenteredContainer color={theme.colors.grey900}>
      <FooterWrapper>
        <div className="left">
          <h2>
            <Link to="/">Pioneers in Engineering</Link>
          </h2>
          <div>
            <div className="sp">
              <a
                href="mailto:leadership@pierobotics.org"
                target="_blank"
                rel="noreferrer"
              >
                leadership@pierobotics.org
              </a>
            </div>
            <div className="sp">
              <a href="https://www.google.com/maps/d/u/0/viewer?mid=1Sd6QurpSJK3xXEvOiISkWlKXj98&ll=37.87452100000002%2C-122.2592068&z=18">
                101 O'Brien Hall, Berkeley, CA 94704
              </a>
            </div>
            <div className="socials">
              <Link to="https://github.com/pioneers">
                <AiFillGithub />
              </Link>
              <Link to="https://www.facebook.com/pierobotics">
                <AiFillFacebook />
              </Link>
              <Link to="https://www.youtube.com/user/pierobotics">
                <AiFillYoutube />
              </Link>
            </div>
          </div>
        </div>
        <div className="links-container">
          {sublinks.map(item => {
            const { page, url, links } = item
            // console.log(links)
            return (
              <div>
                <HeaderLink to={url}>{page}</HeaderLink>
                {links.map(subsect => {
                  const { subsections } = subsect
                  return (
                    <React.Fragment>
                      {subsections.map((thing, idx) => {
                        const { label, url } = thing
                        return (
                          <CustomLink to={url} index={idx}>
                            {label}
                          </CustomLink>
                        )
                      })}
                    </React.Fragment>
                  )
                })}
                <hr className="hide" />
              </div>
            )
          })}
        </div>
      </FooterWrapper>
      <footer style={{ color: "white" }}>
        © Pioneers in Engineering {year}
      </footer>
      <hr style={{ color: "white" }} />
      <footer
        style={{
          color: "white",
          textAlign: "center",
          fontStyle: "italic",
          padding: "0 3rem",
        }}
      >
        We are a student group acting independently of the University of
        California. We take full responsibility for our organization and this
        website.
      </footer>
    </CenteredContainer>
  )
}

const CenteredContainer = styled(CustomizedContainer)`
  text-align: left;
  @media screen and (max-width: 776px) {
    text-align: center !important;
  }
`

const FooterWrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 2.5fr;
  grid-auto-flow: column;
  gap: 1rem;

  div,
  label {
    color: ${theme.colors.grey200};
  }

  input {
    background-color: ${theme.colors.grey800};
    border-radius: ${theme.borderRadius};
  }

  .links-container {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
  }

  .links-container a {
    color: ${theme.colors.grey200};
    font-size: 0.9rem;
    font-weight: 300;
    margin: 0.75rem 0rem;
  }

  .sp {
    font-weight: 400;
  }

  .socials {
    grid-template-columns: repeat(3, 1fr);
    display: grid;
    grid-auto-flow: row;
    text-align: center;
    margin: 0.5rem 0;
  }

  .socials > a {
    font-size: 2.25rem !important;
  }

  a:hover {
    color: ${theme.colors.grey400};
  }
  .left a {
    color: ${theme.colors.grey200};
  }
  .left a:hover {
    color: ${theme.colors.grey400};
  }

  .hide {
    display: none;
  }

  @media screen and (max-width: 1035px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr auto;
    padding: 0 2rem;

    gap: 1rem;

    .left {
      display: grid;
      gap: 1rem;
      grid-template-columns: 1fr 2fr 2fr;
    }

    .socials {
      text-align: left;
    }
  }

  @media screen and (max-width: 776px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr auto;
    padding: 0 2rem;

    gap: 1rem;

    .left {
      display: grid;
      gap: 1rem;
      grid-template-columns: 1fr;
    }

    .socials {
      text-align: center;
    }

    .links-container {
      display: block;
      text-align: center;
    }
    .links-container > div {
      margin-bottom: 1rem;
    }

    .hide {
      display: block;
    }
  }
`

const CustomLink = styled(Link)`
  display: block;
  color: ${theme.colors.grey700};

  &:hover {
    color: ${theme.colors.grey900};
  }
`

const HeaderLink = styled(CustomLink)`
  font-weight: 600 !important;
  margin-bottom: 0.75rem;
  font-size: 1rem !important;
  letter-spacing: ${theme.letterSpacing};
`

export default Footer
