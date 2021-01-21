import { Button, DatePicker, Form, Input, List, Radio, Switch } from "antd";
import Layout, { Content } from "antd/lib/layout/layout";
import React, { Component } from "react";
import "../App.css"
import { Typography } from "antd";
import Navbar from "../navbar/Navbar";
import axios from "axios";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import moment from "moment";

const { Text } = Typography;

export default class EditVoting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      votings: [],
    };
  }

  componentDidMount() {
    const form = {
      id: this.state.id,
      title: this.state.title,
      description: this.state.description,
      organizer: this.state.organizer,
      startDate: this.state.startDate,
      endDate: this.state.endDate,
      votingMethod: this.state.votingMethod,
      accessType: this.state.accessType,
      options: this.state.options,
    };
    axios
      .get("http://localhost:8081/vote")
      .then((response) => response.data)
      .then((data) => {
        this.setState({ votings: data });
      });

    axios
      .post("http://localhost:8081/vote", form)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const {
      id,
      title,
      description,
      organizer,
      startDate,
      endDate,
      votingMethod,
      accessType,
      options,
    } = this.state;

    const formSuccess = (datas) => {
      console.log("Form was finished successfully: ", datas);
    };

    const formFail = (error) => {
      console.log("Form failed: ", error);
    };

    function disabledDate(current) {
      // Can not select days before today
      return current && current < moment().startOf("day");
    }

    return (
      <Layout className="layout">
        <Navbar />

        <div style={{ marginTop: "50px" }}>
          <Content style={{ padding: "0 50px" }}>
            <div className="site-layout-content">
              <h2 style={{ textAlign: "center", fontSize: "36px" }}>
                Edit Voting
              </h2>
              <hr />
              {this.state.votings.map((vote, id) => (
                <Form
                  name="basic"
                  initialValues={{ remember: true }}
                  onFinish={formSuccess}
                  onFinishFailed={formFail}
                >
                  <Text>TITLE or MAIN QUESTION</Text>
                  <Form.Item name="title">
                    <Input disabled placeholder={vote.title} />
                  </Form.Item>

                  <Text>DESCRIPTION</Text>
                  <Form.Item name="description">
                    <Input disabled placeholder={vote.description} />
                  </Form.Item>

                  <Text>ORGANIZER</Text>
                  <Form.Item name="organizer">
                    <Input disabled placeholder={vote.organizer} />
                  </Form.Item>

                  <Text>START DATE</Text>
                  <Form.Item
                    name="startDate"
                    rules={[{ required: true, message: "Please input!" }]}
                  >
                    <DatePicker
                      defaultDate={vote.startDate}
                      disabledDate={disabledDate}
                    />
                  </Form.Item>

                  <Text>END DATE</Text>
                  <Form.Item
                    name="endDate"
                    rules={[{ required: true, message: "Please input!" }]}
                  >
                    <DatePicker
                      defaultDate={vote.endDate}
                      disabledDate={disabledDate}
                    />
                  </Form.Item>

                  <Text>VOTING METHOD</Text>
                  <Form.Item
                    name="method"
                    rules={[{ required: true, message: "Please input!" }]}
                  >
                    <Radio.Group name="radiogroup">
                      <Radio.Button value={1}>Single</Radio.Button>
                      <Radio.Button value={2}>Multiple</Radio.Button>
                    </Radio.Group>
                  </Form.Item>

                  <Text>ACCESS TYPE</Text>
                  <Form.Item
                    name="accessType"
                    rules={[{ required: true, message: "Please input!" }]}
                  >
                    <Radio.Group name="radiogroup2">
                      <Radio.Button value={1}>E-mail</Radio.Button>
                      <Radio.Button value={2}>Public</Radio.Button>
                    </Radio.Group>
                  </Form.Item>

                  <Text>OPTIONS</Text>
                  <ul>
                    {this.state.votings.map((vote) => (
                      <Form.Item>
                        <Input disabled placeholder={vote.options} />
                      </Form.Item>
                    ))}
                  </ul>
                </Form>
              ))}
            </div>
          </Content>
        </div>
      </Layout>
    );
  }
}
