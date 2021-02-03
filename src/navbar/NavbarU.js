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
import "../App.css"
import Search from "antd/lib/input/Search";
import SignIn from "../auth/SignIn";
import { Link } from "react-router-dom";
const { Header, Content, Footer } = Layout;

const NavbarU = () => {
  const onSearch = (value) => console.log(value);


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
              placeholder="Search"
              onSearch={onSearch}
              enterButton
            />
          </div>
        </Col>
        <Col span={8} className="subMenu">
          <div style={{ float: "right" }}>
            <Link to="/signin">
              <Button type="primary">Log In</Button>
            </Link>
          </div>
        </Col>
      </Row>
    </Header>
  );
};

export default NavbarU;
