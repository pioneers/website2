import React, { Component } from "react"
import styled from "styled-components"
import theme from "../../assets/themes/theme"
import { CloseButton } from "react-bootstrap"
import {Alert} from "react-bootstrap"
import {useEffect, useState} from 'react'
import {useLocation} from '@reach/router'
import { Location } from "@reach/router"

{/*const BannerContainer = () => {
    const[show, setShow] = useState(true)
    const handleClose=() => setShow(false)

    return BannerContainer(
        <CloseButton onClick={handleClose} />

    )
}
    */}

/*}
function Banner() {
  const [show, setShow] = useState(true);
     
*/
const Banner = ({children, location}) => {
    
   {/* const locationval = useLocation() */}
   {/* const location1 = location */}
   function FindPath(){
   {/*useEffect(()=>{ */}
    
        {/**const [pathname, setPathname] = useState(location.pathname);*/}
       {/*} const locationUse =({Location}) */}
        const locationUse2 = useLocation()
       
            
        const pathnameUse =(locationUse2.pathname);
            return pathnameUse;
    
    
{/*}}, []); */}
}



    

        
        

    const currPath = FindPath()
    {/* const location = useLocation() */}
    const dateInfo = new Date()
  const year = dateInfo.getFullYear()
  const day = dateInfo.getDate()
  const month = dateInfo.getMonth()
  {/*return(
        <AlertThemed variant="info" dismissible="true">
                <p>
                    PiE Student Team Participants: The  RC Scholarship is accepting applications. {" "}
                    <Alert.Link href="schools/scholarship"> Apply now!</Alert.Link>
                </p>
        </AlertThemed>
        );*/}
    {/*if(location.pathname == "/schools/scholarship"){
            return(
                null
            )
        } */}
    if(currPath!=null){
    if((month==7 && day==16)){
         if(currPath === "/support-us/individuals/"){
            return(
                
             <AlertThemed variant="info" dismissible="true">
                
                   Thank you for attending the {year} Pioneers in Engineering Internship Program
                    Presentations!
                
            </AlertThemed>
            
            )}
            else {
        return(
                
             <AlertThemed variant="info" dismissible="true">
                
                    Thank you for attending the {year} Pioneers in Engineering Internship Program
                     Presentations! Please consider visiting our {" "} 
                     <a href="/support-us/individuals/">Individual Sponsors</a> 
                     {" "}page and make a donation to the Pioneers in Engineering Donorbox campaign!
                
            </AlertThemed>
            
            )
        }
    }
    else if((month==2 && day<9)){
        if(currPath === "/support-us/individuals/"){
            return(
                
             <AlertThemed variant="info" dismissible="true">
                
                    The {year} Big Give is coming up! Please consider visiting the{" "}
                    <a href="https:givingday.berkeley.edu">Cal Big Give</a>
                    {" "}site and make a donation to Pioneers in Engineering!
                
            </AlertThemed>
            
            )
        }else{
        return(
            
             <AlertThemed variant="info" dismissible="true">
      
                    The {year} Big Give is coming up! Please consider visiting the{" "}
                    <a href="https:givingday.berkeley.edu">Cal Big Give</a>
                    {" "}site and make a donation to Pioneers in Engineering!
                    <br/>
                    <br/>
                    Alternatively, you may visit our {" "}
                    <a href="/support-us/individuals">Individual Sponsors</a>
                    {" "}page to make a donation to our Donorbox campaign! PiE warmly thanks all sponsors!
             
            </AlertThemed>
           
        )
    }
}
    
    else if((month < 3 || (month<4 && day<14))  || ((month==11) || (month==10 && day>8))){
        if(currPath === "/schools/scholarship/"){
        return null;
        }
        else{
        return(
           
            <AlertThemed variant="info" dismissible="true">
            
                    PiE Student Team Participants: Reminder that the RC Scholarship is accepting applications. {" "}
                    <a href="/schools/scholarship">Apply now!</a>
                
            </AlertThemed>
           
        );
    }
}
        

    else {
        return (null);
    }
}
    else return (null);
  
    /*return(
        <div>
            {year}
        </div>
    ) */

}

/*
const Alertupdatedtheme(){
    component: {
        muiAlert: {
            styleOverwrites: {
                root:{
                    variant: [
                        {
                            props: {variant = 'info'},
                            style: {background-color: ${theme.colors.blue600} }

                        }       
                    ]
                }
            }
        }    
    }
)



Alert.muiAlert-colorInfo(
    {background-color: ${theme.colors.blue600}
)
*/

const AlertThemed = styled(Alert)`
    background-color: ${theme.colors.blue100};
    padding-bottom: 1rem;
    padding-top: .75rem;
    
)

`


{/*const BannerContainer = styled.div`
  margin: auto;
  padding: 0.5rem 0rem;
  background-color: ${theme.colors.blue600};
  backdrop-filter: blur(5px);
  index: 3;
  height: 2 rem;
  width: 100 vw;
  align-items: center;
  text-align: center;
  color: ${theme.colors.white};
`
*/}



{/*const NavbarList = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  list-style: none;
  margin: auto;
  max-width: 1070px;

  @media screen and (max-width: 900px) {
    justify-content: space-between;
    margin: 0 1.5rem;
  }
`

class Navbar extends Component {
  render() {
    const { children, onMouseLeave } = this.props
    return (
      <NavbarEl onMouseLeave={onMouseLeave}>
        <NavbarList>{children}</NavbarList>
      </NavbarEl>
    )
  }
}
*/}
export default Banner
