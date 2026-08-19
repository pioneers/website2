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
import bannerImg from "../assets/images/2026UpdatedLogoBanner.png"
import { navigate } from "gatsby"
import { Link } from "gatsby"

export default function RedirectExternalURL({location}) {
    /* const targetURLState = useState(window.state) */
    /*const targetURL = targetURLState.linkDestination */
    {/*if(props){ */}
    const targetURL = location.state?.linkDestination
    {/* }}
    else{ 
        const targetURL = "https://pioneers.berkeley.edu"
    } */}
    
    const [countdown, redirCountdown] = useState(5)
    const [redir, setCount] = useState(0)

    function FindPath(){
            const [pathname, setPathname] = useState(window.location.pathname);
            useEffect(()=>{
                setPathname(window.location.pathname);
            }, []);
            return pathname;
        }
    const currPath = FindPath() 

    if(!targetURL && typeof window!=="undefined"){
        window.location.replace("/"
            
        )
    }
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
    }, [countdown, targetURL]
    )
    {/* if(currPath === "/redirect"){ */} 
        return ( 
            <div>
                <CustomizedContainer color={theme.colors.white} >
                    {/*<Link to="/"> */}
                    <img src ={bannerImg}/>
                    {/* </Link> */}
                </CustomizedContainer>
                <CustomizedContainer color={theme.colors.grey100} >
                    <div>
                         <p>You are following an external link outside of pioneers.berkeley.edu. 
                             You'll be redirected to {targetURL} in {countdown} seconds No redirect?</p>
                            <button onClick={()=> window.location.replace(targetURL)}>
                                Click here to leave Pioneers site.
                            </button>
                            <button onClick={() => navigate(-1)}>
                                Go back to Pioneers site.
                            </button>
                    </div>
                </CustomizedContainer>
            </div>
        )
    
    {/*}}   else if(redir<1){
        setCount(redir => redir +1)
        return(
            window.location.replace("/redirect")
        ), []
    }
    else{
        return(
            <div>
                <p>
                    has redirected
                </p>
            </div>
        ), []
    }
    {/* return(
        <div>
            <h1>You are following an external link outside of pioneers.berkeley.edu. No redirect?</h1>
            <button onClick={()=> window.location.replace(targetURL)}>
                Click here.
            </button>
        </div>
    ) */} 
}


