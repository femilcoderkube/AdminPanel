import React from "react";

export default function Footer() {
  return (
    <div className="app-footer" id="kt_app_footer">
      <div className="app-container container-fluid d-flex flex-column flex-md-row flex-center flex-md-stack py-3">
        <div className="text-gray-900 order-2 order-md-1">
          <span className="text-muted fw-semibold me-1">2024©</span>
          <a
            href="https://keenthemes.com/"
            target="_blank"
            className="text-gray-800 text-hover-primary"
          >
            Keenthemes
          </a>
        </div>
        <ul className="menu menu-gray-600 menu-hover-primary fw-semibold order-1">
          <li className="menu-item">
            <a
              href="https://keenthemes.com/"
              target="_blank"
              className="menu-link px-2"
            >
              About
            </a>
          </li>
          <li className="menu-item">
            <a
              href="https://devs.keenthemes.com/"
              target="_blank"
              className="menu-link px-2"
            >
              Support
            </a>
          </li>
          <li className="menu-item">
            <a
              href="https://themeforest.net/item/metronic-responsive-admin-dashboard-template/4021469"
              target="_blank"
              className="menu-link px-2"
            >
              Purchase
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
