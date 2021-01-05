import { Button, DatePicker, Divider, Form, Input, Radio, Switch } from "antd";
import Layout, { Content } from "antd/lib/layout/layout";
import React, { Component } from "react";
import "./App.css";
import { Typography } from "antd";
import Navbar from "./Navbar";
import axios from "axios";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
const { Text, Link } = Typography;

export default class CreateVotingForm extends Component {
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
                Create Voting
              </h2>
              <Divider style={{ color: "gray" }}/>
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
                  <Input />
                </Form.Item>

                <Text>DESCRIPTION</Text>
                <Form.Item
                  name="description"
                  rules={[{ required: true, message: "Please input!" }]}
                >
                  <Input />
                </Form.Item>

                <Text>ORGANIZER</Text>
                <Form.Item
                  name="organizer"
                  rules={[{ required: true, message: "Please input!" }]}
                >
                  <Input />
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
                <Form.Item name="options">
                  <Form.List
                    name="names"
                    rules={[
                      {
                        validator: async (_, names) => {
                          if (!names || names.length < 2) {
                            return Promise.reject(
                              new Error("At least 2 options")
                            );
                          }
                        },
                      },
                    ]}
                  >
                    {(fields, { add, remove }, { errors }) => (
                      <>
                        {fields.map((field, index) => (
                          <Form.Item
                            {...(index === 0)}
                            required={false}
                            key={field.key}
                          >
                            <Form.Item
                              {...field}
                              validateTrigger={["onChange", "onBlur"]}
                              rules={[
                                {
                                  required: true,
                                  whitespace: true,
                                  message:
                                    "Please input options's name or delete this field.",
                                },
                              ]}
                              noStyle
                            >
                              <Input
                                placeholder="option name"
                                style={{ width: "60%" }}
                              />
                            </Form.Item>
                            {fields.length > 1 ? (
                              <MinusCircleOutlined style={{margin:"5px"}}
                                className="dynamic-delete-button"
                                onClick={() => remove(field.name)}
                              />
                            ) : null}
                          </Form.Item>
                        ))}
                        <Form.Item>
                          <Button
                            type="dashed"
                            onClick={() => add()}
                            style={{ width: "60%" }}
                            icon={<PlusOutlined />}
                          >
                            Add Options
                          </Button>

                          <Form.ErrorList errors={errors} />
                        </Form.Item>
                      </>
                    )}
                  </Form.List>
                </Form.Item>

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
