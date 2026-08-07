import React, { Component } from "react"
import {useState} from "react"
import styled from "styled-components"
import theme from "../../assets/themes/theme"
import { CloseButton } from "react-bootstrap"
import {Alert} from "react-bootstrap"

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
const Banner = () => {
const dateInfo = new Date()
  const year = dateInfo.getFullYear()
  const day = dateInfo.getDate()
  const month = dateInfo.getMonth()
    if((month<3 || (month<4 && day<14))  || (month==11 || (month==10&& day>8))){
        return(
            <AlertThemed variant="info" dismissible="true">
                <p>
                    PiE Student Team Participants: Reminder that the {year} RC Scholarship is accepting applications. {" "}
                    <a href="/schools/scholarship">Apply now!</a>
                </p>
            </AlertThemed>
        )

    }
    if(month==9 && day==6){
    return(
        <AlertThemed variant="info" dismissible="true">
                <p>
                    Test banner for information.  
                    <Alert.Link href="pioneers.berkeley.edu">pioneers.berkeley.edu </Alert.Link>
                </p>
        </AlertThemed>
    )
    }
    if(month==9 && day==7){
    return(
        <AlertThemed variant="info" dismissible="true">
                <p>
                    PiE Student Team Participants: Reminder that the {year} RC Scholarship is accepting applications. {" "}
                    <a href="../schools/scholarship">Apply now!</a>
                </p>
        </AlertThemed>
    )
    }
}
{/*}
*/}
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
    display: 'flex';
    justify-content: "center";
    text-align: "center";
    align-items: "center";

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
