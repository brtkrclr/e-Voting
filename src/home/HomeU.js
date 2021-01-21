import { Button } from "antd";
import Layout, { Content } from "antd/lib/layout/layout";
import React from "react";
import "../App.css"
import NavbarU from "../navbar/NavbarU";
import { Typography } from "antd";
import SignIn from "../auth/SignIn";
import { Route, Router } from "react-router-dom";

const { Text, Link } = Typography;
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

            <div style={{ textAlign: "center" }}>
              <Link to="/login">
                <Button type="primary" style={{ fontSize: "18px" }}>
                  Log In
                </Button>
              </Link>
              <br />
              <br />
              <h2 style={{ textAlign: "center" }}>
                Don't have an account?
                <br />
                <a href={SignIn} style={{ fontSize: "18px" }}>
                  <Text underline>Register</Text>
                </a>
              </h2>
            </div>
          </div>
        </Content>
      </div>
    </Layout>
  );
};

export default HomeU;
