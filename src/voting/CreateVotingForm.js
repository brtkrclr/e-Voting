import {
  Button,
  DatePicker,
  Divider,
  Form,
  Input,
  Radio,
  Space,
  Switch,
} from "antd";
import Layout, { Content } from "antd/lib/layout/layout";
import React, { Component } from "react";
import "../App.css";
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
    votingType: "",
    accessType: "",
    options: [],
  };

  submitForm = (event) => {
    // alert("Successfully Created");
    console.log(this.state);
    const form = {
      id: this.state.id,
      title: this.state.title,
      description: this.state.description,
      organizer: this.state.organizer,
      startDate: this.state.startDate,
      endDate: this.state.endDate,
      votingType: this.state.votingType,
      accessType: this.state.accessType,
      options: event.options,
    };
    axios
      .post("http://localhost:8081/vote", form)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    // .then((resp) => (window.location.href = "/home"));
  };

  render() {
    const {
      id,
      title,
      description,
      organizer,
      startDate,
      endDate,
      votingType,
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
                  value={title}
                  rules={[{ required: true, message: "Please input!" }]}
                >
                  <Input
                    onChange={(text) =>
                      this.setState({ title: text.target.value })
                    }
                  />
                </Form.Item>

                <Text>DESCRIPTION</Text>
                <Form.Item
                  required
                  name="description"
                  value={description}
                  rules={[{ required: true, message: "Please input!" }]}
                >
                  <Input
                    onChange={(text) =>
                      this.setState({ description: text.target.value })
                    }
                  />
                </Form.Item>

                <Text>ORGANIZER</Text>
                <Form.Item
                  required
                  name="organizer"
                  value={organizer}
                  rules={[{ required: true, message: "Please input!" }]}
                >
                  <Input
                   
                    onChange={(text) =>
                      this.setState({ organizer: text.target.value })
                    }
                  />
                </Form.Item>
                <Text>START DATE</Text>
                <Form.Item
                  required
                  name="startDate"
                  value={this.state.startDate}
                  rules={[{ required: true, message: "Please input!" }]}
                >
                  <DatePicker
                    name="start"
                    format="YYYY-MM-DD "
                    disabledDate={disabledDate}
                    onChange={(startDate) => this.setState({ startDate })}
                   
                  />
                </Form.Item>

                <Text>END DATE</Text>
                <Form.Item
                  required
                  name="endDate"
                  value={this.state.endDate}
                  rules={[{ required: true, message: "Please input!" }]}
                >
                  <DatePicker
                    name="start"
                    format="YYYY-MM-DD "
                    defaultDate={this.state.startDate}
                    disabledDate={disabledDate}
                    onChange={(endDate) => this.setState({ endDate })}
                   
                  />
                </Form.Item>

                <Text>TYPE OF VOTING</Text>
                <Form.Item
                  required
                  name="votingType"
                  rules={[{ required: true, message: "Please input!" }]}
                >
                  <Radio.Group name="radiogroup">
                    <Radio.Button
                      value={1}
                      onChange={(text) =>
                        this.setState({ votingType: text.target.value })
                      }
                    >
                      Participatory
                    </Radio.Button>
                    <Radio.Button
                      value={2}
                      onChange={(text) =>
                        this.setState({ votingType: text.target.value })
                      }
                    >
                      Educational
                    </Radio.Button>
                    <Radio.Button
                      value={3}
                      onChange={(text) =>
                        this.setState({ votingType: text.target.value })
                      }
                    >
                      Political
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
                    <Radio.Button
                      value={1}
                      onChange={(text) =>
                        this.setState({ accessType: text.target.value })
                      }
                    >
                      E-mail
                    </Radio.Button>
                    <Radio.Button
                      value={2}
                      onChange={(text) =>
                        this.setState({ accessType: text.target.value })
                      }
                    >
                      Public
                    </Radio.Button>
                  </Radio.Group>
                </Form.Item>

                <Text>OPTIONS</Text>
                <Form.List name="options">
                  {(fields, { add, remove }) => (
                    <>
                      {fields.map((field) => (
                        <Space
                          key={field.key}
                          style={{ display: "flex", marginBottom: 8 }}
                          align="baseline"
                        >
                          <Form.Item
                            {...field}
                            name={[field.name]}
                            rules={[
                              { required: true, message: "Missing option " },
                            ]}
                          >
                            <Input placeholder="Option" />
                          </Form.Item>

                          <MinusCircleOutlined
                            onClick={() => remove(field.name)}
                          />
                        </Space>
                      ))}
                      <Form.Item>
                        <Button
                          type="dashed"
                          onClick={() => add()}
                          block
                          icon={<PlusOutlined />}
                          style={{ width: "70%" }}
                        >
                          Add field
                        </Button>
                      </Form.Item>
                    </>
                  )}
                </Form.List>

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
