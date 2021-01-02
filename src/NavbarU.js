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
  SettingFilled,
  CloseOutlined,
  DownOutlined,
} from "@ant-design/icons";
import React from "react";
import "./App.css";
import Search from "antd/lib/input/Search";
const { Header, Content, Footer } = Layout;

const NavbarU = () => {
  const onSearch = (value) => console.log(value);

  const menu = (
    <Menu>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.alipay.com/"
        >
          1st menu item
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.taobao.com/"
        >
          2nd menu item
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.tmall.com/"
        >
          3rd menu item
        </a>
      </Menu.Item>
      <Menu.Item danger>a danger item</Menu.Item>
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
          <Button type="primary"><a href="www.google.com">Log In</a></Button>
          </div>
        </Col>
      </Row>
    </Header>
  );
};

export default NavbarU;
