import { Button, DatePicker, Divider, Form, Input, Radio, Switch } from "antd";
import Layout, { Content } from "antd/lib/layout/layout";
import React, { Component } from "react";
import "../App.css"
import { Typography } from "antd";
import Navbar from "../navbar/Navbar";
import axios from "axios";
import moment from "moment";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Link, Route } from "react-router-dom";
const { RangePicker } = DatePicker;

const { Text } = Typography;
export default class CreateVotingForm extends Component {
  constructor(props) {
    super(props);
    this.state = this.initialState;
    this.submitForm = this.submitForm.bind(this);
  }

  initialState = {
    id: 0,
    title: "",
    description: "",
    organizer: "",
    startDate: "",
    endDate: "",
    votingMethod: "",
    accessType: "",
    options: [],
  };

  submitForm = (event) => {
    alert("Successfully Created");
    console.log(this.state);
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
      .post("http://localhost:8080/vote", form)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      })
      .then((resp) => (window.location.href = "/home"));
  };

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
                Create Voting
              </h2>
              <Divider style={{ color: "gray" }} />
              <Form
                name="basic"
                initialValues={{ remember: true }}
                onFinish={this.submitForm}
                onFinishFailed={formFail}
              >
                <Text>TITLE or MAIN QUESTION</Text>
                <Form.Item
                  required
                  name="title"
                  rules={[{ required: true, message: "Please input!" }]}
                >
                  <Input
                    value={title}
                    onChange={(text) =>
                      this.setState({ title: text.target.value })
                    }
                  />
                </Form.Item>

                <Text>DESCRIPTION</Text>
                <Form.Item
                  required
                  name="description"
                  rules={[{ required: true, message: "Please input!" }]}
                >
                  <Input
                    value={description}
                    onChange={(text) =>
                      this.setState({ description: text.target.value })
                    }
                  />
                </Form.Item>

                <Text>ORGANIZER</Text>
                <Form.Item
                  required
                  name="organizer"
                  rules={[{ required: true, message: "Please input!" }]}
                >
                  <Input
                    value={organizer}
                    onChange={(text) =>
                      this.setState({ organizer: text.target.value })
                    }
                  />
                </Form.Item>

                <Text>START DATE</Text>
                <Form.Item
                  required
                  name="startDate"
                  rules={[{ required: true, message: "Please input!" }]}
                >
                  <DatePicker
                    name="start"
                    format="YYYY-MM-DD HH:mm:ss"
                    disabledDate={disabledDate}
                    onChange={(startDate) => this.setState({ startDate })}
                    value={this.state.startDate}
                  />
                </Form.Item>

                <Text>END DATE</Text>
                <Form.Item
                  required
                  name="endDate"
                  rules={[{ required: true, message: "Please input!" }]}
                >
                  <DatePicker
                    name="start"
                    format="YYYY-MM-DD HH:mm:ss"
                    defaultDate={this.state.startDate}
                    disabledDate={disabledDate}
                    onChange={(endDate) => this.setState({ endDate })}
                    value={this.state.endDate}
                  />
                </Form.Item>

                <Text>VOTING METHOD</Text>
                <Form.Item
                  required
                  name="votingMethod"
                  rules={[{ required: true, message: "Please input!" }]}
                >
                  <Radio.Group name="radiogroup">
                    <Radio.Button value={1} onChange={this.formChange}>
                      Single
                    </Radio.Button>
                    <Radio.Button value={2} onChange={this.formChange}>
                      Multiple
                    </Radio.Button>
                  </Radio.Group>
                </Form.Item>

                <Text>ACCESS TYPE</Text>
                <Form.Item
                  required
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
                                value={options}
                                onChange={(text) =>
                                  this.setState({
                                    options: [...options, text.target.value],
                                  })
                                }
                              />
                            </Form.Item>
                            {fields.length > 1 ? (
                              <MinusCircleOutlined
                                style={{ margin: "5px" }}
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
                    onClick={() =>
                      this.setState({
                        id: Math.floor(Math.random() * 1000) + 1,
                      })
                    }
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
