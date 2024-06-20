import { useState } from "react";
import * as Yup from "yup";
import clsx from "clsx";
import { useFormik } from "formik";
import login from "../img/login-background-right.png";
import googleIcon from "../img/google-icon.svg";
import msLogin from "../img/microftlogo.png";
import logo from "../img/simply-logo.png";
import { Link } from "react-router-dom";

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Wrong email format")
    .min(3, "Minimum 3 symbols")
    .max(50, "Maximum 50 symbols")
    .required("Email is required"),
  password: Yup.string()
    .min(3, "Minimum 3 symbols")
    .max(50, "Maximum 50 symbols")
    .required("Password is required"),
});

const initialValues = {
  email: "admin@demo.com",
  password: "demo",
};

export function Login() {
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues,
    validationSchema: loginSchema,
    onSubmit: async (values, { setStatus, setSubmitting }) => {
      setLoading(true);
      try {
        // const { data: auth } = await login(values.email, values.password);
        // saveAuth(auth);
        // const { data: user } = await getUserByToken(auth.api_token);
        // setCurrentUser(user);
      } catch (error) {
        console.error(error);
        // saveAuth(undefined);
        setStatus("The login details are incorrect");
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
              className="form w-100"
              onSubmit={formik.handleSubmit}
              noValidate
              id="kt_login_signin_form"
            >
              <div className="text-center mb-11">
                <h1 className="text-gray-900 fw-bolder mb-3">Sign In</h1>
                <div className="text-gray-500 fw-semibold fs-6">
                  <img src={logo} alt="logo" />
                </div>
              </div>

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

              {/* {formik.status ? (
                <div className="mb-lg-15 alert alert-danger">
                  <div className="alert-text font-weight-bold">
                    {formik.status}
                  </div>
                </div>
              ) : (
                <div className="mb-10 bg-light-info p-8 rounded">
                  <div className="text-info">
                    Use account <strong>admin@demo.com</strong> and password{" "}
                    <strong>demo</strong> to continue.
                  </div>
                </div>
              )} */}

              <div className="fv-row mb-8">
                <label className="form-label fs-6 fw-bolder text-gray-900">
                  Email
                </label>
                <input
                  placeholder="Email"
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
                  type="email"
                  name="email"
                  autoComplete="off"
                />
                {formik.touched.email && formik.errors.email && (
                  <div className="fv-plugins-message-container">
                    <span role="alert">{formik.errors.email}</span>
                  </div>
                )}
              </div>

              <div className="fv-row mb-3">
                <label className="form-label fw-bolder text-gray-900 fs-6 mb-0">
                  Password
                </label>
                <input
                  type="password"
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

              <div className="d-flex flex-stack flex-wrap gap-3 fs-base fw-semibold mb-8">
                <div />

                <Link to="#" className="link-primary">
                  Forgot Password ?
                </Link>
              </div>

              <div className="d-grid mb-10">
                <button
                  type="submit"
                  id="kt_sign_in_submit"
                  className="btn btn-primary"
                  disabled={formik.isSubmitting || !formik.isValid}
                >
                  {!loading && (
                    <span className="indicator-label">Continue</span>
                  )}
                  {loading && (
                    <span
                      className="indicator-progress"
                      style={{ display: "block" }}
                    >
                      Please wait...
                      <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
                    </span>
                  )}
                </button>
              </div>

              <div className="text-gray-500 text-center fw-semibold fs-6">
                Not a Member yet?{" "}
                <Link to="#" className="link-primary">
                  Sign up
                </Link>
              </div>
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
}
