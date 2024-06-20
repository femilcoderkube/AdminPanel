import React, { useEffect, useState } from "react";
import { useAppContext } from "../context/userContext";
import { Link, useNavigate } from "react-router-dom";

const Menu = () => {
  const { menuVisible, setMenuVisible } = useAppContext();
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

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
      <div
        // className="app-header-menu app-header-mobile-drawer align-items-stretch drawer drawer-end "
        className={`app-header-menu app-header-mobile-drawer align-items-stretch  ${
          isMobile ? `drawer drawer-end ${menuVisible}` : ""
        }`}
        data-kt-drawer="true"
        data-kt-drawer-name="app-header-menu"
        data-kt-drawer-activate="{default: true, lg: false}"
        data-kt-drawer-overlay="true"
        data-kt-drawer-width="225px"
        data-kt-drawer-direction="end"
        data-kt-drawer-toggle="#kt_app_header_menu_toggle"
        data-kt-swapper="true"
        data-kt-swapper-mode="{default: 'append', lg: 'prepend'}"
        data-kt-swapper-parent="{default: '#kt_app_body', lg: '#kt_app_header_wrapper'}"
        style={{ width: "225px" }}
      >
        <div
          className=" menu menu-rounded menu-column menu-lg-row my-5 my-lg-0 align-items-stretch fw-semibold px-2 px-lg-0 "
          id="kt_app_header_menu"
          data-kt-menu="true"
        >
          <div className="menu-item me-lg-1">
            <Link
              className="menu-link py-3 active menu-here"
              onClick={(e) => {
                e.preventDefault();
                navigate("/dashboard");
              }}
            >
              <span className="menu-title">Dashboard</span>
            </Link>
          </div>
          <div className="menu-item me-lg-1">
            <a className="menu-link py-3" href="/metronic8/react/demo1/builder">
              <span className="menu-title">Layout Builder</span>
            </a>
          </div>
          <div
            className="menu-item menu-lg-down-accordion me-lg-1"
            data-kt-menu-trigger="click"
            data-kt-menu-placement="bottom-start"
          >
            <span className="menu-link py-3">
              <span className="menu-title">Crafted</span>
            </span>
            <div
              className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-rounded-0 py-lg-4 w-lg-225px"
              data-kt-menu-dismiss="true"
            >
              <div
                className="menu-item menu-lg-down-accordion me-lg-1"
                data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                data-kt-menu-placement="right-start"
              >
                <span className="menu-link py-3">
                  <span className="menu-icon">
                    <i className="bi fs-3 bi-archive" />
                  </span>
                  <span className="menu-title">Pages</span>
                  <span className="menu-arrow" />
                </span>
                <div
                  className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-rounded-0 py-lg-4 w-lg-225px"
                  data-kt-menu-dismiss="true"
                >
                  <div
                    className="menu-item menu-lg-down-accordion me-lg-1"
                    data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                    data-kt-menu-placement="right-start"
                  >
                    <span className="menu-link py-3">
                      <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                      </span>
                      <span className="menu-title">Profile</span>
                      <span className="menu-arrow" />
                    </span>
                    <div
                      className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-rounded-0 py-lg-4 w-lg-225px"
                      data-kt-menu-dismiss="true"
                    >
                      <div className="menu-item me-lg-1">
                        <a
                          className="menu-link py-3"
                          href="/metronic8/react/demo1/crafted/pages/profile/overview"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Overview</span>
                        </a>
                      </div>
                      <div className="menu-item me-lg-1">
                        <a
                          className="menu-link py-3"
                          href="/metronic8/react/demo1/crafted/pages/profile/projects"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Projects</span>
                        </a>
                      </div>
                      <div className="menu-item me-lg-1">
                        <a
                          className="menu-link py-3"
                          href="/metronic8/react/demo1/crafted/pages/profile/campaigns"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Campaigns</span>
                        </a>
                      </div>
                      <div className="menu-item me-lg-1">
                        <a
                          className="menu-link py-3"
                          href="/metronic8/react/demo1/crafted/pages/profile/documents"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Documents</span>
                        </a>
                      </div>
                      <div className="menu-item me-lg-1">
                        <a
                          className="menu-link py-3"
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
                    className="menu-item menu-lg-down-accordion me-lg-1"
                    data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                    data-kt-menu-placement="right-start"
                  >
                    <span className="menu-link py-3">
                      <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                      </span>
                      <span className="menu-title">Wizards</span>
                      <span className="menu-arrow" />
                    </span>
                    <div
                      className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-rounded-0 py-lg-4 w-lg-225px"
                      data-kt-menu-dismiss="true"
                    >
                      <div className="menu-item me-lg-1">
                        <a
                          className="menu-link py-3"
                          href="/metronic8/react/demo1/crafted/pages/wizards/horizontal"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Horizontal</span>
                        </a>
                      </div>
                      <div className="menu-item me-lg-1">
                        <a
                          className="menu-link py-3"
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
                className="menu-item menu-lg-down-accordion me-lg-1"
                data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                data-kt-menu-placement="right-start"
              >
                <span className="menu-link py-3">
                  <span className="menu-icon">
                    <i className="bi fs-3 bi-person" />
                  </span>
                  <span className="menu-title">Accounts</span>
                  <span className="menu-arrow" />
                </span>
                <div
                  className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-rounded-0 py-lg-4 w-lg-225px"
                  data-kt-menu-dismiss="true"
                >
                  <div className="menu-item me-lg-1">
                    <a
                      className="menu-link py-3"
                      href="/metronic8/react/demo1/crafted/account/overview"
                    >
                      <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                      </span>
                      <span className="menu-title">Overview</span>
                    </a>
                  </div>
                  <div className="menu-item me-lg-1">
                    <a
                      className="menu-link py-3"
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
                className="menu-item menu-lg-down-accordion me-lg-1"
                data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                data-kt-menu-placement="right-start"
              >
                <span className="menu-link py-3">
                  <span className="menu-icon">
                    <i className="bi fs-3 bi-sticky" />
                  </span>
                  <span className="menu-title">Errors</span>
                  <span className="menu-arrow" />
                </span>
                <div
                  className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-rounded-0 py-lg-4 w-lg-225px"
                  data-kt-menu-dismiss="true"
                >
                  <div className="menu-item me-lg-1">
                    <a
                      className="menu-link py-3"
                      href="/metronic8/react/demo1/error/404"
                    >
                      <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                      </span>
                      <span className="menu-title">Error 404</span>
                    </a>
                  </div>
                  <div className="menu-item me-lg-1">
                    <a
                      className="menu-link py-3"
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
                className="menu-item menu-lg-down-accordion me-lg-1"
                data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                data-kt-menu-placement="right-start"
              >
                <span className="menu-link py-3">
                  <span className="menu-icon">
                    <i className="bi fs-3 bi-layers" />
                  </span>
                  <span className="menu-title">Widgets</span>
                  <span className="menu-arrow" />
                </span>
                <div
                  className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-rounded-0 py-lg-4 w-lg-225px"
                  data-kt-menu-dismiss="true"
                >
                  <div className="menu-item me-lg-1">
                    <a
                      className="menu-link py-3"
                      href="/metronic8/react/demo1/crafted/widgets/lists"
                    >
                      <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                      </span>
                      <span className="menu-title">Lists</span>
                    </a>
                  </div>
                  <div className="menu-item me-lg-1">
                    <a
                      className="menu-link py-3"
                      href="/metronic8/react/demo1/crafted/widgets/statistics"
                    >
                      <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                      </span>
                      <span className="menu-title">Statistics</span>
                    </a>
                  </div>
                  <div className="menu-item me-lg-1">
                    <a
                      className="menu-link py-3"
                      href="/metronic8/react/demo1/crafted/widgets/charts"
                    >
                      <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                      </span>
                      <span className="menu-title">Charts</span>
                    </a>
                  </div>
                  <div className="menu-item me-lg-1">
                    <a
                      className="menu-link py-3"
                      href="/metronic8/react/demo1/crafted/widgets/mixed"
                    >
                      <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                      </span>
                      <span className="menu-title">Mixed</span>
                    </a>
                  </div>
                  <div className="menu-item me-lg-1">
                    <a
                      className="menu-link py-3"
                      href="/metronic8/react/demo1/crafted/widgets/tables"
                    >
                      <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                      </span>
                      <span className="menu-title">Tables</span>
                    </a>
                  </div>
                  <div className="menu-item me-lg-1">
                    <a
                      className="menu-link py-3"
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
            </div>
          </div>
          <div
            className="menu-item menu-lg-down-accordion me-lg-1"
            data-kt-menu-trigger="click"
            data-kt-menu-placement="bottom-start"
          >
            <span className="menu-link py-3">
              <span className="menu-title">Apps</span>
            </span>
            <div
              className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-rounded-0 py-lg-4 w-lg-225px"
              data-kt-menu-dismiss="true"
            >
              <div
                className="menu-item menu-lg-down-accordion me-lg-1"
                data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                data-kt-menu-placement="right-start"
              >
                <span className="menu-link py-3">
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
                  className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-rounded-0 py-lg-4 w-lg-225px"
                  data-kt-menu-dismiss="true"
                >
                  <div className="menu-item me-lg-1">
                    <a
                      className="menu-link py-3"
                      href="/metronic8/react/demo1/apps/chat/private-chat"
                    >
                      <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                      </span>
                      <span className="menu-title">Private Chat</span>
                    </a>
                  </div>
                  <div className="menu-item me-lg-1">
                    <a
                      className="menu-link py-3"
                      href="/metronic8/react/demo1/apps/chat/group-chat"
                    >
                      <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                      </span>
                      <span className="menu-title">Group Chart</span>
                    </a>
                  </div>
                  <div className="menu-item me-lg-1">
                    <a
                      className="menu-link py-3"
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
              <div className="menu-item me-lg-1">
                <a
                  className="menu-link py-3"
                  href="/metronic8/react/demo1/apps/user-management/users"
                >
                  <span className="menu-icon">
                    <i className="ki-duotone ki-abstract-28 fs-2">
                      <span className="path1" />
                      <span className="path2" />
                    </i>
                  </span>
                  <span className="menu-title">User management</span>
                </a>
              </div>
            </div>
          </div>
          <div
            className="menu-item menu-lg-down-accordion me-lg-1"
            data-kt-menu-trigger="click"
            data-kt-menu-placement="bottom-start"
          >
            <span className="menu-link py-3">
              <span className="menu-title">Layouts</span>
            </span>
            <div
              className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown w-100 w-lg-850px p-5 p-lg-5"
              data-kt-menu-dismiss="true"
            >
              <div className="row">
                <div className="col-lg-6">
                  <div className="row">
                    <div className="col-lg-6 mb-3">
                      <h4 className="fs-6 fs-lg-4 text-gray-800 fw-bold mt-3 mb-3 ms-4">
                        Layouts
                      </h4>
                      <div className="menu-item p-0 m-0">
                        <a className="menu-link">
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot bg-gray-300i h-6px w-6px" />
                          </span>
                          <span className="menu-title">Light Sidebar</span>
                        </a>
                      </div>
                      <div className="menu-item p-0 m-0">
                        <a className="menu-link">
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot bg-gray-300i h-6px w-6px" />
                          </span>
                          <span className="menu-title">Dark Sidebar</span>
                        </a>
                      </div>
                      <div className="menu-item p-0 m-0">
                        <a className="menu-link">
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot bg-gray-300i h-6px w-6px" />
                          </span>
                          <span className="menu-title">Light Header</span>
                        </a>
                      </div>
                      <div className="menu-item p-0 m-0">
                        <a className="menu-link">
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot bg-gray-300i h-6px w-6px" />
                          </span>
                          <span className="menu-title">Dark Header</span>
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-6 mb-3">
                      <h4 className="fs-6 fs-lg-4 text-gray-800 fw-bold mt-3 mb-3 ms-4">
                        Toolbars
                      </h4>
                      <div className="menu-item p-0 m-0">
                        <a className="menu-link">
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot bg-gray-300i h-6px w-6px" />
                          </span>
                          <span className="menu-title">Classic</span>
                        </a>
                      </div>
                      <div className="menu-item p-0 m-0">
                        <a className="menu-link">
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot bg-gray-300i h-6px w-6px" />
                          </span>
                          <span className="menu-title">SaaS</span>
                        </a>
                      </div>
                      <div className="menu-item p-0 m-0">
                        <a className="menu-link">
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot bg-gray-300i h-6px w-6px" />
                          </span>
                          <span className="menu-title">Accounting</span>
                        </a>
                      </div>
                      <div className="menu-item p-0 m-0">
                        <a className="menu-link">
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot bg-gray-300i h-6px w-6px" />
                          </span>
                          <span className="menu-title">Extended</span>
                        </a>
                      </div>
                      <div className="menu-item p-0 m-0">
                        <a className="menu-link">
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot bg-gray-300i h-6px w-6px" />
                          </span>
                          <span className="menu-title">Reports</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="separator separator-dashed mx-lg-5 mt-2 mb-6" />
                  <div className="d-flex flex-stack flex-wrap flex-lg-nowrap gap-2 mb-5 mb-lg-0 mx-lg-5">
                    <div className="d-flex flex-column me-5">
                      <div className="fs-6 fw-bold text-gray-800">
                        Layout Builder
                      </div>
                      <div className="fs-7 fw-semibold text-muted">
                        Customize view
                      </div>
                    </div>
                    <a
                      className="btn btn-sm btn-primary fw-bold"
                      href="/metronic8/react/demo1/builder"
                    >
                      Try Builder
                    </a>
                  </div>
                </div>
                <div className="col-lg-6 mb-3 py-lg-3 pe-lg-8 d-flex align-items-center">
                  <img
                    src="/metronic8/react/demo1/media/stock/900x600/45.jpg"
                    className="rounded mw-100"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isMobile && menuVisible && (
        <div
          style={{
            zIndex: 105,
          }}
          className="drawer-overlay"
          onClick={(e) => {
            e.preventDefault();
            setMenuVisible("");
          }}
        />
      )}
    </>
  );
};

export default Menu;
