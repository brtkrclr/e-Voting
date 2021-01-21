import Layout, { Content, Footer } from "antd/lib/layout/layout";
import React, { Component } from "react";
import "../App.css"
import Navbar from "../navbar/Navbar";
import axios from "axios";
import { Divider, Space, Table, List } from "antd";
import Avatar from "antd/lib/avatar/avatar";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      votings: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:8082/api/test/user")
      .then((response) => response.data)
      .then((data) => {
        this.setState({ votings: data });
      });
  }

  render() {
    const columns = [
      { title: "Voting Name", dataIndex: "name", key: "name" },
      { title: "Remaining Time", dataIndex: "date", key: "date" },
      {
        title: "Vote",
        dataIndex: "",
        key: "x",
        render: () => (
          <Space size="middle">
            <a>Option</a>
            <a>Option</a>
          </Space>
        ),
      },
    ];

    return (
      <Layout className="layout">
        <Navbar />
        <div style={{ marginTop: "50px" }}>
          <Content style={{ padding: "0 50px" }}>
            <div className="site-layout-content">
              <Divider style={{ color: "gray" }} />

              <List itemLayout="horizontal">
                {this.state.votings.map((vote) => (
                  <List.Item>
                    <List.Item.Meta
                      title={vote.title}
                      description={vote.description}
                    />
                  </List.Item>
                ))}
              </List>
            </div>
          </Content>
        </div>
        <Footer style={{ textAlign: "center" }}>©️2021 BallotBox</Footer>
      </Layout>
    );
  }
}
