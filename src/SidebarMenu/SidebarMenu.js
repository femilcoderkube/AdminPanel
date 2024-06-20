import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import { useAppContext } from "../context/userContext";
import { Link, useNavigate } from "react-router-dom";

const SidebarMenu = () => {
  const [visibleSider, setVisibleSidebar] = useState(false);
  const [active, setActive] = useState("");
  const { toggleMenu, setToggleMenu } = useAppContext();
  const [isMobile, setIsMobile] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    visibleSider
      ? document.body.setAttribute("data-kt-app-sidebar-minimize", "on")
      : document.body.setAttribute("data-kt-app-sidebar-minimize", "off");
  }, [visibleSider]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 991); // Adjust the width threshold as needed
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Call the function initially to set the state based on the initial window size

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Header />
      <div
        id="kt_app_sidebar"
        // className={`app-sidebar flex-column drawer drawer-start ${toggleMenu} ${active}`}
        className={`app-sidebar flex-column ${
          isMobile ? `drawer drawer-start ${toggleMenu}` : ""
        } ${active}`}
        data-kt-drawer="true"
        data-kt-drawer-name="app-sidebar"
        data-kt-drawer-activate="{default: true, lg: false}"
        data-kt-drawer-overlay="true"
        data-kt-drawer-width="225px"
        data-kt-drawer-direction="start"
        data-kt-drawer-toggle="#kt_app_sidebar_mobile_toggle"
      >
        <div className="app-sidebar-logo px-6" id="kt_app_sidebar_logo">
          <a href="/metronic8/react/demo1/dashboard">
            <img
              alt="Logo"
              src={require("../img/simply_logo_webres_small.png")}
              className="h-50px app-sidebar-logo-default"
            />
            <img
              alt="Logo"
              src={require("../img/simply_logo_webres_small.png")}
              className="h-20px app-sidebar-logo-minimize"
            />
          </a>
          <div
            id="kt_app_sidebar_toggle"
            className={`app-sidebar-toggle btn btn-icon btn-shadow btn-sm btn-color-muted btn-active-color-primary h-30px w-30px position-absolute top-50 start-100 translate-middle rotate ${
              visibleSider ? "active" : ""
            }`}
            data-kt-toggle="true"
            data-kt-toggle-state="active"
            data-kt-toggle-target="body"
            data-kt-toggle-name="app-sidebar-minimize"
            onClick={(e) => {
              e.preventDefault();
              setVisibleSidebar(!visibleSider);
              setActive("animating");
              setTimeout(() => {
                setActive("");
              }, 100);
            }}
          >
            <i className="ki-duotone ki-black-left-line fs-3 rotate-180 ms-1">
              <span className="path1" />
              <span className="path2" />
            </i>
          </div>
        </div>
        <div className="app-sidebar-menu overflow-hidden flex-column-fluid">
          <div
            id="kt_app_sidebar_menu_wrapper"
            className="app-sidebar-wrapper hover-scroll-overlay-y my-5"
            data-kt-scroll="true"
            data-kt-scroll-activate="true"
            data-kt-scroll-height="auto"
            data-kt-scroll-dependencies="#kt_app_sidebar_logo, #kt_app_sidebar_footer"
            data-kt-scroll-wrappers="#kt_app_sidebar_menu"
            data-kt-scroll-offset="5px"
            data-kt-scroll-save-state="true"
            style={{ height: "365px" }}
          >
            <div
              className="menu menu-column menu-rounded menu-sub-indention px-3"
              id="#kt_app_sidebar_menu"
              data-kt-menu="true"
              data-kt-menu-expand="false"
            >
              <div className="menu-item">
                <Link
                  className="menu-link without-sub active"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/dashboard");
                  }}
                >
                  <span className="menu-icon">
                    {" "}
                    <i className="ki-duotone ki-element-11 fs-2">
                      <span className="path1" />
                      <span className="path2" />
                      <span className="path3" />
                      <span className="path4" />
                    </i>
                  </span>
                  <span className="menu-title">Dashboard</span>
                </Link>
              </div>
              <div className="menu-item">
                <a
                  className="menu-link without-sub"
                  href="/metronic8/react/demo1/builder"
                >
                  <span className="menu-icon">
                    {" "}
                    <i className="ki-duotone ki-switch fs-2">
                      <span className="path1" />
                      <span className="path2" />
                    </i>
                  </span>
                  <span className="menu-title">Layout Builder</span>
                </a>
              </div>
              <div className="menu-item">
                <div className="menu-content pt-8 pb-2">
                  <span className="menu-section text-muted text-uppercase fs-8 ls-1">
                    Crafted
                  </span>
                </div>
              </div>
              <div
                className="menu-item menu-accordion"
                data-kt-menu-trigger="click"
              >
                <span className="menu-link">
                  <span className="menu-icon">
                    <i className="ki-duotone ki-element-plus fs-2">
                      <span className="path1" />
                      <span className="path2" />
                      <span className="path3" />
                      <span className="path4" />
                      <span className="path5" />
                    </i>
                  </span>
                  <span className="menu-title">Pages</span>
                  <span className="menu-arrow" />
                </span>
                <div className="menu-sub menu-sub-accordion">
                  <div
                    className="menu-item menu-accordion"
                    data-kt-menu-trigger="click"
                  >
                    <span className="menu-link">
                      <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                      </span>
                      <span className="menu-title">Profile</span>
                      <span className="menu-arrow" />
                    </span>
                    <div className="menu-sub menu-sub-accordion">
                      <div className="menu-item">
                        <a
                          className="menu-link without-sub"
                          href="/metronic8/react/demo1/crafted/pages/profile/overview"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Overview</span>
                        </a>
                      </div>
                      <div className="menu-item">
                        <a
                          className="menu-link without-sub"
                          href="/metronic8/react/demo1/crafted/pages/profile/projects"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Projects</span>
                        </a>
                      </div>
                      <div className="menu-item">
                        <a
                          className="menu-link without-sub"
                          href="/metronic8/react/demo1/crafted/pages/profile/campaigns"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Campaigns</span>
                        </a>
                      </div>
                      <div className="menu-item">
                        <a
                          className="menu-link without-sub"
                          href="/metronic8/react/demo1/crafted/pages/profile/documents"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Documents</span>
                        </a>
                      </div>
                      <div className="menu-item">
                        <a
                          className="menu-link without-sub"
                          href="/metronic8/react/demo1/crafted/pages/profile/connections"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Connections</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div
                    className="menu-item menu-accordion"
                    data-kt-menu-trigger="click"
                  >
                    <span className="menu-link">
                      <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                      </span>
                      <span className="menu-title">Wizards</span>
                      <span className="menu-arrow" />
                    </span>
                    <div className="menu-sub menu-sub-accordion">
                      <div className="menu-item">
                        <a
                          className="menu-link without-sub"
                          href="/metronic8/react/demo1/crafted/pages/wizards/horizontal"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Horizontal</span>
                        </a>
                      </div>
                      <div className="menu-item">
                        <a
                          className="menu-link without-sub"
                          href="/metronic8/react/demo1/crafted/pages/wizards/vertical"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Vertical</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="menu-item menu-accordion"
                data-kt-menu-trigger="click"
              >
                <span className="menu-link">
                  <span className="menu-icon">
                    <i className="ki-duotone ki-profile-circle fs-2">
                      <span className="path1" />
                      <span className="path2" />
                      <span className="path3" />
                    </i>
                  </span>
                  <span className="menu-title">Accounts</span>
                  <span className="menu-arrow" />
                </span>
                <div
                  className="menu-sub menu-sub-accordion"
                  kt-hidden-height={81}
                  style={{ display: "none", overflow: "hidden" }}
                >
                  <div className="menu-item">
                    <a
                      className="menu-link without-sub"
                      href="/metronic8/react/demo1/crafted/account/overview"
                    >
                      <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                      </span>
                      <span className="menu-title">Overview</span>
                    </a>
                  </div>
                  <div className="menu-item">
                    <a
                      className="menu-link without-sub"
                      href="/metronic8/react/demo1/crafted/account/settings"
                    >
                      <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                      </span>
                      <span className="menu-title">Settings</span>
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="menu-item menu-accordion"
                data-kt-menu-trigger="click"
              >
                <span className="menu-link">
                  <span className="menu-icon">
                    <i className="ki-duotone ki-cross-circle fs-2">
                      <span className="path1" />
                      <span className="path2" />
                    </i>
                  </span>
                  <span className="menu-title">Errors</span>
                  <span className="menu-arrow" />
                </span>
                <div
                  className="menu-sub menu-sub-accordion"
                  kt-hidden-height={81}
                  style={{ display: "none", overflow: "hidden" }}
                >
                  <div className="menu-item">
                    <a
                      className="menu-link without-sub"
                      href="/metronic8/react/demo1/error/404"
                    >
                      <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                      </span>
                      <span className="menu-title">Error 404</span>
                    </a>
                  </div>
                  <div className="menu-item">
                    <a
                      className="menu-link without-sub"
                      href="/metronic8/react/demo1/error/500"
                    >
                      <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                      </span>
                      <span className="menu-title">Error 500</span>
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="menu-item menu-accordion"
                data-kt-menu-trigger="click"
              >
                <span className="menu-link">
                  <span className="menu-icon">
                    <i className="ki-duotone ki-element-7 fs-2">
                      <span className="path1" />
                      <span className="path2" />
                    </i>
                  </span>
                  <span className="menu-title">Widgets</span>
                  <span className="menu-arrow" />
                </span>
                <div
                  className="menu-sub menu-sub-accordion"
                  kt-hidden-height={242}
                  style={{ display: "none", overflow: "hidden" }}
                >
                  <div className="menu-item">
                    <a
                      className="menu-link without-sub"
                      href="/metronic8/react/demo1/crafted/widgets/lists"
                    >
                      <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                      </span>
                      <span className="menu-title">Lists</span>
                    </a>
                  </div>
                  <div className="menu-item">
                    <a
                      className="menu-link without-sub"
                      href="/metronic8/react/demo1/crafted/widgets/statistics"
                    >
                      <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                      </span>
                      <span className="menu-title">Statistics</span>
                    </a>
                  </div>
                  <div className="menu-item">
                    <a
                      className="menu-link without-sub"
                      href="/metronic8/react/demo1/crafted/widgets/charts"
                    >
                      <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                      </span>
                      <span className="menu-title">Charts</span>
                    </a>
                  </div>
                  <div className="menu-item">
                    <a
                      className="menu-link without-sub"
                      href="/metronic8/react/demo1/crafted/widgets/mixed"
                    >
                      <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                      </span>
                      <span className="menu-title">Mixed</span>
                    </a>
                  </div>
                  <div className="menu-item">
                    <a
                      className="menu-link without-sub"
                      href="/metronic8/react/demo1/crafted/widgets/tables"
                    >
                      <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                      </span>
                      <span className="menu-title">Tables</span>
                    </a>
                  </div>
                  <div className="menu-item">
                    <a
                      className="menu-link without-sub"
                      href="/metronic8/react/demo1/crafted/widgets/feeds"
                    >
                      <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                      </span>
                      <span className="menu-title">Feeds</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="menu-item">
                <div className="menu-content pt-8 pb-2">
                  <span className="menu-section text-muted text-uppercase fs-8 ls-1">
                    Apps
                  </span>
                </div>
              </div>
              <div
                className="menu-item menu-accordion"
                data-kt-menu-trigger="click"
              >
                <span className="menu-link">
                  <span className="menu-icon">
                    <i className="ki-duotone ki-message-text-2 fs-2">
                      <span className="path1" />
                      <span className="path2" />
                      <span className="path3" />
                    </i>
                  </span>
                  <span className="menu-title">Chat</span>
                  <span className="menu-arrow" />
                </span>
                <div
                  className="menu-sub menu-sub-accordion"
                  kt-hidden-height={121}
                  style={{ display: "none", overflow: "hidden" }}
                >
                  <div className="menu-item">
                    <a
                      className="menu-link without-sub"
                      href="/metronic8/react/demo1/apps/chat/private-chat"
                    >
                      <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                      </span>
                      <span className="menu-title">Private Chat</span>
                    </a>
                  </div>
                  <div className="menu-item">
                    <a
                      className="menu-link without-sub"
                      href="/metronic8/react/demo1/apps/chat/group-chat"
                    >
                      <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                      </span>
                      <span className="menu-title">Group Chart</span>
                    </a>
                  </div>
                  <div className="menu-item">
                    <a
                      className="menu-link without-sub"
                      href="/metronic8/react/demo1/apps/chat/drawer-chat"
                    >
                      <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                      </span>
                      <span className="menu-title">Drawer Chart</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="menu-item">
                <a
                  className="menu-link without-sub"
                  href="/metronic8/react/demo1/apps/user-management/users"
                >
                  <span className="menu-icon">
                    {" "}
                    <i className="ki-duotone ki-abstract-28 fs-2">
                      <span className="path1" />
                      <span className="path2" />
                    </i>
                  </span>
                  <span className="menu-title">User management</span>
                </a>
              </div>
              <div className="menu-item">
                <a
                  target="_blank"
                  className="menu-link"
                  href="https://preview.keenthemes.com/metronic8/react/docs/changelog"
                >
                  <span className="menu-icon">
                    <i className="ki-duotone ki-code fs-2">
                      <span className="path1" />
                      <span className="path2" />
                      <span className="path3" />
                      <span className="path4" />
                    </i>
                  </span>
                  <span className="menu-title">Changelog v8.2.4</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className="app-sidebar-footer flex-column-auto pt-2 pb-6 px-6"
          id="kt_app_sidebar_footer"
        >
          <a
            href="https://preview.keenthemes.com/metronic8/react/docs"
            target="_blank"
            className="btn btn-flex flex-center btn-custom btn-primary overflow-hidden text-nowrap px-0 h-40px w-100"
            data-bs-toggle="tooltip"
            data-bs-trigger="hover"
            data-bs-dismiss-="click"
            title="Metronic Docs & Components"
          >
            <span className="btn-label">Docs &amp; Components</span>
            <i className="ki-duotone ki-document btn-icon fs-2 m-0">
              <span className="path1" />
              <span className="path2" />
            </i>
          </a>
        </div>
      </div>

      {isMobile && toggleMenu && (
        <div
          style={{
            zIndex: 105,
          }}
          className="drawer-overlay"
          onClick={(e) => {
            e.preventDefault();
            setToggleMenu("");
          }}
        />
      )}
    </>
  );
};

export default SidebarMenu;
