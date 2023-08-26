import React, { useState } from "react"
import Modal from "react-bootstrap/Modal"
import TextField from "@material-ui/core/TextField"
import theme from "../assets/themes/theme"

import styled from "styled-components"

// Contact Us modal from button
const ContactUs = () => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const [value, setValue] = React.useState("")

  const handleChange = event => {
    setValue(event.target.value)
  }

  return (
    <>
      <Btn onClick={handleShow}>Contact Us</Btn>

      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Contact Us</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CustomForm
            noValidate
            autoComplete="off"
            action="https://getform.io/f/86bd726f-60c2-48ec-847c-ab1d7d056101"
            method="POST"
          >
            <input
              name="Time"
              value={Date().toLocaleString()}
              style={{ display: "none" }}
            ></input>
            <TextField
              id="standard-basic"
              label="First Name"
              required
              className="first"
              name="First Name"
            />
            <TextField
              id="standard-basic"
              label="Last Name"
              name="Last Name"
              required
              className="last"
            />
            <TextField
              id="standard-basic"
              label="Organization"
              name="Organization"
              required
              className="org"
            />
            <TextField
              id="standard-basic"
              label="Email Address"
              name="Email Address"
              required
              className="email"
            />
            <TextField
              id="standard-multiline-flexible"
              label="Description"
              name="Description"
              multiline={true}
              value={value}
              onChange={handleChange}
              required
              className="desc"
            />

            <CustomButton color="blue">Submit</CustomButton>
          </CustomForm>
        </Modal.Body>
      </Modal>
    </>
  )
}

const Btn = styled.button`
  font-size: 1rem;
  font-weight: 600;
  padding: 0.25rem 0.75rem;
  /* margin: 1.8rem 1.5rem 1.2rem 1.8rem; */
  border-radius: 100px;
  border-color: transparent;
  color: white;
  background-color: ${theme.colors.blue600};
  transition: ${theme.transition};
  align-self: center;

  &:hover {
    background-color: ${theme.colors.blue700};
  }

  @media screen and (max-width: 900px) {
    display: none;
  }
`

const CustomButton = styled.button.attrs(props => ({
  type: "submit",
}))`
  cursor: pointer;
  background: ${props =>
    props.color === "blue" ? theme.colors.blue500 : theme.colors.gold500};
  border: transparent;
  border-radius: ${theme.borderRadius};
  letter-spacing: ${theme.letterSpacing};
  padding: 0.375rem 0.75rem;
  box-shadow: ${theme.shadows.shadow1};
  transition: ${theme.transition};
  // text-transform: capitalize;
  display: inline-block;
  margin: 1rem 0.25rem 0rem 0.25rem;
  color: ${theme.colors.white};
  width: 100%;

  grid-column: 1 / 3;

  &:hover {
    background: ${props =>
      props.color === "blue" ? theme.colors.blue700 : theme.colors.gold700};
    box-shadow: ${theme.shadows.shadow3};
  }

  a {
    color: ${theme.colors.white};
  }
`

const CustomForm = styled.form`
  padding: 1.5rem;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr 1fr;

  .first {
    grid-column: 1 / 2;
  }
  .last {
    grid-column: 2 / 3;
  }
  .org {
    grid-column: 1 / 3;
  }
  .email {
    grid-column: 1 / 3;
  }
  .desc {
    grid-column: 1 / 3;
  }

  @media ${theme.mediaQueries.tabletS} {
    .first {
      grid-column: 1 / 3;
    }
    .last {
      grid-column: 1 / 3;
    }
  }
`

export default ContactUs
