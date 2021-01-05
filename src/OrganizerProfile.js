import { Button, Layout, Avatar, Menu, Input, Breadcrumb } from "antd";
import React from "react";
import {
  AudioOutlined,
  UserOutlined,
  FileSearchOutlined,
  FolderViewOutlined,
} from "@ant-design/icons";
import Title from "antd/es/typography/Title";
import Search from "antd/lib/input/Search";
import Item from "antd/es/list/Item";
const { Header, Footer, Sider, Content } = Layout;

function OrganizerProfile() {
  const styleHeader = {
    fontFamily: "Courier New",
    fontSize: 40,
    fontWeight: "bold",
  };


  const { Search } = Input;

  const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: "#1890ff",
      }}
    />
  );

  const onSearch = (value) => console.log(value);
  return (
    <div className="outside">
      <Layout>
        <Header
          style={{ backgroundColor: "mediumpurple", padding: 10, height: 60 }}
        >
          <Search
            placeholder="Search"
            onSearch={onSearch}
            style={{
              width: "50%",
              textAlign: "left",
              alignItems: "center",
              paddingLeft: 300,
            }}
            size="large"
            suffix={suffix}
          />
          <Avatar
            size={44}
            style={{ float: "right" }}
            icon={<UserOutlined />}
          />
          <Title
            style={{ color: "white", float: "left", fontFamily: "unset" }}
            level={3}
          >
            BALLOT BOX
          </Title>
        </Header>
        <br />
        <Layout>
          <div className="box">
            <Sider style={{ color: "white" }}>
              <Breadcrumb></Breadcrumb>
              <Menu defaultSelectedKeys={["filter"]}>
                <Avatar
                  size={70}
                  style={{ display: "inline-block", marginLeft: 50 }}
                  icon={<UserOutlined />}
                />

                <Menu.Item>
                  <Button type="text"> Create Voting</Button>
                </Menu.Item>
                <Menu.Item>
                  <Button type="text"> Change Password</Button>
                </Menu.Item>
                <Menu.Item>
                  <Button type="text"> Sign Out</Button>
                </Menu.Item>
              </Menu>
            </Sider>
          </div>
          <Layout>
            <Content style={{ padding: "0 50px" }}>
              <Breadcrumb style={{ margin: "16px 0" }}>
                <Breadcrumb.Item style={{ fontSize: "24px" }}>
                  {" "}
                  My Voting{" "}
                </Breadcrumb.Item>
              </Breadcrumb>
              <div
                className="site-layout-content"
                style={{ padding: 24, minHeight: 800 }}
              >
                <Menu defaultSelectedKeys={["filter"]}>
                  <Menu.Item>
                    <Button type="text"> Voting name</Button>
                  </Menu.Item>
                  <Menu.Item>
                    <Button type="text"> Voting name</Button>
                  </Menu.Item>
                  <Menu.Item>
                    <Button type="text"> Voting name</Button>
                  </Menu.Item>
                  <Menu.Item>
                    <Button type="text"> Voting name</Button>
                  </Menu.Item>
                  <Menu.Item>
                    <Button type="text"> Voting name</Button>
                  </Menu.Item>
                </Menu>
              </div>
            </Content>
            <Footer style={{ textAlign: "center", color: "gray" }}>
              English 2020 Ballot Box
            </Footer>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
}

export default OrganizerProfile;
