import React from "react"
import Container from "react-bootstrap/esm/Container"

import styled from "styled-components"
import AlternativeButton from "../components/AlternativeButton"
import SEO from "../components/SEO"
import GlobalStyles from "../assets/themes/globalStyles"
import WellDone from "../assets/svg/undraw_well_done_i2wr.svg"

const Error = () => {
  return (
    <React.Fragment>
      <SEO
        title="Error"
        description="Oops, it looks like the page you are looking for does not exist."
      />
      <GlobalStyles />
      <Wrapper>
        <Container fluid>
          <object
            style={{ margin: ".2rem" }}
            data={WellDone}
            type="image/svg+xml"
            alt="Some Balloons"
          ></object>
          <div>
            <h1>404</h1>
            <h3>Page Not Found</h3>
            <AlternativeButton link="/">Home</AlternativeButton>
          </div>
        </Container>
      </Wrapper>
    </React.Fragment>
  )
}

const Wrapper = styled.div`
  object {
    z-index: -1;
  }
  & > div {
    display: flex;

    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100vw;
    height: 100vh;
  }

  h1 {
    font-size: 5rem;
  }
  h3 {
    font-size: 3rem;
  }

  @media only screen and (max-width: 964px) {
    object {
      display: none;
    }
  }
`

export default Error
