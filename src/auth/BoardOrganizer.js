import React, { useState, useEffect } from "react";
import { Divider } from "antd";
import Layout, { Content, Footer } from "antd/lib/layout/layout";
import UserService from "../services/user.service";
import Navbar from "../navbar/Navbar";
import OrganizerProfile from "../organizer/OrganizerProfile";

const BoardOrganizer = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    UserService.getModeratorBoard().then(
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
         <OrganizerProfile/>
        </div>
      </Content>
    </div>
    <Footer style={{ textAlign: "center" }}>©️2021 BallotBox</Footer>
  </Layout>
  );
};

export default BoardOrganizer;