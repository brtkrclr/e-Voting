import Layout, { Content, Footer } from "antd/lib/layout/layout";
import React, { useState,useEffect } from "react";
import "../App.css"
import Navbar from "../navbar/Navbar";
import UserService from "../services/user.service";
import NavbarU from "../navbar/NavbarU";
import { Button,Typography } from "antd";
import { Link } from "react-router-dom";

const { Text } = Typography;

const Home = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    UserService.getPublicContent().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();

        setContent(_content);
      }
    );
  }, []);
  return (
      <Layout className="layout">
        <Navbar/>
        <div style={{ marginTop: "50px" }}>
        <Content style={{ padding: "0 50px" }}>
          <div className="site-layout-content">
            <h1 style={{ textAlign: "center", fontSize: "36px" }}>
              Welcome to BallotBox
            </h1>
            <hr />
            <p style={{ fontSize: "25px" }}>
              BallotBox is a web site that you can create your voting and share
              it. With this app you can 
            </p>
            <br />

      
          </div>
        </Content>
        </div>
        <Footer style={{ textAlign: "center" }}>©️2021 BallotBox</Footer>
      </Layout>
    );
  }
export default Home;