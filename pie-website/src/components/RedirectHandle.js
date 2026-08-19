import React from "react"
import { RiCloseFill } from "@react-icons/all-files/ri/RiCloseFill"
import { useGlobalContext } from "../assets/data/context"
import sublinks from "../assets/data/data"
import styled from "styled-components"
import theme from "../assets/themes/theme"

import { Link } from "gatsby"
import {useStaticQuery, graphql} from "gatsby"


import { useState } from "react"
import CustomizedContainer from "./CustomizedContainer"
import { useEffect } from "react"
{/*}
export default function RedirectHandle () {
    
        const linkListener = (linkClick) => {
            {/* const linkLocation = linkClick.getAttrbute('a') 
            const linkLocation = linkClick.target.closest('a')
            if(!linkLocation){
                return
            }

            const linkToGo = linkLocation.getAttribute("href")

            if(linkToGo.includes("/redirect") || (!linkToGo)){
                return
            }
            
            else if(linkToGo.includes("http://") || linkToGo.includes("https://")){
                {/*linkToGo.setAttribute() 
                linkLocation.setAttribute(linkToGo, "/redirect")
                const linkState = {linkDestination: linkToGo}

                window.location.state = linkState
            }

        }
         return(
        <div onClick={linkListener} style={{display: "contents"}}>
            {children}
            </div>    
        )
}

*/}