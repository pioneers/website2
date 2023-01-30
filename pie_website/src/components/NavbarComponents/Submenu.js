import React, { useState, useRef, useEffect } from "react";
import { useGlobalContext } from "./context";

import styled, { keyframes } from "styled-components";
import theme from "../assets/themes/theme";
import { AnchorLink as Link } from "gatsby-plugin-anchor-links";

// dropdown menu for the stripe inspired navbar
const Submenu = () => {
  const {
    isSubmenuOpen,
    page: { page, links },
    location,
  } = useGlobalContext();
  const container = useRef(null);
  const [columns, setColumns] = useState("col-2");
  useEffect(() => {
    setColumns("col-1");
    const submenu = container.current;
    const { center } = location;
    submenu.style.left = `${center}px`;
    submenu.style.top = "67px"; // previously was `${bottom}px`
    // console.log(links)
    if (links.length === 2) {
      setColumns("col-2");
    }
    if (links.length === 3) {
      setColumns("col-3");
    }
    if (links.length > 3) {
      setColumns("col-4");
    }
  }, [page, location, links]);
  return (
    <SubmenuWrapper>
      <aside
        className={`${isSubmenuOpen ? "submenu show" : "submenu"}`}
        ref={container}
      >
        <div>
          {/* <h4>{page}</h4> */}
          <div className={`submenu-center ${columns}`}>
            {links.map((link) => {
              const { subpage, url, subsections } = link;
              return (
                <React.Fragment>
                  <div>
                    <Link to={url}>
                      <h6>{subpage}</h6>
                    </Link>
                    <div>
                      {subsections.map((someLink, index) => {
                        const { label, icon, url } = someLink;
                        return (
                          <Link key={index} to={url}>
                            {icon}
                            {label}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </aside>
    </SubmenuWrapper>
  );
};

const Fadein = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const SubmenuWrapper = styled.aside`
  .submenu {
    background: ${theme.colors.grey50};
    box-shadow: ${theme.shadows.darkShadow};
    position: absolute;
    top: 4rem;
    left: 50%;
    transform: translateX(-50%);
    z-index: 3;
    display: none;
    padding: 2rem;
    border-radius: ${theme.borderRadius};
    transition: ${theme.transition};
  }
  .submenu::before {
    content: "";
    display: block;
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 5px solid ${theme.colors.grey50};
    position: absolute;
    top: -5px;
    left: 50%;
    transform: translateX(-50%);
  }

  .submenu.show {
    display: block;
    animation: ${Fadein} 0.15s linear;
  }

  .submenu-center {
    display: grid;
    gap: 0.25rem 2rem;
  }
  .col-1 {
    grid-template-columns: repeat(1, 1fr);
  }
  .col-2 {
    grid-template-columns: repeat(2, 1fr);
  }
  .col-3 {
    grid-template-columns: repeat(3, 1fr);
  }
  .col-4 {
    grid-template-columns: repeat(4, 1fr);
  }
  .submenu h4 {
    margin-bottom: 1.5rem;
  }
  .submenu-center a {
    width: 11rem;
    display: block;
    text-transform: capitalize;
    display: flex;
    align-items: center;
    margin: 0.5rem 0rem;
    color: ${theme.colors.grey900};
  }

  .submenu-center a:hover {
    color: ${theme.colors.grey500};
  }

  .submenu-center svg {
    font-size: larger;
    color: ${theme.colors.grey900};
    margin-right: 1rem;
  }
  .submenu-center svg:hover {
    color: ${theme.colors.grey500};
  }
`;

export default Submenu;
