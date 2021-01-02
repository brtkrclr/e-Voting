import { Button } from "antd";
import Layout, { Content } from "antd/lib/layout/layout";
import React from "react";
import "./App.css";
import NavbarU from "./NavbarU";
import { Typography } from "antd";

const { Text, Link } = Typography;
const SignIn = () => {
  return (
    <div className="outside">
      <div className="site-layout-content">
        <div className="input-field">
          <div className="containerPrincipal">
            <div className="containerSecondary">

                <h1>SIGN IN</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
