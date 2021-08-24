// in here will be a box styled component and then you will only have to override a couple of things

import Container from "react-bootstrap/esm/Container"
import styled, { css } from "styled-components"
import theme from "./theme"

// use example:
// <BoxesWrapper width="90%">
// <Row className="container">
//     <Col>
//         <div> ... </div>
//     </Col>
//     <Col>
//         <div> ... </div>
//     </Col>
//     <Col>
//         <div> ... </div>
//     </Col>
// </Row>
// </BoxesWrapper>

// props:
//     cols:
//          1 2 3 4 ...
//     align
//     center
//     gap
//     display
//     backgroundColor
//     textColor
//     headerColor
//     iconColor
//     width
//     iconSize
//     padding
export const BoxesWrapper = styled(Container)`
  display: flex;
  justify-content: center; // necessary

  width: 100%;
  height: 100%;

  // row
  .inner-container {
    width: ${props => (!props.width ? "100%" : props.width)};

    width: 100%;
    height: 100%;
  }

  // col
  .inner-container > div {
    padding: 0.75rem 0.75rem;
    background-color: inherit;
  }

  // card
  .inner-container > div > div {
    width: 100%;
    height: 100%;

    background-color: ${props =>
      !props.backgroundColor ? theme.colors.blue500 : props.backgroundColor};
  }

  // card body
  .inner-container > div > div > div {
    height: 100%;
    background-color: inherit;
    ${props =>
      !props.display &&
      css`
        display: flex;
        flex-direction: column;
        ${props =>
          props.align === "center" &&
          css`
            text-align: center;
            justify-content: center;
            align-items: center;
          `}
      `}

    padding: ${props =>
      !props.padding ? "1.5rem 1.25rem 1rem 1.25rem" : props.padding};

    border-radius: 0.25rem;
    box-shadow: ${theme.shadows.otherShadow};

    height: 100%;
    width: 100%;
  }

  .inner-container > div > div > div > h1,
  .inner-container > div > div > div > h2,
  .inner-container > div > div > div > h3,
  .inner-container > div > div > div > h4,
  .inner-container > div > div > div > h5 {
    color: ${props =>
      !props.headerColor ? theme.colors.white : props.headerColor};
  }
  .inner-container > div > div > div > p {
    color: ${props =>
      !props.textColor ? theme.colors.white : props.textColor};
  }

  .inner-container > div > div > div > svg {
    font-size: ${props => (!props.iconSize ? "6rem" : props.iconSize)};
    margin-bottom: 1rem;
    color: ${props =>
      !props.iconColor ? theme.colors.white : props.iconColor};
  }
`
