import { FaCreditCard } from "@react-icons/all-files/fa/FaCreditCard";
import { BiGroup } from "@react-icons/all-files/bi/BiGroup";
import { BsPeopleCircle } from "@react-icons/all-files/bs/BsPeopleCircle";
import { AiFillCode } from "@react-icons/all-files/ai/AiFillCode";
import { BsGearWideConnected } from "@react-icons/all-files/bs/BsGearWideConnected";
import { GiTeacher } from "@react-icons/all-files/gi/GiTeacher";
import { GiPieSlice } from "@react-icons/all-files/gi/GiPieSlice";
import { RiTeamFill } from "@react-icons/all-files/ri/RiTeamFill";
import { ImCalendar } from "@react-icons/all-files/im/ImCalendar";
import { AiOutlineRead } from "@react-icons/all-files/ai/AiOutlineRead";
import { BiCommentDots } from "@react-icons/all-files/bi/BiCommentDots";
import { AiOutlineMail } from "@react-icons/all-files/ai/AiOutlineMail";
import { AiOutlineProject } from "@react-icons/all-files/ai/AiOutlineProject";
import { AiOutlineForm } from "@react-icons/all-files/ai/AiOutlineForm";
import { BsInfoCircle } from "@react-icons/all-files/bs/BsInfoCircle";
import { BsPencil } from "@react-icons/all-files/bs/BsPencil";
import { BiDonateHeart } from "@react-icons/all-files/bi/BiDonateHeart";
import { FaRegNewspaper } from "@react-icons/all-files/fa/FaRegNewspaper";
import { AiFillCamera } from "@react-icons/all-files/ai/AiFillCamera";
import { SiGooglescholar } from "@react-icons/all-files/si/SiGooglescholar";
import { FaDiscord } from "@react-icons/all-files/fa/FaDiscord";

import React from "react";
const sublinks = [
  {
    page: "About",
    url: "/About",
    links: [
      {
        subpage: "About",
        url: "/About",
        subsections: [
          { label: "Mission", icon: <BiGroup />, url: "/About#mission" },
          {
            label: "Leadership",
            icon: <BsPeopleCircle />,
            url: "/About#leaderhip",
          },
          {
            label: "Project Managers",
            icon: <BsPeopleCircle />,
            url: "/About#projectManagers",
          },
          {
            label: "Foundation",
            icon: <BsPeopleCircle />,
            url: "/About#foundation",
          },
        ],
      },
    ],
  },
  {
    page: "Competition",
    url: "/Competition",
    links: [
      {
        subpage: "Software Links",
        url: "",
        subsections: [
          {
            label: "Latest Dawn Version",
            icon: <AiFillCode />,
            url: "/competition/SoftwareHub",
          },
          {
            label: "Robot API",
            icon: <AiFillCode />,
            url: "/competition/SoftwareHub",
          },
          {
            label: "Pimulator",
            icon: <GiPieSlice />,
            url: "https://pimulator.pierobotics.org/",
          },
        ],
      },
      {
        subpage: "Competition Info",
        url: "",
        subsections: [
          {
            label: "Calendar",
            icon: <ImCalendar />,
            url: "/Competition#timeline",
          },
          {
            label: "Game Manual",
            icon: <AiOutlineRead />,
            url: "https://docs.google.com/document/d/1rbkZkQUVMMmOxakEbZS_mdq2EaLcBOOBjztCv7yEkCY/edit",
          },
          {
            label: "RC Scholarship",
            icon: <SiGooglescholar />,
            url: "/competition/RCScholarship",
          },
        ],
      },
      {
        subpage: "Communication",
        url: "",
        subsections: [
          {
            label: "Discord",
            icon: <FaDiscord />,
            url: "https://styled-components.com/",
          },
        ],
      },
    ],
  },

  {
    page: "Get Involved",
    url: "/GetInvolved",
    links: [
      {
        subpage: "Join the Team",
        url: "/GetInvolved",
        subsections: [
          {
            label: "Timeline",
            icon: <ImCalendar />,
            url: "/GetInvolved#timeline",
          },

          {
            label: "Member Sign Up",
            icon: <AiOutlineForm />,
            url: "/getInvolved/Forms",
          },
        ],
      },
      {
        subpage: "Decal",
        url: "/getInvolved/Decal",
        subsections: [
          {
            label: "Decal Info",
            icon: <BsInfoCircle />,
            url: "/getInvolved/Decal#details",
          },
          {
            label: "Decal Sign Up",
            icon: <BsPencil />,
            url: "/getInvolved/Forms", // needs to be updated info
          },
        ],
      },
      {
        subpage: "Schools",
        url: "/getInvolved/Schools",
        subsections: [
          {
            label: "School Info",
            icon: <BsInfoCircle />,
            url: "/getInvolved/Schools", // not sure what needs to be on this page
          },
          {
            label: "School Sign Up",
            icon: <BsPencil />,
            url: "/getInvolved/Schools#signUp",
          },
        ],
      },
    ],
  },
  {
    page: "Support PiE",
    url: "/SupportUs",
    links: [
      {
        subpage: "Support PiE",
        url: "/SupportUs",
        subsections: [
          {
            label: "Info",
            icon: <BsInfoCircle />,
            url: "/SupportUs#howused",
          },
          {
            label: "Donate Now",
            icon: <BiDonateHeart />,
            url: "https://donorbox.org/pioneers-in-engineering",
          },
          {
            label: "Sponsors",
            icon: <FaCreditCard />,
            url: "/SupportUs#sponsors",
          },
          {
            label: "Mailing List",
            icon: <AiOutlineMail />,
            url: "/#mailinglist",
          },
        ],
      },
    ],
  },
];

export default sublinks;
