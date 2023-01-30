import React from "react";
import { RiCloseFill } from "@react-icons/all-files/ri/RiCloseFill";
import { useGlobalContext } from "./context";
import sublinks from "../TimelineComponents/data";
import Link from "../CLink";
import styled from "styled-components";
import theme from "../../styles/theme";

// the modal that pops up for the navabar after collapse
const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
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
            <div className="about-grid">
              {sublinks
                .filter(
                  (thing) =>
                    thing.page === "About" || thing.page === "Support Us"
                )
                // thing.page === "Library"
                // )
                .map((item, index) => {
                  const { links, page, url } = item;
                  return (
                    <div key={index}>
                      <Link to={url}>
                        <h3>{page}</h3>
                      </Link>
                      <div>
                        {links.map((link) => {
                          const { subpage, url, subsections } = link;
                          return (
                            <React.Fragment>
                              <div>
                                {page !== subpage && (
                                  <Link to={url}>
                                    <h4>{subpage}</h4>
                                  </Link>
                                )}

                                {subsections.map((someLink, index) => {
                                  const { label, icon, url } = someLink;
                                  return (
                                    <div className="one-link">
                                      <Link key={index} to={url}>
                                        {icon}
                                        {label}
                                      </Link>
                                    </div>
                                  );
                                })}
                              </div>
                            </React.Fragment>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
            </div>
            <hr />
            {sublinks
              .filter(
                (thing) =>
                  thing.page === "Competition" || thing.page === "Get Involved"
              )
              .map((item, index) => {
                const { links, page, url } = item;
                return (
                  <React.Fragment>
                    <article key={index}>
                      <Link to={url}>
                        <h3>{page}</h3>
                      </Link>
                      <div className="sidebar-sublinks">
                        {links.map((link) => {
                          const { subpage, url, subsections } = link;
                          return (
                            <React.Fragment>
                              <div>
                                {page !== subpage && (
                                  <Link to={url}>
                                    <h4>{subpage}</h4>
                                  </Link>
                                )}
                                {subsections.map((someLink, index) => {
                                  const { label, icon, url } = someLink;
                                  return (
                                    <div className="one-link">
                                      <Link key={index} to={url}>
                                        {icon}
                                        {label}
                                      </Link>
                                    </div>
                                  );
                                })}
                              </div>
                            </React.Fragment>
                          );
                        })}
                      </div>
                    </article>
                    <hr />
                  </React.Fragment>
                );
              })}
          </div>
        </aside>
      </div>
    </SidebarWrapper>
  );
};

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
    text-transform: capitalize;
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
`;

export default Sidebar;
