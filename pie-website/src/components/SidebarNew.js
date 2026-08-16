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
{/*
import {useStaticQuery, graphql, Link} from "gatsby"

const PullPages = () => {
  const PagesGroup = useStaticQuery(graphql`
  query MyQuery {
    allSitePage {
      edges {
        node {
          id
          matchPath
        }
      }
    }
  }
    `)

  const pages = PagesGroup.allSitePage.nodes

  return(
    <div>
      <ul>
        {pages.map((page) =>{
          <li key={page.path}>
            <Link to={page.path}>
              {page.path}
            </Link>
          </li>
        })}
      </ul>
    </div>
  )

}
*/}
{/* const pagesQuery = () {
  return useMediaQuery({
    queryKey: []
  })
} */}

// the modal that pops up for the navabar after collapse
const SidebarNew = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext()

  
   

const addMenuLinks = () =>{
    const PullPages = () => {
    const PagesGroup = useStaticQuery(graphql`
    query findPages{
      allSitePage {
      
          nodes {
            path 
            pluginCreator {
            name
          }
          }
        }
      
    }
      `)
  
    
  
    const pages = PagesGroup.allSitePage.nodes
   //{/*const pages2 = pages.map(page)
    //const cleanedPages = pages2.map(pages2.page.id.replace('SitePage ', '')) */}
  
    {/* ---CleanedNames not quite working---- */}
   {/*const cleanedNames = pages.map((page)=>{
      {page.path.toString()}
   })
      */}
  
      
   const [pageTitles, setTitles] = useState([])
   const [pastGroup, setGroup] = useState([])
   {/*}
   const [groupTitles, setGroupTitle] = useState([]) */}
  
  const findGroup = () => {
    const pastGroupFragments = pageTitles.map(item => {item.split("/")
      if(pastGroupFragments.item[0].includes(item[0]) == false){
        setGroup(item[0])
      }
      else{
        
      }
    }
      )
    
   }
    
    pages.map((page) =>{
                {/* {page.path} */}
                {page.linkName=page.path.toString()}
                {page.groupName = page.linkName.split("/")[1]}
                {page.pathAddress = page.path}
                {page.lengthWay = page.linkName.split("/").slice(page.linkName.split("/").length - 2)}
                {page.linkTitleSlice = page.linkName.split("/").slice(2)}
                

                 {/*------Works, but trying to use cleanedNames----- */}
                 {/* {(page.path.toString())} */}
                 {/* {cleanedNames.page[index]} */}
                 {/*------Adding string of '...pageTitles'
                 setTitles([{page.path.toString()}, ...pageTitles]) */}
                 {/* {setTitles(page.path.toString())} */}
                 {/*{setGroup(page.path.toString().split("/")[0])} */}
                 {/*{ ----- works to print each one, cant split pageTitles[index]}  */}
                 {/*} {findGroup} */}
                 
                 
                  {/* {page.groupName=page.linkName.split("/")}
                 {page.groupTitle = page.groupName[0][0]}
                 */}
                 
                 
                 {/*{page.groupName[1]} */}
                 {/* ---- Might be out of order
                 {groupTitleAdd(pageTitles[index])} */}
             
             
            {/* ----commenting out to try to get pages in upper function addmenulinks -----
                <p>
               Slice:
            </p>
             {page.linkTitle = page.linkName.split("/").slice(2)}
            <p>
               Last element pop:
            </p>
             {page.possibleLinkName = page.linkName.split("/").pop()}
             <p>
             Arr length - 2:
             </p>
             {page.lengthWay = page.linkName.split("/").slice(page.linkName.split("/").length - 2)}
             <p>
               Group Name:
             </p>
             {/* {page.groupName} 
             <br/>
             {page.multLevels = page.lengthWay}
             */}
             
            
           })  
        return (
            pages
   
   )
}

const pagesInfo = PullPages();
{/*----Moved into addMenulink to try to get page value ------ */}
    {/* ------ used with Error 1 const finalLinkInfo = new Map() ------ */}
    pagesInfo.map((page) => {
        
        {/* if((page.lengthWay!=page.groupName) && (page.lengthWay == page.linkTitleSlice)) {
            {/* page.groupTitle = page.groupName;
            page.pageTitle = page.lengthWay; 

            page.groupTitle = 'three';
            page.pageTitle = "not three";
        }   else{
            page.groupTitle = "none";
            page.pageTitle = "none";
        }
        */}

        if((page.lengthWay == page.groupName) || (page.lengthWay != page.linkTitleSlice)){
            page.groupTitle = "none"
            page.pageTitle = "none"
        }  else {
            page.groupTitle = page.groupName
            page.pageTitle = page.lengthWay
        }
        


    

        if(page.pageTitle === "staff"){
            page.pageTitleUse = "club members";
        }
        else{
            page.pageTitleUse = page.pageTitle;
        }
        {/* ------ Error 1 Object cannot be children compile error -------
        if(!finalLinkInfo.has(page.groupTitle)){
            finalLinkInfo.set(page.groupTitle, {finalGroups: page.groupTitle, finalGroupedLinks: [page.pageTitleUse]})
        } else{
            finalLinkInfo.get(page.groupTitle).finalGroupedLinks.push(page.pageTitleUse)
        }
            */}
    })
    const finalLinkInfo = pagesInfo.reduce((finalLinkInfoBuild, page) => {
        {/* if(!finalLinkInfoBuild.has(page.groupTitle)) */}
        if(!finalLinkInfoBuild.get(page.groupTitle)){
            finalLinkInfoBuild.set(page.groupTitle, [page.pageTitleUse])
        } else{
            finalLinkInfoBuild.get(page.groupTitle).push(page.pageTitleUse)
        }
        return (finalLinkInfoBuild)
    }, new Map())

        

    return(
        <CustomizedContainer>
        <p>{pagesInfo[1].lengthWay}</p>
        <p>{pagesInfo[1].linkTitleSlice}</p>
        <p>{pagesInfo[1].groupName}</p>
        <p>{finalLinkInfo.get("about")}</p>
        <p>{pagesInfo.linkTitleSlice}</p>
        </CustomizedContainer>
    )
}

  return (
  
    <SidebarWrapper>
      <div
        className={`${
          isSidebarOpen ? "sidebar-wrapper show" : "sidebar-wrapper"
        }`}
      >
        <aside className="sidebar">
          <button className="close-btn" onClick={closeSidebar}>
            <RiCloseFill />
          </button>
          <div className="sidebar-links">
            <h1>
                Function for links
            </h1>
            <div className = "about-grid">
                {addMenuLinks()}
            </div>
            
            {/*
            <div className="about-grid">
              {sublinks
                .filter(
                  thing =>
                    thing.page === "About" ||
                    thing.page === "Support Us" ||
                    thing.page === "Library"
                )
                .map((item, index) => {
                  const { links, page, url } = item
                  return (
                    <div key={index}>
                      <a href={url}>
                        <h3>{page}</h3>
                      </a>
                      <div>
                        {links.map(link => {
                          const { subpage, url, subsections } = link
                          return (
                            <React.Fragment>
                              <div>
                                {page !== subpage && (
                                  <a href={url}>
                                    <h4>{subpage}</h4>
                                  </a>
                                )}

                                {subsections.map((someLink, index) => {
                                  const { label, icon, url } = someLink
                                  return (
                                    <div className="one-link">
                                      <a key={page + "_" + index} href={url}>
                                        {icon}
                                        {label}
                                      </a>
                                    </div>
                                  )
                                })}
                              </div>
                            </React.Fragment>
                          )
                        })}
                      </div>
                    </div>
                  )
                })}
            </div>
            <hr />
            {sublinks
              .filter(
                thing =>
                  thing.page === "Competition" || thing.page === "Get Involved"
              )
              .map((item, index) => {
                const { links, page, url } = item
                return (
                  <React.Fragment>
                    <article key={index}>
                      <a href={url}>
                        <h3>{page}</h3>
                      </a>
                      <div className="sidebar-sublinks">
                        {links.map(link => {
                          const { subpage, url, subsections } = link
                          return (
                            <React.Fragment>
                              <div>
                                {page !== subpage && (
                                  <a href={url}>
                                    <h4>{subpage}</h4>
                                  </a>
                                )}
                                {subsections.map((someLink, index) => {
                                  const { label, icon, url } = someLink
                                  return (
                                    <div className="one-link">
                                      <a key={page + index} href={url}>
                                        {icon}
                                        {label}
                                      </a>
                                    </div>
                                  )
                                })}
                              </div>
                            </React.Fragment>
                          )
                        })}
                      </div>
                    </article>
                    <hr />
                  </React.Fragment>
                )
              })}
                */}
          </div>
        </aside>
      </div>
    </SidebarWrapper>
  )

}


const SidebarWrapper = styled.div`
  hr {
    border-top: 1px dashed ${theme.colors.grey500};
    background-color: ${theme.colors.white};
  }
  .about-grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 0.15rem;
  }
  a {
    font-size: 14px;
  }

  svg {
    font-size: 18px;
  }

  .one-link {
    margin: 0.75rem 0;
    font-weight: 400;
  }

  .one-link > a > svg {
    margin-right: 6px;
    color: ${theme.colors.blue600};
  }

  .one-link > a > svg:hover {
    color: ${theme.colors.blue700};
  }
  .sidebar-sublinks > div {
    margin: 0;
  }

  .sidebar-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
    visibility: hidden;
    z-index: -1;
    transition: all 0.3s linear;
    opacity: 0;
    transform: translateY(-30px);
    /* transform: scale(0); */
    /* background: rgba(0, 0, 0, 0.5); */
  }
  .sidebar-wrapper.show {
    visibility: visible;
    opacity: 1;
    z-index: 3;
    /* transform: scale(1); */
    transform: translateY(0);
    overflow-y: scroll;
  }
  .sidebar {
    width: 95vw;
    height: max(95vh, auto);
    max-width: 1170px;
    background: ${theme.colors.white};
    border-radius: ${theme.borderRadius};
    box-shadow: ${theme.shadows.otherShadow};
    position: absolute;
    padding: 1.5rem 1.5rem 0rem 1.5rem;
    top: 10px;
  }
  .close-btn {
    background: transparent;
    border-color: transparent;
    color: ${theme.colors.grey500};
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    cursor: pointer;
  }
  .close-btn svg {
    font-size: 2rem;
  }

  .sidebar-sublinks {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 0.15rem;
  }

  h3 {
    font-size: 1.15rem;
    margin-bottom: 0.5rem;
  }

  .sidebar h3 {
    color: ${theme.colors.grey500};
  }

  .sidebar h3:hover {
    color: ${theme.colors.grey600};
  }

  h4 {
    margin: 0;
    text-transform: uppercase;
    color: ${theme.colors.gold600};
    font-size: 0.8rem;
  }

  h4:hover {
    color: ${theme.colors.gold700};
  }

  @media screen and (max-width: 560px) {
    .sidebar-sublinks {
      grid-template-columns: 1fr 1fr;
    }

    .about-grid {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media screen and (max-width: 360px) {
    .sidebar-sublinks {
      grid-template-columns: 1fr;
    }

    .about-grid {
      grid-template-columns: 1fr;
    }
  }

  .sidebar-links a {
    color: ${theme.colors.grey900};
  }
  .sidebar-links a:hover {
    color: ${theme.colors.grey600};
  }

  .sidebar-sublinks a {
    display: block;
    color: ${theme.colors.grey900};
    // text-transform: capitalize;
    display: flex;
    align-items: center;
  }
  .sidebar-sublinks a:hover {
    color: ${theme.colors.grey600};
  }

  .sidebar-sublinks svg {
    color: ${theme.colors.grey900};
    margin-right: 1rem;
  }
  .sidebar-sublinks svg:hover {
    color: ${theme.colors.grey500};
  }

  article h3 {
    color: ${theme.colors.grey900};
  }

  article h5 {
    color: ${theme.colors.grey900};
  }
  article h5:hover {
    color: ${theme.colors.grey500};
  }

  @media screen and (min-width: 900px) {
    .sidebar-wrapper {
      display: none;
    }
  }
`

export default SidebarNew
