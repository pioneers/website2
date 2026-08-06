import React from "react"
import {Link, Element} from "react-scroll"

import theme from "../assets/themes/theme"

import styled from "styled-components"

const OnPageLink = styled(Link)`
    color: ${theme.colors.blue}; 
    cursor: pointer;
`

export default OnPageLink