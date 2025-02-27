import { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import clsx from "clsx";
import { Link } from "react-router-dom";

import login from "../img/login-background-right.png";
import googleIcon from "../img/google-icon.svg";
import msLogin from "../img/microftlogo.png";
import logo from "../img/simply-logo.png";

const initialValues = {
  firstname: "",
  lastname: "",
  email: "",
  password: "",
  changepassword: "",
  acceptTerms: false,
};

const registrationSchema = Yup.object().shape({
  firstname: Yup.string()
    .min(3, "Minimum 3 symbols")
    .max(50, "Maximum 50 symbols")
    .required("First name is required"),
  email: Yup.string()
    .email("Wrong email format")
    .min(3, "Minimum 3 symbols")
    .max(50, "Maximum 50 symbols")
    .required("Email is required"),
  lastname: Yup.string()
    .min(3, "Minimum 3 symbols")
    .max(50, "Maximum 50 symbols")
    .required("Last name is required"),
  password: Yup.string()
    .min(3, "Minimum 3 symbols")
    .max(50, "Maximum 50 symbols")
    .required("Password is required"),
  changepassword: Yup.string()
    .min(3, "Minimum 3 symbols")
    .max(50, "Maximum 50 symbols")
    .required("Password confirmation is required")
    .oneOf([Yup.ref("password")], "Password and Confirm Password didn't match"),
  acceptTerms: Yup.bool().required("You must accept the terms and conditions"),
});

const Register = () => {
  const [loading, setLoading] = useState(false);
  //   const { saveAuth, setCurrentUser } = useAuth();
  const formik = useFormik({
    initialValues,
    validationSchema: registrationSchema,
    onSubmit: async (values, { setStatus, setSubmitting }) => {
      setLoading(true);
      try {
        // const { data: auth } = await register(
        //   values.email,
        //   values.firstname,
        //   values.lastname,
        //   values.password,
        //   values.changepassword
        // );
        // saveAuth(auth);
        // const { data: user } = await getUserByToken(auth.api_token);
        // setCurrentUser(user);
      } catch (error) {
        console.error(error);
        // saveAuth(undefined);
        setStatus("The registration details is incorrect");
        setSubmitting(false);
        setLoading(false);
      }
    },
  });

  return (
    <div className="d-flex flex-column flex-lg-row flex-column-fluid h-100">
      <div className="d-flex flex-column flex-lg-row-fluid w-lg-50 p-10 order-2 order-lg-1">
        <div className="d-flex flex-center flex-column flex-lg-row-fluid">
          <div className="w-lg-500px p-10">
            <form
              className="form w-100 fv-plugins-bootstrap5 fv-plugins-framework"
              noValidate
              id="kt_login_signup_form"
              onSubmit={formik.handleSubmit}
            >
              {/* begin::Heading */}
              <div className="text-center mb-11">
                {/* begin::Title */}
                <h1 className="text-gray-900 fw-bolder mb-3">Sign Up</h1>
                {/* end::Title */}

                <div className="text-gray-500 fw-semibold fs-6">
                  <img src={logo} alt="logo" />
                </div>
              </div>
              {/* end::Heading */}

              <div className="row g-3 mb-9">
                <div className="col-md-6">
                  <a
                    href="#"
                    className="btn btn-flex btn-outline btn-text-gray-700 btn-active-color-primary bg-state-light flex-center text-nowrap w-100"
                  >
                    <img alt="Logo" src={googleIcon} className="h-15px me-3" />
                    Sign in with Google
                  </a>
                </div>

                <div className="col-md-6">
                  <a
                    href="#"
                    className="btn btn-flex btn-outline btn-text-gray-700 btn-active-color-primary bg-state-light flex-center text-nowrap w-100"
                  >
                    <img alt="Logo" src={msLogin} className="h-15px me-3" />
                    Sign in with Microsoft
                  </a>
                </div>
              </div>

              <div className="separator separator-content my-14">
                <span className="w-125px text-gray-500 fw-semibold fs-7">
                  Or with email
                </span>
              </div>

              {formik.status && (
                <div className="mb-lg-15 alert alert-danger">
                  <div className="alert-text font-weight-bold">
                    {formik.status}
                  </div>
                </div>
              )}

              {/* begin::Form group Firstname */}
              <div className="fv-row mb-8">
                <label className="form-label fw-bolder text-gray-900 fs-6">
                  First name
                </label>
                <input
                  placeholder="First name"
                  type="text"
                  autoComplete="off"
                  {...formik.getFieldProps("firstname")}
                  className={clsx(
                    "form-control bg-transparent",
                    {
                      "is-invalid":
                        formik.touched.firstname && formik.errors.firstname,
                    },
                    {
                      "is-valid":
                        formik.touched.firstname && !formik.errors.firstname,
                    }
                  )}
                />
                {formik.touched.firstname && formik.errors.firstname && (
                  <div className="fv-plugins-message-container">
                    <div className="fv-help-block">
                      <span role="alert">{formik.errors.firstname}</span>
                    </div>
                  </div>
                )}
              </div>
              {/* end::Form group */}
              <div className="fv-row mb-8">
                {/* begin::Form group Lastname */}
                <label className="form-label fw-bolder text-gray-900 fs-6">
                  Last name
                </label>
                <input
                  placeholder="Last name"
                  type="text"
                  autoComplete="off"
                  {...formik.getFieldProps("lastname")}
                  className={clsx(
                    "form-control bg-transparent",
                    {
                      "is-invalid":
                        formik.touched.lastname && formik.errors.lastname,
                    },
                    {
                      "is-valid":
                        formik.touched.lastname && !formik.errors.lastname,
                    }
                  )}
                />
                {formik.touched.lastname && formik.errors.lastname && (
                  <div className="fv-plugins-message-container">
                    <div className="fv-help-block">
                      <span role="alert">{formik.errors.lastname}</span>
                    </div>
                  </div>
                )}
                {/* end::Form group */}
              </div>

              {/* begin::Form group Email */}
              <div className="fv-row mb-8">
                <label className="form-label fw-bolder text-gray-900 fs-6">
                  Email
                </label>
                <input
                  placeholder="Email"
                  type="email"
                  autoComplete="off"
                  {...formik.getFieldProps("email")}
                  className={clsx(
                    "form-control bg-transparent",
                    {
                      "is-invalid": formik.touched.email && formik.errors.email,
                    },
                    {
                      "is-valid": formik.touched.email && !formik.errors.email,
                    }
                  )}
                />
                {formik.touched.email && formik.errors.email && (
                  <div className="fv-plugins-message-container">
                    <div className="fv-help-block">
                      <span role="alert">{formik.errors.email}</span>
                    </div>
                  </div>
                )}
              </div>
              {/* end::Form group */}

              {/* begin::Form group Password */}
              <div className="fv-row mb-8" data-kt-password-meter="true">
                <div className="mb-1">
                  <label className="form-label fw-bolder text-gray-900 fs-6">
                    Password
                  </label>
                  <div className="position-relative mb-3">
                    <input
                      type="password"
                      placeholder="Password"
                      autoComplete="off"
                      {...formik.getFieldProps("password")}
                      className={clsx(
                        "form-control bg-transparent",
                        {
                          "is-invalid":
                            formik.touched.password && formik.errors.password,
                        },
                        {
                          "is-valid":
                            formik.touched.password && !formik.errors.password,
                        }
                      )}
                    />
                    {formik.touched.password && formik.errors.password && (
                      <div className="fv-plugins-message-container">
                        <div className="fv-help-block">
                          <span role="alert">{formik.errors.password}</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div className="text-muted">
                  Use 8 or more characters with a mix of letters, numbers &
                  symbols.
                </div>
              </div>
              {/* end::Form group */}

              {/* begin::Form group Confirm password */}
              <div className="fv-row mb-5">
                <label className="form-label fw-bolder text-gray-900 fs-6">
                  Confirm Password
                </label>
                <input
                  type="password"
                  placeholder="Password confirmation"
                  autoComplete="off"
                  {...formik.getFieldProps("changepassword")}
                  className={clsx(
                    "form-control bg-transparent",
                    {
                      "is-invalid":
                        formik.touched.changepassword &&
                        formik.errors.changepassword,
                    },
                    {
                      "is-valid":
                        formik.touched.changepassword &&
                        !formik.errors.changepassword,
                    }
                  )}
                />
                {formik.touched.changepassword &&
                  formik.errors.changepassword && (
                    <div className="fv-plugins-message-container">
                      <div className="fv-help-block">
                        <span role="alert">{formik.errors.changepassword}</span>
                      </div>
                    </div>
                  )}
              </div>
              {/* end::Form group */}

              {/* begin::Form group */}
              <div className="fv-row mb-8">
                <label
                  className="form-check form-check-inline"
                  htmlFor="kt_login_toc_agree"
                >
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="kt_login_toc_agree"
                    {...formik.getFieldProps("acceptTerms")}
                  />
                  <span>
                    I Accept the{" "}
                    <a
                      href="https://keenthemes.com/metronic/?page=faq"
                      target="_blank"
                      className="ms-1 link-primary"
                    >
                      Terms
                    </a>
                    .
                  </span>
                </label>
                {formik.touched.acceptTerms && formik.errors.acceptTerms && (
                  <div className="fv-plugins-message-container">
                    <div className="fv-help-block">
                      <span role="alert">{formik.errors.acceptTerms}</span>
                    </div>
                  </div>
                )}
              </div>
              {/* end::Form group */}

              {/* begin::Form group */}
              <div className="text-center">
                <button
                  type="submit"
                  id="kt_sign_up_submit"
                  className="btn btn-lg btn-primary w-100 mb-5"
                  disabled={
                    formik.isSubmitting ||
                    !formik.isValid ||
                    !formik.values.acceptTerms
                  }
                >
                  {!loading && <span className="indicator-label">Submit</span>}
                  {loading && (
                    <span
                      className="indicator-progress"
                      style={{ display: "block" }}
                    >
                      Please wait...{" "}
                      <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
                    </span>
                  )}
                </button>
                <Link to="/auth/login">
                  <button
                    type="button"
                    id="kt_login_signup_form_cancel_button"
                    className="btn btn-lg btn-light-primary w-100 mb-5"
                  >
                    Cancel
                  </button>
                </Link>
              </div>
              {/* end::Form group */}
            </form>
          </div>
        </div>
        {/* <div className="d-flex flex-center flex-wrap px-5">
          <div className="d-flex fw-semibold text-primary fs-base">
            <Link href="#" className="px-5" target="_blank">
              Terms
            </Link>

            <Link href="#" className="px-5" target="_blank">
              Plans
            </Link>

            <Link href="#" className="px-5" target="_blank">
              Contact Us
            </Link>
          </div>
        </div> */}
      </div>
      <div className="d-flex flex-lg-row-fluid w-lg-50 bgi-size-cover bgi-position-center order-1 order-lg-2">
        <img className="w-100" src={login} alt="Simply-Crm" />
      </div>
    </div>
  );
};
export default Register;
