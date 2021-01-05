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
} from "@ant-design/icons";
import React from "react";
import "./App.css";
import Search from "antd/lib/input/Search";
const { Header, Content, Footer } = Layout;

const Navbar = () => {
  const onSearch = (value) => console.log(value);

  const menu = (
    <Menu>
      <Menu.Item icon={<UserOutlined />}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.google.com/"
        >Profile</a>
      </Menu.Item>
      <Menu.Item icon={<CloseOutlined />}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.facebook.com/"
        >
          Log Out
        </a>
      </Menu.Item>
    </Menu>
  );
  return (
    <Header>
      <Row>
        <Col span={8} className="title">
          <div>
            <h1 style={{ color: "white" }}>BallotBox</h1>
          </div>
        </Col>
        <Col span={8} className="searchBar" style={{ color: "white" }}>
          <div style={{ marginTop: "15px" }}>
            <Search
              placeholder="input search text"
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
