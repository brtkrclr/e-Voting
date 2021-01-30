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
              it. With this app Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Gravida rutrum quisque non tellus. Nisi vitae
              suscipit tellus mauris a diam maecenas. Praesent tristique magna
              sit amet purus gravida quis. Vitae purus faucibus ornare
              suspendisse sed. Faucibus a pellentesque sit amet porttitor eget.
              At lectus urna duis convallis convallis. Cursus sit amet dictum
              sit amet. Tristique sollicitudin nibh sit amet commodo nulla
              facilisi nullam vehicula. Tempus imperdiet nulla malesuada
              pellentesque elit eget gravida. Enim eu turpis egestas pretium
              aenean pharetra. Sed adipiscing diam donec adipiscing tristique
              risus. Aliquam nulla facilisi cras fermentum odio eu. Diam
              maecenas sed enim ut sem viverra aliquet eget. Maecenas sed enim
              ut sem. Blandit libero volutpat sed cras ornare arcu dui vivamus.
              Morbi enim nunc faucibus a pellentesque sit amet porttitor. Vel
              risus commodo viverra maecenas. Elit pellentesque habitant morbi
              tristique senectus et netus et. Eget nulla facilisi etiam
              dignissim. Vel elit scelerisque mauris pellentesque pulvinar.
              Tortor aliquam nulla facilisi cras fermentum. Feugiat vivamus at
              augue eget. Lacus laoreet non curabitur gravida. Amet est placerat
              in egestas erat imperdiet sed euismod.
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