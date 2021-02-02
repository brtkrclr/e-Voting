import {
  Layout,
  Menu,
  Breadcrumb,
  Col,
  Row,
  Dropdown,
  message,
  Button,
} from "antd";
import SubMenu from "antd/lib/menu/SubMenu";
import {
  MenuOutlined,
  UserOutlined,
  CloseOutlined,
  DownOutlined,
  LockOutlined,
} from "@ant-design/icons";
import React, { useState, useEffect } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import Search from "antd/lib/input/Search";
import AuthService from "../services/auth.services";
const { Header, Content, Footer } = Layout;
const Navbar = () => {
  const onSearch = (value) => console.log(value);

  const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user.roles.includes("ROLE_USER"));
      setShowModeratorBoard(user.roles.includes("ROLE_MODERATOR"));
      setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
    }
  }, []);

  const logOut = () => {
    AuthService.logout();
  };

  const menu = (
      <Menu
      >

        {showModeratorBoard && (

            <Menu.Item icon={<UserOutlined />}>
              <Link to={"/organizer"}>Organizer </Link>
            </Menu.Item>
        )}

        {showAdminBoard && (
            <Menu.Item icon={<UserOutlined />}>
              <Link to={"/admin"}>Admin </Link>
            </Menu.Item>
        )}
        {currentUser && (
            <Menu.Item icon={<UserOutlined />}>
              <Link to={"/user"}>User </Link>
            </Menu.Item>

        )}



        <Menu.Item icon={<CloseOutlined />}>
          <Link to="/home">
            <a
                target="_blank"
                rel="noopener noreferrer"
                onClick={logOut}
                href="/"
            >
              Log Out
            </a>
          </Link>
        </Menu.Item>
        <Menu.Item icon={<LockOutlined />}>
          <Link to="/changepasswordform">
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="/"
            >
              Change Password
            </a>
          </Link>
        </Menu.Item>
      </Menu>
  );
  return (
      <Header>
        <Row>
          <Col span={8} className="title">
            <div>
              <Link to="/home">
                <h1 style={{ color: "white" }}>BallotBox</h1>
              </Link>
            </div>
          </Col>
          <Col span={8} className="searchBar" style={{ color: "white" }}>
            <div style={{ marginTop: "15px" }}>
              <Search
                  placeholder="Search"
                  onSearch={onSearch}
                  enterButton
              />
            </div>
          </Col>
          <Col span={8} className="subMenu">
            <div style={{ float: "right" }}>
              <Dropdown overlay={menu}>
                <a
                    className="ant-dropdown-link"
                    onClick={(e) => e.preventDefault()}
                    style={{ color: "white" }}
                >
                  <MenuOutlined style={{ fontSize: "20px" }} /> <DownOutlined />
                </a>
              </Dropdown>
            </div>
          </Col>
        </Row>
      </Header>
  );
};

export default Navbar;
