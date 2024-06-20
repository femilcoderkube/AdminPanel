import React from "react";

const Filterbtn = () => {
  return (
    <button
      type="button"
      className="btn btn-light-primary me-3"
      data-kt-menu-trigger="click"
      data-kt-menu-placement="bottom-end"
    >
      <i className="ki-duotone ki-filter fs-2">
        <span className="path1"></span>
        <span className="path2"></span>
      </i>
      Filter
    </button>
  );
};

export default Filterbtn;
