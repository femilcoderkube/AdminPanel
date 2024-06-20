import React from "react";

const Search = () => {
  return (
    <div className="card-title">
      <div className="d-flex align-items-center position-relative my-1">
        <i className="ki-duotone ki-magnifier fs-1 position-absolute ms-6">
          <span className="path1"></span>
          <span className="path2"></span>
        </i>
        <input
          type="text"
          data-kt-user-table-filter="search"
          className="form-control form-control-solid w-250px ps-14"
          placeholder="Search user"
          value=""
        />
      </div>
    </div>
  );
};

export default Search;
