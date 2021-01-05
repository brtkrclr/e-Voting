import { Button, DatePicker, Form, Input, Radio, Switch } from "antd";
import Layout, { Content } from "antd/lib/layout/layout";
import React, { Component } from "react";
import "./App.css";
import { Typography } from "antd";
import Navbar from "./Navbar";
import axios from "axios";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
const { Text } = Typography;

export default class EditVoting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      votings: [],
    };
  }

  componentDidMount() {
    axios
      .post("localhost:8080/vote/post")
      .then((response) => console.log(response.data));
  }

  render() {
    const formSuccess = (datas) => {
      console.log("Form was finished successfully: ", datas);
    };

    const formFail = (error) => {
      console.log("Form failed: ", error);
    };
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

              <Form
                name="basic"
                initialValues={{ remember: true }}
                onFinish={formSuccess}
                onFinishFailed={formFail}
              >
                <Text>TITLE or MAIN QUESTION</Text>
                <Form.Item
                  name="title"
                  rules={[{ required: true, message: "Please input!" }]}
                >
                  <Input disabled />
                </Form.Item>

                <Text>DESCRIPTION</Text>
                <Form.Item
                  name="description"
                  rules={[{ required: true, message: "Please input!" }]}
                >
                  <Input disabled />
                </Form.Item>

                <Text>ORGANIZER</Text>
                <Form.Item
                  name="organizer"
                  rules={[{ required: true, message: "Please input!" }]}
                >
                  <Input disabled />
                </Form.Item>

                <Text>START DATE</Text>
                <Form.Item
                  name="startDate"
                  rules={[{ required: true, message: "Please input!" }]}
                >
                  <DatePicker />
                </Form.Item>

                <Text>END DATE</Text>
                <Form.Item
                  name="endDate"
                  rules={[{ required: true, message: "Please input!" }]}
                >
                  <DatePicker />
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
                <h1>tablo şeklinde optionları bas çünkü zaten db den gelecek</h1>

                <Form.Item>
                  <Button
                    className="button-color"
                    type="primary"
                    htmlType="submit"
                  >
                    Create Voting
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </Content>
        </div>
      </Layout>
    );
  }
}
