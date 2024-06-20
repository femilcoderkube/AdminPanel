import React from "react";
import err from "../img/404.png";
import { Link, useNavigate } from "react-router-dom";
export default function Error404() {
  const history = useNavigate();
  return (
    <div className="d-flex flex-column flex-root">
      <div className="d-flex flex-column flex-center flex-column-fluid">
        <div className="d-flex flex-column flex-center text-center p-10">
          <div className="card card-flush  w-lg-650px py-5">
            <div className="card-body py-15 py-lg-20">
              <h1 className="fw-bolder fs-2hx text-gray-900 mb-4">Oops!</h1>
              <div className="fw-semibold fs-6 text-gray-500 mb-7">
                We can't find that page.
              </div>
              <div className="mb-3">
                <img
                  src={err}
                  className="mw-100 mh-300px theme-light-show"
                  alt="Error"
                />
              </div>
              <div className="mb-0">
                <Link
                  className="btn btn-sm btn-primary"
                  onClick={(e) => {
                    e.preventDefault();
                    history("/");
                  }}
                >
                  Return Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
