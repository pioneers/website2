import { FaCreditCard } from "@react-icons/all-files/fa/FaCreditCard"
import { BiGroup } from "@react-icons/all-files/bi/BiGroup"
import { BsPeopleCircle } from "@react-icons/all-files/bs/BsPeopleCircle"
import { AiFillCode } from "@react-icons/all-files/ai/AiFillCode"
import { GiPieSlice } from "@react-icons/all-files/gi/GiPieSlice"
import { RiTeamFill } from "@react-icons/all-files/ri/RiTeamFill"
import { ImCalendar } from "@react-icons/all-files/im/ImCalendar"
import { AiOutlineRead } from "@react-icons/all-files/ai/AiOutlineRead"
import { FaDiscord } from "@react-icons/all-files/fa/FaDiscord"
import { AiOutlineMail } from "@react-icons/all-files/ai/AiOutlineMail"
import { AiOutlineProject } from "@react-icons/all-files/ai/AiOutlineProject"
import { AiOutlineForm } from "@react-icons/all-files/ai/AiOutlineForm"
import { BsInfoCircle } from "@react-icons/all-files/bs/BsInfoCircle"
import { BsPencil } from "@react-icons/all-files/bs/BsPencil"
import { BiDonateHeart } from "@react-icons/all-files/bi/BiDonateHeart"
import { FaRegNewspaper } from "@react-icons/all-files/fa/FaRegNewspaper"
import { AiFillCamera } from "@react-icons/all-files/ai/AiFillCamera"
import { SiGooglescholar } from "@react-icons/all-files/si/SiGooglescholar"

import React from "react"
const sublinks = [
  {
    page: "About",
    url: "/about",
    links: [
      {
        subpage: "Organization",
        url: "/organization",
      },
      {
        subpage: "Competition",
        url: "/competition",
      }, {
        subpage: "Our Team",
        url: "/our-team",
      }, 
      {
        subpage: "Policies",
        url: "/policies",
      }


    ],
  },
  {
    page: "Schools",
    url: "/schools",
    links: [
      {
        subpage: "Compete",
        url: "/compete",
      },
      {
        subpage: "Scholarship",
        url: "/scholarship",
      },
      {
        subpage: "Communication",
        url: "/communication",
      },
      {
        subpage: "Software Hub",
        url: "/software-hub",
      },
    ],
  },

  {
    page: "Get Involved",
    url: "/get-involved",
    links: [
      {
        subpage: "Mentors",
        url: "/mentors",
      },
      {
        subpage: "Club Members",
        url: "/staff",
      },
       {
        subpage: "Volunteer",
        url: "/volunteer",
      },
    ],
  },
  {
    page: "Support Us",
    url: "/support-us",
    links: [
      {
        subpage: "Individuals",
        url: "/individuals",  
      },
       {
        subpage: "Organizations",
        url: "/organizations",  
      },
    ],
  },
  {
    page: "Gallery",
    url: "",
    links: [
      {
      subpage: "Gallery",
      url: "/gallery",
    }
      
    ],
  },
]

export default sublinks
