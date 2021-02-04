import { Button, DatePicker, Divider, Form, Input, Radio, Switch } from "antd";
import Layout, { Content, Footer } from "antd/lib/layout/layout";
import React, { Component } from "react";
import "../App.css";
import { Typography } from "antd";
import Navbar from "../navbar/Navbar";
import axios from "axios";
import { List, Avatar, Skeleton } from "antd";

import reqwest from "reqwest";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

const { Text, Link } = Typography;

const count = 5;
const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat&noinfo`;

export default class AdminVotePanel extends Component {
  constructor(props) {
    super(props);
    this.state = this.initialState;
    this.state = {
      votings: [],
      user: [],
    };
    this.submitform = this.submitForm.bind(this);
  }
  initialState = {
    published: "",
  };

  submitForm = (event, id) => {
    console.log(this.state);

    const form = {
      published: false,
    };
    console.log(form);
    axios
      .post("http://localhost:8081/accept/" + id, form)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    // .then((resp) => (window.location.href = "/home"));
  };

  componentDidMount() {
    axios
      .get("http://localhost:8081/vote")
      .then((response) => response.data)
      .then((data) => {
        this.setState({ votings: data });
      });
  }

  declineVoting = (id) => {
    console.log(id);
    axios.delete("http://localhost:8081/vote/" + id).then((response) => {
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

  getData = (callback) => {
    reqwest({
      url: fakeDataUrl,
      type: "json",
      method: "get",
      contentType: "application/json",
      success: (res) => {
        callback(res);
      },
    });
  };

  onLoadMore = () => {
    this.setState({
      loading: true,
      list: this.state.data.concat(
        [...new Array(count)].map(() => ({ loading: true, name: {} }))
      ),
    });
    this.getData((res) => {
      const data = this.state.data.concat(res.results);
      this.setState(
        {
          data,
          list: data,
          loading: false,
        },
        () => {
          // Resetting window's offsetTop so as to display react-virtualized demo underfloor.
          // In real scene, you can using public method of react-virtualized:
          // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized
          window.dispatchEvent(new Event("resize"));
        }
      );
    });
  };
  render() {
    const { initLoading, loading, list } = this.state;
    const loadMore =
      !initLoading && !loading ? (
        <div
          style={{
            textAlign: "center",
            marginTop: 12,
            height: 32,
            lineHeight: "32px",
          }}
        >
          <Button onClick={this.onLoadMore}>loading more</Button>
        </div>
      ) : null;

    return (
      <div>
        <List itemLayout="horizontal">
          {this.state.votings.map((vote) => (
            <List.Item>
              <List.Item.Meta
                title={vote.title}
                description={vote.description}
              />
              <Form
                name="basic"
                initialValues={{ remember: true }}
                onFinish={this.submitForm}
              >
                <a
                  onClick={this.submitForm.bind(this, vote.id)}
                  style={{ marginRight: 10 }}
                >
                  Accept{" "}
                </a>

                <a onClick={this.declineVoting.bind(this, vote.id)}>Decline</a>
              </Form>
            </List.Item>
          ))}
        </List>
      </div>
    );
  }
}
