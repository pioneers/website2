import React, { useState, useEffect } from "react"
import MailchimpSubscribe from "react-mailchimp-subscribe"
import theme from "../assets/themes/theme"
import Row from "react-bootstrap/esm/Row"
import Col from "react-bootstrap/esm/Col"
import Container from "react-bootstrap/esm/Container"
import { AiOutlineCheck } from "@react-icons/all-files/ai/AiOutlineCheck"

import Form from "react-bootstrap/Form"

import styled from "styled-components"

const CustomForm = ({ onValidated }) => {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()
    email &&
      email.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email,
      })

    if (email && email.indexOf("@") > -1) {
      setStatus(true)
      setTimeout(() => {
        setStatus(false)
      }, 1500)
    }
  }

  const handleChange = event => {
    setEmail(event.target.value)
  }

  useEffect(() => {
    if (status) clearFields()
  }, [status])

  const clearFields = () => {
    setEmail("")
  }

  return (
    <React.Fragment>
      <FormContainer fluid>
        <Row>
          <Col sm={12} md={6} lg={6}>
            <div>
              <h3>Get the latest from PiE</h3>
              <p style={{ fontWeight: "400", fontSize: "18px" }}>
                Share your email to get the latest updates on our organization
                and competition.
              </p>
            </div>
          </Col>
          <Col sm={12} md={6} lg={6}>
            <div className="centered">
              {status === "success" ? (
                <h4 style={{ color: theme.colors.green600 }}>Success!</h4>
              ) : (
                ""
              )}
              <form onSubmit={e => handleSubmit(e)}>
                <Form.Control
                  label="Email"
                  onChange={handleChange}
                  type="email"
                  value={email}
                  placeholder="your@email.com"
                  required
                />
                <button type="submit" formValues={[email]}>
                  {!status && <div>Subscribe</div>}
                  {status && <AiOutlineCheck />}
                </button>
              </form>
              <p>You can unsubscribe at any time.</p>
            </div>
          </Col>
        </Row>
      </FormContainer>
    </React.Fragment>
  )
}

const MailchimpFormContainer = props => {
  const postUrl = `https://berkeley.us3.list-manage.com/subscribe/post?u=${process.env.GATSBY_MAILCHIMP_API_U}&id=${process.env.GATSBY_MAILCHIMP_API_ID}`
  console.log(postUrl)
  return (
    <div>
      <MailchimpSubscribe
        url={postUrl}
        render={({ subscribe }) => (
          <CustomForm onValidated={formData => subscribe(formData)} />
        )}
      />
    </div>
  )
}

const FormContainer = styled(Container)`
  .centered {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .centered p {
    margin-top: 0.5rem;
    color: ${theme.colors.grey400};
    font-weight: 300;
    font-size: 0.8rem;
  }

  input:focus {
    outline: none;
    box-shadow: none;
    border: transparent;
  }

  form:focus-within {
    box-shadow: ${theme.shadows.darkShadow};
  }

  form {
    border-radius: ${theme.borderRadius} 0 0 ${theme.borderRadius};
    box-shadow: ${theme.shadows.lightShadow};
    transition: ${theme.transition};
    max-width: 30rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  input {
    display: inline-block;
    width: 100%;
    outline: none;
    border: transparent;
    height: 3rem;
    /* border-radius: ${theme.borderRadius} 0 0 ${theme.borderRadius}; */
  }

  svg {
    color: ${theme.colors.green500};
    margin-right: 0.75rem;
  }

  ::placeholder {
    color: ${theme.colors.grey400};
  }

  button {
    display: inline-block;
    text-transform: uppercase;
    border: transparent;
    border-radius: 0 ${theme.borderRadius} ${theme.borderRadius} 0;
    background-color: ${theme.colors.white};
    height: 3rem;
    font-weight: 600;
    letter-spacing: 2px;
  }

  @media screen and (max-width: 765px) {
    .centered {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: flex-start;
      margin-top: 0.5rem;
    }
  }
`

export default MailchimpFormContainer
