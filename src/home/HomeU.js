import { Button } from "antd";
import Layout, { Content, Footer } from "antd/lib/layout/layout";
import React from "react";
import "../App.css"
import NavbarU from "../navbar/NavbarU";
import { Typography } from "antd";
import SignIn from "../auth/SignIn";
import { Link } from "react-router-dom";
import { Route, Router } from "react-router-dom";

const { Text} = Typography;
const HomeU = () => {
  return (
    <Layout className="layout">
      <NavbarU />

      <div style={{ marginTop: "50px" }}>
        <Content style={{ padding: "0 50px" }}>
          <div className="site-layout-content">
            <h1 style={{ textAlign: "center", fontSize: "36px" }}>
              Welcome to BallotBox
            </h1>
            <hr />
            <p style={{ fontSize: "25px" }}>
            BallotBox is a web site that you can create your voting and share
              it. With this app you can create votings on political, educational, 
              or participatory topics. Your votings will be secure, and easy to 
              access by the voters. 
            </p>
            <br />

            <div style={{ textAlign: "center" }}>
            <Link to="/signin">
              <Button type="primary" >Log In</Button>
            </Link>
              <br />
              <br />
              <h2 style={{ textAlign: "center" }}>
                Don't have an account?
                <br />
                <Link to="/signup">
                <Button type="text" >
                 <Text underline style={{fontSize:"18px"}}> Sign Up</Text>
                </Button>
              </Link>
              </h2>
            </div>
          </div>
        </Content>
      </div>
      
      <Footer style={{ textAlign: "center" }}>©️2021 BallotBox</Footer>
    </Layout>
  );
};

export default HomeU;
