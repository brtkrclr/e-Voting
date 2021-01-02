import { Button } from "antd";
import Layout, { Content } from "antd/lib/layout/layout";
import React from "react";
import "./App.css";
import { Typography } from 'antd';
import Navbar from "./Navbar";

const { Text, Link } = Typography;
const HomeU = () => {
  return (
    <Layout className="layout">
      
      <Navbar />

      <div style={{ marginTop: "50px" }}>
        <Content style={{ padding: "0 50px" }}>
          <div className="site-layout-content">
            <h1 style={{ textAlign: "center", fontSize: "36px" }}>
              Welcome to BallotBox
            </h1>
            <hr />
            <p style={{ fontSize: "50px",textAlign:"center"}}>
           HOME PAGE
            </p>
            <br />

          </div>
        </Content>
      </div>
    </Layout>
  );
};

export default HomeU;
