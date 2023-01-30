import React from "react";
import Container from "react-bootstrap/esm/Container";

import styled from "styled-components";
import Btn from "../components/Btn";
import GlobalStyles from "../styles/globalStyles";
import WellDone from "../svg/undraw_well_done_i2wr.svg";

const Error = () => {
  return (
    <React.Fragment>
      <GlobalStyles />
      <Wrapper>
        <Container fluid>
          <object
            style={{ margin: ".2rem" }}
            data={WellDone}
            type="image/svg+xml"
            alt="Some Balloons"
            aria-label="Some Balloons"
          ></object>
          <div>
            <h1>404</h1>
            <h3>Page Not Found</h3>
            <Btn link="/">Home &rsaquo;</Btn>
          </div>
        </Container>
      </Wrapper>
    </React.Fragment>
  );
};

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
`;

export default Error;
