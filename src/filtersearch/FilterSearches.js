import {
  Button,
  Breadcrumb,
  Divider,
  Table,
  List,
  Space,
  Popconfirm,
  Input,
  Radio,
} from "antd";
import Layout, { Content, Footer } from "antd/lib/layout/layout";
import "../App.css";
import Navbar from "../navbar/Navbar";
import axios from "axios";
import { Link } from "react-router-dom";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import React, { Component, useState, useEffect } from "react";
import { Typography } from "antd";
import Sider from "antd/es/layout/Sider";
import { Checkbox, Row, Col } from "antd";
const { Text } = Typography;

function onChange(checkedValues) {
  console.log("checked = ", checkedValues);
}

export default class FilterSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state = {
      votings: [],
      user: [],
      searchField: "",
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:8081/vote")
      .then((response) => response.data)
      .then((data) => {
        this.setState({ votings: data });
      });
  }
  onChange = (e) => {
    console.log("radio checked", e.target.value);
    this.setState({
      value: e.target.value,
    });
  };

  render() {
    const radioStyle = {
      display: "block",
      height: "30px",
      lineHeight: "30px",
    };

    const { collapsed } = this.state;

    const SearchBox = (props) => {
      return (
        <Input
          type="search"
          className="search"
          placeholder={props.placeholder}
          onChange={props.handleChange}
        />
      );
    };
    const { stats, searchField } = this.state;

    const columns = [
      { title: "Voting Name", dataIndex: "name", key: "name" },
      { title: "Date", dataIndex: "date", key: "date" },
      {
        title: "Voting Method",
        dataIndex: "votingmethod",
        key: "voting method",
      },
      { title: "Access Type", dataIndex: "accesstype", key: "accesstype" },
      {
        title: "Edit or Delete",
        dataIndex: "",
        key: "x",
        render: (record) => (
          <Space size="middle">
            <Link to="/givevote">
              {" "}
              <a>GiveVote</a>
            </Link>
          </Space>
        ),
      },
    ];

    const data = [
      {
        key: 1,
        name: "Voting",
        date: 0,
        votingmethod: "Voting Method",
        accesstype: "Access Type",

        description: "Description of the voting and options",
      },
    ];

    return (
      <Layout className="layout">
        <Navbar />
        <div style={{ marginTop: "50px" }}>
          <Content style={{ padding: "0 50px" }}>
            <div className="site-layout-content">
              <Row>
                <Col span={5}>
                  <List defaultSelectedKeys={["filter"]}>
                    <h3
                      style={{ color: "cornflowerblue", fontFamily: "revert" }}
                    >
                      Filter Options:{" "}
                    </h3>

                    <br />
                    <List.Item
                      name="votingMethod"
                      rules={[{ required: true, message: "Please input!" }]}
                    >
                      <Radio.Group name="radiogroup">
                        <Radio
                          style={radioStyle}
                          value={1}
                          onChange={(text) =>
                            this.setState({ votingMethod: text.target.value })
                          }
                        >
                          Participatory
                        </Radio>
                        <Radio
                          style={radioStyle}
                          value={2}
                          onChange={(text) =>
                            this.setState({ votingMethod: text.target.value })
                          }
                        >
                          Educational
                        </Radio>
                        <Radio
                          style={radioStyle}
                          value={3}
                          onChange={(text) =>
                            this.setState({ votingMethod: text.target.value })
                          }
                        >
                          Political
                        </Radio>
                      </Radio.Group>
                    </List.Item>
                    <br />
                    <List.Item>
                      <Button
                        type="primary"
                        style={{
                          fontFamily: "revert",
                          background: "cornflowerblue",
                        }}
                      >
                        FILTER
                      </Button>
                    </List.Item>
                  </List>
                </Col>
                <Col span={12}>
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
                </Col>
              </Row>
            </div>
          </Content>
        </div>

        <Footer style={{ textAlign: "center" }}>©️2021 BallotBox</Footer>
      </Layout>
    );
  }
}
