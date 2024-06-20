import React from "react";

const Deletebtn = () => {
  return (
    <div className="d-flex justify-content-end align-items-center">
      <div className="fw-bolder me-5">
        <span className="me-2">10</span> Selected
      </div>
      <button type="submit" className="btn btn-danger">
        Delete Selected
      </button>
    </div>
  );
};

export default Deletebtn;
