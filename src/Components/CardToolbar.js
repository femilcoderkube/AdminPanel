import React from "react";

const CardToolbar = (props) => {
  return (
    <div className="card-toolbar">
      <div
        className="d-flex justify-content-end"
        data-kt-user-table-toolbar="base"
      >
        {props.children}
      </div>
    </div>
  );
};

export default CardToolbar;
