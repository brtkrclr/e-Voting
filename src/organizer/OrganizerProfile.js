import {
  Button,
  Breadcrumb,
  Divider,
  Table,
  List,
  Space,
  Popconfirm,
} from "antd";
import Layout, { Content, Footer } from "antd/lib/layout/layout";
import React, { Component } from "react";
import "../App.css"
import Navbar from "../navbar/Navbar";
import axios from "axios";
import { Link } from "react-router-dom";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

export default class OrganizerProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state = {
      votings: [],
      user:[],
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

  deleteVoting = (id) => {
    console.log(id)
    axios
      .delete("http://localhost:8081/vote/" + id)
      .then((response) => {
        if (response.data != null) {
          this.setState({ show: true });
          this.setState({
            votings: this.state.votings.filter((vote) => vote.id !== id),
          });
        } else {
          this.setState({ show: false });
        }
      });
  };
  render() {
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
            <Link to="/editvoting">
              {" "}
              <a>Edit</a>
            </Link>

            <Popconfirm
              title="Are you sure？"
              onConfirm={() => this.handleDelete(record.key)}
              okText="Yes"
              cancelText="No"
            >
              <a>Delete</a>
            </Popconfirm>
          </Space>
        ),

        handleDelete(key) {
          const dataSource = [...this.state.dataSource];
          this.setState({
            dataSource: dataSource.filter((item) => item.key !== key),
          });
        },
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
            <div className="site-layout-content">
            
              <Link to="/createvote">
                <Button
                  className="button-color"
                  type="primary"
                  htmlType="submit"
                >
                  Create Voting
                </Button>
              </Link>

              <List itemLayout="horizontal">
                {this.state.votings.map((vote) => (
                  <List.Item>
                    <List.Item.Meta
                      title={vote.title}
                      description={vote.description}
                    />
                    <Link to={"/editvoting/" + vote.id}>
                      <Button type="primary" success>
                        <EditOutlined />
                      </Button>
                    </Link>
                    <Button
                      type="primary"
                      danger
                      onClick={this.deleteVoting.bind(this,vote.id)}
                
                    >
                      <DeleteOutlined />
                    </Button>
                  </List.Item>
                ))}
              </List>
            </div>
    );
  }
}