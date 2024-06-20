import React from "react";

const TitleComponent = ({ title, subtitle }) => {
  return (
    <div id="kt_app_toolbar" className="app-toolbar py-3 py-lg-6">
      <div
        id="kt_app_toolbar_container"
        className="app-container d-flex flex-stack container-fluid"
      >
        <div
          id="kt_page_title"
          data-kt-swapper="true"
          data-kt-swapper-mode="prepend"
          data-kt-swapper-parent="{default: '#kt_content_container', 'lg': '#kt_toolbar_container'}"
          className="page-title d-flex flex-wrap me-3 flex-column justify-content-center"
        >
          <h1 className="page-heading d-flex text-gray-900 fw-bold fs-3 my-0 flex-column justify-content-center">
            {title}
          </h1>
          <ul className="breadcrumb breadcrumb-separatorless fw-semibold fs-7 my-0">
            <li className="breadcrumb-item text-muted">
              <a
                className="text-muted text-hover-primary"
                href="/metronic8/react/demo1/apps/user-management/users"
              >
                {title}
              </a>
            </li>
            <li className="breadcrumb-item">
              <span className="bullet bg-gray-500 w-5px h-2px" />
            </li>
            <li className="breadcrumb-item text-gray-900">{subtitle}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TitleComponent;
