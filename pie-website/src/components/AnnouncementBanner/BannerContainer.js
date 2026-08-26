import React, { Component } from "react"
import styled from "styled-components"
import theme from "../../assets/themes/theme"
import {Alert} from "react-bootstrap"
import {useLocation} from '@reach/router'

const Banner = ({children, location}) => {
   function FindPath(){
        const locationUse2 = useLocation()
       
            
        const pathnameUse =(locationUse2.pathname);
            return pathnameUse;
}



    

        
        

    const currPath = FindPath()
    const dateInfo = new Date()
  const year = dateInfo.getFullYear()
  const day = dateInfo.getDate()
  const month = dateInfo.getMonth()
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


}




const AlertThemed = styled(Alert)`
    background-color: ${theme.colors.blue100};
    padding-bottom: 1rem;
    padding-top: .75rem;
    
)

`





export default Banner
