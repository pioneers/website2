import React from "react"

import { AnchorLink as Link } from "gatsby-plugin-anchor-links"

import theme from "../assets/themes/theme"

import Container from "react-bootstrap/esm/Container"

import styled, { css } from "styled-components"

const Boxes = (props, children) => {
  return (
    <BoxesWrapper fluid props={props}>
      {children}
    </BoxesWrapper>
  )
}

const BoxesWrapper = styled(Container)`
  .container {
    display: grid;
    grid-template-columns: repeat(
      ${props => (!props.cols ? "3" : props.cols)},
      1fr
    );
    grid-column-gap: ${props => (!props.gap ? "1rem" : props.gap)};
    grid-row-gap: 1rem;

    margin-top: 2rem;
    width: ${props => (!props.width ? "100%" : props.width)};
  }

  .container > div {
    ${props =>
      !props.display
        ? css`
            display: flex;
            flex-direction: column;
            ${props =>
              props.align === "center"
                ? css`
                    align-items: center;
                    text-align: center;
                    justify-content: center;
                  `
                : ""}
          `
        : css`
            display: block;
          `}

    background-color: ${props =>
      !props.backgroundColor ? theme.colors.blue500 : props.backgroundColor};

    padding: ${props => (!props.padding ? "3rem 1.5rem" : props.padding)};

    border-radius: 0.25rem;
    box-shadow: ${theme.shadows.darkShadow};
  }

  .container > div > h1,
  .container > div > h2,
  .container > div > h3,
  .container > div > h4,
  .container > div > h5 {
    color: ${props =>
      !props.headerColor ? theme.colors.white : props.headerColor};
  }
  .container > div > p {
    color: ${props =>
      !props.textColor ? theme.colors.white : props.textColor};
  }

  .container > div > svg {
    font-size: ${props => (!props.iconSize ? "6rem" : props.iconSize)};
    margin-bottom: 1rem;
    color: ${props =>
      !props.iconColor ? theme.colors.white : props.iconColor};
  }
`
