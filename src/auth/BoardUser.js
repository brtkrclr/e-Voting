import { Divider } from "antd";
import Layout, { Content, Footer } from "antd/lib/layout/layout";
import React, { useState, useEffect } from "react";
import Navbar from "../navbar/Navbar";

import UserService from "../services/user.service";

const BoardUser = () => {
  const [content, setContent] = useState("");
  useEffect(() => {
    UserService.getUserBoard().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setContent(_content);
      }
    );
  }, []);

  return (
    <Layout className="layout">
    <Navbar />
    <div style={{ marginTop: "50px" }}>
      <Content style={{ padding: "0 50px" }}>
        <div className="site-layout-content">
          <Divider style={{ color: "gray" }} />

         <h6>{content}</h6>
        </div>
      </Content>
    </div>
    <Footer style={{ textAlign: "center" }}>©️2021 BallotBox</Footer>
  </Layout>
  );
};

export default BoardUser;