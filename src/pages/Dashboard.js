import React from "react";
import Footer from "../Components/Footer";
import TitleComponent from "../Components/TitleComponent";
import MainView from "../Components/MainView";
import TableHeader from "../Components/TableHeader";
import Search from "../Components/Search";
import CardToolbar from "../Components/CardToolbar";
import Addbtn from "../Components/Addbtn";
import Exportbtn from "../Components/Exportbtn";
import Filterbtn from "../Components/Filterbtn";
import Deletebtn from "../Components/Deletebtn";

const Dashboard = () => {
  return (
    <MainView>
      <TitleComponent title={"Contact Page"} subtitle={"Contact List"} />
      <div id="kt_app_content" className="app-content flex-column-fluid">
        <div
          id="kt_app_content_container"
          className="app-container container-fluid"
        >
          <div className="card">
            <TableHeader>
              <Search />
              <CardToolbar>
                <Filterbtn />
                <Exportbtn />
                {/* <Deletebtn /> */}
                <Addbtn />
              </CardToolbar>
            </TableHeader>
            <div className="card-body py-4">
              <div className="table-responsive">
                <table
                  id="kt_table_users"
                  className="table align-middle table-row-dashed fs-6 gy-5 dataTable no-footer"
                  role="table"
                >
                  <thead>
                    <tr className="text-start text-muted fw-bolder fs-7 text-uppercase gs-0">
                      <th
                        colSpan={1}
                        role="columnheader"
                        className="w-10px pe-2"
                      >
                        <div className="form-check form-check-sm form-check-custom form-check-solid me-3">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            data-kt-check="false"
                            data-kt-check-target="#kt_table_users .form-check-input"
                          />
                        </div>
                      </th>
                      <th
                        colSpan={1}
                        role="columnheader"
                        className="min-w-125px"
                        style={{ cursor: "pointer" }}
                      >
                        Name
                      </th>
                      <th
                        colSpan={1}
                        role="columnheader"
                        className="min-w-125px"
                        style={{ cursor: "pointer" }}
                      >
                        Role
                      </th>
                      <th
                        colSpan={1}
                        role="columnheader"
                        className="min-w-125px"
                        style={{ cursor: "pointer" }}
                      >
                        Last login
                      </th>
                      <th
                        colSpan={1}
                        role="columnheader"
                        className="min-w-125px"
                        style={{ cursor: "pointer" }}
                      >
                        Two steps
                      </th>
                      <th
                        colSpan={1}
                        role="columnheader"
                        className="min-w-125px"
                        style={{ cursor: "pointer" }}
                      >
                        Joined day
                      </th>
                      <th
                        colSpan={1}
                        role="columnheader"
                        className="text-end min-w-100px"
                        style={{ cursor: "pointer" }}
                      >
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600 fw-bold" role="rowgroup">
                    <tr role="row">
                      <td role="cell" className>
                        <div className="form-check form-check-custom form-check-solid">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            data-kt-check="false"
                            data-kt-check-target="#kt_table_users .form-check-input"
                          />
                        </div>
                      </td>
                      <td role="cell" className>
                        <div className="d-flex align-items-center">
                          <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                            <a href="#">
                              <div className="symbol-label">
                                <img
                                  src="/metronic8/react/demo1/media/avatars/300-6.jpg"
                                  alt="Emma Smith"
                                  className="w-100"
                                />
                              </div>
                            </a>
                          </div>
                          <div className="d-flex flex-column">
                            <a
                              href="#"
                              className="text-gray-800 text-hover-primary mb-1"
                            >
                              Emma Smith
                            </a>
                            <span>smith@kpmg.com</span>
                          </div>
                        </div>
                      </td>
                      <td role="cell" className>
                        Administrator
                      </td>
                      <td role="cell" className>
                        <div className="badge badge-light fw-bolder">
                          Yesterday
                        </div>
                      </td>
                      <td role="cell" className>
                        {" "}
                      </td>
                      <td role="cell" className>
                        10 Nov 2022, 9:23 pm
                      </td>
                      <td role="cell" className="text-end min-w-100px">
                        <a
                          href="#"
                          className="btn btn-light btn-active-light-primary btn-sm"
                          data-kt-menu-trigger="click"
                          data-kt-menu-placement="bottom-end"
                        >
                          Actions
                          <i className="ki-duotone ki-down fs-5 m-0" />
                        </a>
                        <div
                          className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4"
                          data-kt-menu="true"
                        >
                          <div className="menu-item px-3">
                            <a className="menu-link px-3">Edit</a>
                          </div>
                          <div className="menu-item px-3">
                            <a
                              className="menu-link px-3"
                              data-kt-users-table-filter="delete_row"
                            >
                              Delete
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr role="row">
                      <td role="cell" className>
                        <div className="form-check form-check-custom form-check-solid">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            data-kt-check="false"
                            data-kt-check-target="#kt_table_users .form-check-input"
                          />
                        </div>
                      </td>
                      <td role="cell" className>
                        <div className="d-flex align-items-center">
                          <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                            <a href="#">
                              <div className="symbol-label fs-3 bg-light-danger text-danger">
                                M
                              </div>
                            </a>
                          </div>
                          <div className="d-flex flex-column">
                            <a
                              href="#"
                              className="text-gray-800 text-hover-primary mb-1"
                            >
                              Melody Macy
                            </a>
                            <span>melody@altbox.com</span>
                          </div>
                        </div>
                      </td>
                      <td role="cell" className>
                        Analyst
                      </td>
                      <td role="cell" className>
                        <div className="badge badge-light fw-bolder">
                          20 mins ago
                        </div>
                      </td>
                      <td role="cell" className>
                        {" "}
                        <div className="badge badge-light-success fw-bolder">
                          Enabled
                        </div>
                      </td>
                      <td role="cell" className>
                        10 Nov 2022, 8:43 pm
                      </td>
                      <td role="cell" className="text-end min-w-100px">
                        <a
                          href="#"
                          className="btn btn-light btn-active-light-primary btn-sm"
                          data-kt-menu-trigger="click"
                          data-kt-menu-placement="bottom-end"
                        >
                          Actions
                          <i className="ki-duotone ki-down fs-5 m-0" />
                        </a>
                        <div
                          className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4"
                          data-kt-menu="true"
                        >
                          <div className="menu-item px-3">
                            <a className="menu-link px-3">Edit</a>
                          </div>
                          <div className="menu-item px-3">
                            <a
                              className="menu-link px-3"
                              data-kt-users-table-filter="delete_row"
                            >
                              Delete
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr role="row">
                      <td role="cell" className>
                        <div className="form-check form-check-custom form-check-solid">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            data-kt-check="false"
                            data-kt-check-target="#kt_table_users .form-check-input"
                          />
                        </div>
                      </td>
                      <td role="cell" className>
                        <div className="d-flex align-items-center">
                          <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                            <a href="#">
                              <div className="symbol-label">
                                <img
                                  src="/metronic8/react/demo1/media/avatars/300-1.jpg"
                                  alt="Max Smith"
                                  className="w-100"
                                />
                              </div>
                            </a>
                          </div>
                          <div className="d-flex flex-column">
                            <a
                              href="#"
                              className="text-gray-800 text-hover-primary mb-1"
                            >
                              Max Smith
                            </a>
                            <span>max@kt.com</span>
                          </div>
                        </div>
                      </td>
                      <td role="cell" className>
                        Developer
                      </td>
                      <td role="cell" className>
                        <div className="badge badge-light fw-bolder">
                          3 days ago
                        </div>
                      </td>
                      <td role="cell" className>
                        {" "}
                      </td>
                      <td role="cell" className>
                        22 Sep 2022, 8:43 pm
                      </td>
                      <td role="cell" className="text-end min-w-100px">
                        <a
                          href="#"
                          className="btn btn-light btn-active-light-primary btn-sm"
                          data-kt-menu-trigger="click"
                          data-kt-menu-placement="bottom-end"
                        >
                          Actions
                          <i className="ki-duotone ki-down fs-5 m-0" />
                        </a>
                        <div
                          className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4"
                          data-kt-menu="true"
                        >
                          <div className="menu-item px-3">
                            <a className="menu-link px-3">Edit</a>
                          </div>
                          <div className="menu-item px-3">
                            <a
                              className="menu-link px-3"
                              data-kt-users-table-filter="delete_row"
                            >
                              Delete
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr role="row">
                      <td role="cell" className>
                        <div className="form-check form-check-custom form-check-solid">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            data-kt-check="false"
                            data-kt-check-target="#kt_table_users .form-check-input"
                          />
                        </div>
                      </td>
                      <td role="cell" className>
                        <div className="d-flex align-items-center">
                          <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                            <a href="#">
                              <div className="symbol-label">
                                <img
                                  src="/metronic8/react/demo1/media/avatars/300-5.jpg"
                                  alt="Sean Bean"
                                  className="w-100"
                                />
                              </div>
                            </a>
                          </div>
                          <div className="d-flex flex-column">
                            <a
                              href="#"
                              className="text-gray-800 text-hover-primary mb-1"
                            >
                              Sean Bean
                            </a>
                            <span>sean@dellito.com</span>
                          </div>
                        </div>
                      </td>
                      <td role="cell" className>
                        Support
                      </td>
                      <td role="cell" className>
                        <div className="badge badge-light fw-bolder">
                          5 hours ago
                        </div>
                      </td>
                      <td role="cell" className>
                        {" "}
                        <div className="badge badge-light-success fw-bolder">
                          Enabled
                        </div>
                      </td>
                      <td role="cell" className>
                        21 Feb 2022, 6:43 am
                      </td>
                      <td role="cell" className="text-end min-w-100px">
                        <a
                          href="#"
                          className="btn btn-light btn-active-light-primary btn-sm"
                          data-kt-menu-trigger="click"
                          data-kt-menu-placement="bottom-end"
                        >
                          Actions
                          <i className="ki-duotone ki-down fs-5 m-0" />
                        </a>
                        <div
                          className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4"
                          data-kt-menu="true"
                        >
                          <div className="menu-item px-3">
                            <a className="menu-link px-3">Edit</a>
                          </div>
                          <div className="menu-item px-3">
                            <a
                              className="menu-link px-3"
                              data-kt-users-table-filter="delete_row"
                            >
                              Delete
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr role="row">
                      <td role="cell" className>
                        <div className="form-check form-check-custom form-check-solid">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            data-kt-check="false"
                            data-kt-check-target="#kt_table_users .form-check-input"
                          />
                        </div>
                      </td>
                      <td role="cell" className>
                        <div className="d-flex align-items-center">
                          <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                            <a href="#">
                              <div className="symbol-label">
                                <img
                                  src="/metronic8/react/demo1/media/avatars/300-25.jpg"
                                  alt="Brian Cox"
                                  className="w-100"
                                />
                              </div>
                            </a>
                          </div>
                          <div className="d-flex flex-column">
                            <a
                              href="#"
                              className="text-gray-800 text-hover-primary mb-1"
                            >
                              Brian Cox
                            </a>
                            <span>brian@exchange.com</span>
                          </div>
                        </div>
                      </td>
                      <td role="cell" className>
                        Developer
                      </td>
                      <td role="cell" className>
                        <div className="badge badge-light fw-bolder">
                          2 days ago
                        </div>
                      </td>
                      <td role="cell" className>
                        {" "}
                        <div className="badge badge-light-success fw-bolder">
                          Enabled
                        </div>
                      </td>
                      <td role="cell" className>
                        10 Mar 2022, 9:23 pm
                      </td>
                      <td role="cell" className="text-end min-w-100px">
                        <a
                          href="#"
                          className="btn btn-light btn-active-light-primary btn-sm"
                          data-kt-menu-trigger="click"
                          data-kt-menu-placement="bottom-end"
                        >
                          Actions
                          <i className="ki-duotone ki-down fs-5 m-0" />
                        </a>
                        <div
                          className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4"
                          data-kt-menu="true"
                        >
                          <div className="menu-item px-3">
                            <a className="menu-link px-3">Edit</a>
                          </div>
                          <div className="menu-item px-3">
                            <a
                              className="menu-link px-3"
                              data-kt-users-table-filter="delete_row"
                            >
                              Delete
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr role="row">
                      <td role="cell" className>
                        <div className="form-check form-check-custom form-check-solid">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            data-kt-check="false"
                            data-kt-check-target="#kt_table_users .form-check-input"
                          />
                        </div>
                      </td>
                      <td role="cell" className>
                        <div className="d-flex align-items-center">
                          <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                            <a href="#">
                              <div className="symbol-label fs-3 bg-light-warning text-warning">
                                M
                              </div>
                            </a>
                          </div>
                          <div className="d-flex flex-column">
                            <a
                              href="#"
                              className="text-gray-800 text-hover-primary mb-1"
                            >
                              Mikaela Collins
                            </a>
                            <span>mik@pex.com</span>
                          </div>
                        </div>
                      </td>
                      <td role="cell" className>
                        Administrator
                      </td>
                      <td role="cell" className>
                        <div className="badge badge-light fw-bolder">
                          5 days ago
                        </div>
                      </td>
                      <td role="cell" className>
                        {" "}
                      </td>
                      <td role="cell" className>
                        20 Dec 2022, 10:10 pm
                      </td>
                      <td role="cell" className="text-end min-w-100px">
                        <a
                          href="#"
                          className="btn btn-light btn-active-light-primary btn-sm"
                          data-kt-menu-trigger="click"
                          data-kt-menu-placement="bottom-end"
                        >
                          Actions
                          <i className="ki-duotone ki-down fs-5 m-0" />
                        </a>
                        <div
                          className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4"
                          data-kt-menu="true"
                        >
                          <div className="menu-item px-3">
                            <a className="menu-link px-3">Edit</a>
                          </div>
                          <div className="menu-item px-3">
                            <a
                              className="menu-link px-3"
                              data-kt-users-table-filter="delete_row"
                            >
                              Delete
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr role="row">
                      <td role="cell" className>
                        <div className="form-check form-check-custom form-check-solid">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            data-kt-check="false"
                            data-kt-check-target="#kt_table_users .form-check-input"
                          />
                        </div>
                      </td>
                      <td role="cell" className>
                        <div className="d-flex align-items-center">
                          <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                            <a href="#">
                              <div className="symbol-label">
                                <img
                                  src="/metronic8/react/demo1/media/avatars/300-9.jpg"
                                  alt="Francis Mitcham"
                                  className="w-100"
                                />
                              </div>
                            </a>
                          </div>
                          <div className="d-flex flex-column">
                            <a
                              href="#"
                              className="text-gray-800 text-hover-primary mb-1"
                            >
                              Francis Mitcham
                            </a>
                            <span>f.mit@kpmg.com</span>
                          </div>
                        </div>
                      </td>
                      <td role="cell" className>
                        Trial
                      </td>
                      <td role="cell" className>
                        <div className="badge badge-light fw-bolder">
                          3 weeks ago
                        </div>
                      </td>
                      <td role="cell" className>
                        {" "}
                      </td>
                      <td role="cell" className>
                        10 Nov 2022, 6:43 am
                      </td>
                      <td role="cell" className="text-end min-w-100px">
                        <a
                          href="#"
                          className="btn btn-light btn-active-light-primary btn-sm"
                          data-kt-menu-trigger="click"
                          data-kt-menu-placement="bottom-end"
                        >
                          Actions
                          <i className="ki-duotone ki-down fs-5 m-0" />
                        </a>
                        <div
                          className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4"
                          data-kt-menu="true"
                        >
                          <div className="menu-item px-3">
                            <a className="menu-link px-3">Edit</a>
                          </div>
                          <div className="menu-item px-3">
                            <a
                              className="menu-link px-3"
                              data-kt-users-table-filter="delete_row"
                            >
                              Delete
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr role="row">
                      <td role="cell" className>
                        <div className="form-check form-check-custom form-check-solid">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            data-kt-check="false"
                            data-kt-check-target="#kt_table_users .form-check-input"
                          />
                        </div>
                      </td>
                      <td role="cell" className>
                        <div className="d-flex align-items-center">
                          <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                            <a href="#">
                              <div className="symbol-label fs-3 bg-light-danger text-danger">
                                O
                              </div>
                            </a>
                          </div>
                          <div className="d-flex flex-column">
                            <a
                              href="#"
                              className="text-gray-800 text-hover-primary mb-1"
                            >
                              Olivia Wild
                            </a>
                            <span>olivia@corpmail.com</span>
                          </div>
                        </div>
                      </td>
                      <td role="cell" className>
                        Administrator
                      </td>
                      <td role="cell" className>
                        <div className="badge badge-light fw-bolder">
                          Yesterday
                        </div>
                      </td>
                      <td role="cell" className>
                        {" "}
                      </td>
                      <td role="cell" className>
                        19 Aug 2022, 11:05 am
                      </td>
                      <td role="cell" className="text-end min-w-100px">
                        <a
                          href="#"
                          className="btn btn-light btn-active-light-primary btn-sm"
                          data-kt-menu-trigger="click"
                          data-kt-menu-placement="bottom-end"
                        >
                          Actions
                          <i className="ki-duotone ki-down fs-5 m-0" />
                        </a>
                        <div
                          className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4"
                          data-kt-menu="true"
                        >
                          <div className="menu-item px-3">
                            <a className="menu-link px-3">Edit</a>
                          </div>
                          <div className="menu-item px-3">
                            <a
                              className="menu-link px-3"
                              data-kt-users-table-filter="delete_row"
                            >
                              Delete
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr role="row">
                      <td role="cell" className>
                        <div className="form-check form-check-custom form-check-solid">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            data-kt-check="false"
                            data-kt-check-target="#kt_table_users .form-check-input"
                          />
                        </div>
                      </td>
                      <td role="cell" className>
                        <div className="d-flex align-items-center">
                          <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                            <a href="#">
                              <div className="symbol-label fs-3 bg-light-primary text-primary">
                                N
                              </div>
                            </a>
                          </div>
                          <div className="d-flex flex-column">
                            <a
                              href="#"
                              className="text-gray-800 text-hover-primary mb-1"
                            >
                              Neil Owen
                            </a>
                            <span>owen.neil@gmail.com</span>
                          </div>
                        </div>
                      </td>
                      <td role="cell" className>
                        Analyst
                      </td>
                      <td role="cell" className>
                        <div className="badge badge-light fw-bolder">
                          20 mins ago
                        </div>
                      </td>
                      <td role="cell" className>
                        {" "}
                        <div className="badge badge-light-success fw-bolder">
                          Enabled
                        </div>
                      </td>
                      <td role="cell" className>
                        25 Oct 2022, 10:30 am
                      </td>
                      <td role="cell" className="text-end min-w-100px">
                        <a
                          href="#"
                          className="btn btn-light btn-active-light-primary btn-sm"
                          data-kt-menu-trigger="click"
                          data-kt-menu-placement="bottom-end"
                        >
                          Actions
                          <i className="ki-duotone ki-down fs-5 m-0" />
                        </a>
                        <div
                          className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4"
                          data-kt-menu="true"
                        >
                          <div className="menu-item px-3">
                            <a className="menu-link px-3">Edit</a>
                          </div>
                          <div className="menu-item px-3">
                            <a
                              className="menu-link px-3"
                              data-kt-users-table-filter="delete_row"
                            >
                              Delete
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr role="row">
                      <td role="cell" className>
                        <div className="form-check form-check-custom form-check-solid">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            data-kt-check="false"
                            data-kt-check-target="#kt_table_users .form-check-input"
                          />
                        </div>
                      </td>
                      <td role="cell" className>
                        <div className="d-flex align-items-center">
                          <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                            <a href="#">
                              <div className="symbol-label">
                                <img
                                  src="/metronic8/react/demo1/media/avatars/300-23.jpg"
                                  alt="Dan Wilson"
                                  className="w-100"
                                />
                              </div>
                            </a>
                          </div>
                          <div className="d-flex flex-column">
                            <a
                              href="#"
                              className="text-gray-800 text-hover-primary mb-1"
                            >
                              Dan Wilson
                            </a>
                            <span>dam@consilting.com</span>
                          </div>
                        </div>
                      </td>
                      <td role="cell" className>
                        Developer
                      </td>
                      <td role="cell" className>
                        <div className="badge badge-light fw-bolder">
                          3 days ago
                        </div>
                      </td>
                      <td role="cell" className>
                        {" "}
                      </td>
                      <td role="cell" className>
                        19 Aug 2022, 10:10 pm
                      </td>
                      <td role="cell" className="text-end min-w-100px">
                        <a
                          href="#"
                          className="btn btn-light btn-active-light-primary btn-sm"
                          data-kt-menu-trigger="click"
                          data-kt-menu-placement="bottom-end"
                        >
                          Actions
                          <i className="ki-duotone ki-down fs-5 m-0" />
                        </a>
                        <div
                          className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4"
                          data-kt-menu="true"
                        >
                          <div className="menu-item px-3">
                            <a className="menu-link px-3">Edit</a>
                          </div>
                          <div className="menu-item px-3">
                            <a
                              className="menu-link px-3"
                              data-kt-users-table-filter="delete_row"
                            >
                              Delete
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="row">
                <div className="col-sm-12 col-md-5 d-flex align-items-center justify-content-center justify-content-md-start" />
                <div className="col-sm-12 col-md-7 d-flex align-items-center justify-content-center justify-content-md-end">
                  <div id="kt_table_users_paginate">
                    <ul className="pagination">
                      <li className="page-item disabled">
                        <a className="page-link" style={{ cursor: "pointer" }}>
                          First
                        </a>
                      </li>
                      <li className="page-item previous">
                        <a
                          className="page-link page-text me-5"
                          style={{ cursor: "pointer" }}
                        >
                          Previous
                        </a>
                      </li>
                      <li className="page-item active">
                        <a className="page-link" style={{ cursor: "pointer" }}>
                          1
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" style={{ cursor: "pointer" }}>
                          2
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" style={{ cursor: "pointer" }}>
                          3
                        </a>
                      </li>
                      <li className="page-item next">
                        <a
                          className="page-link page-text"
                          style={{ cursor: "pointer" }}
                        >
                          Next
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" style={{ cursor: "pointer" }}>
                          Last
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </MainView>
  );
};

export default Dashboard;
