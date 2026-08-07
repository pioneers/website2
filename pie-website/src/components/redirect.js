import React from "react"

import Container from "react-bootstrap/Container"

import Header from "../components/Header"

import {useEffect, useState} from "react"

import { FaHandsHelping } from "@react-icons/all-files/fa/FaHandsHelping"
import { RiMoneyDollarCircleLine } from "@react-icons/all-files/ri/RiMoneyDollarCircleLine"
import { BiGroup } from "@react-icons/all-files/bi/BiGroup"

import Tab from "react-bootstrap/Tab"
import Tabs from "react-bootstrap/Tabs"

import Layout from "../components/Layout"

import styled, { ThemeConsumer } from "styled-components"
import HelmetWrapper from "../components/HelmetWrapper"

import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import Col from "react-bootstrap/esm/Col"
import Row from "react-bootstrap/esm/Row"

import theme from "../assets/themes/theme"
import CustomizedContainer from "../components/CustomizedContainer"

export default function RedirectExternalURL(props) {
    const targetURL = props.linkDestination
    const [countdown, redirCountdown] = useState(5)
    useEffect(() => {
        const redirTimer = setInterval(() => {
            redirCountdown((countdown) => {
                if(countdown <= 1){
                    clearInterval(redirTimer);
                    window.location.replace(targetURL);
                    return 0;
                }
            return countdown-1;
            }
        );
        }, 1000
    );
    return () => clearInterval(redirTimer);
    }, [targetURL]
)
    return(
        <div>
            <h1>You are following an external link outside of pioneers.berkeley.edu. No redirect?</h1>
            <button onClick={()=> window.location.replace(targetURL)}>
                Click here.
            </button>
        </div>
    )
}
