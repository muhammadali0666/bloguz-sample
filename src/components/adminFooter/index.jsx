import "./adminFooter.css";

import React from "react";

export const AdminFooter = () => {
  return (
    <div className="admin-footer">
      <div className="container">
        <div className="admin-footer-inner">
          <p className="footer-text-admin">
            Copyright © {new Date().getFullYear()} BlogUz Co., Ltd. Barcha
            huquqlar himoyalangan.
          </p>
        </div>
      </div>
    </div>
  );
};
