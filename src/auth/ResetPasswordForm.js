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
  import {
    LockOutlined,
    MailOutlined,
    MinusCircleOutlined,
    PlusOutlined,
  } from "@ant-design/icons";
  import { Link, Route } from "react-router-dom";
  import NavbarU from "../navbar/NavbarU";
  import Title from "antd/lib/skeleton/Title";
  const { RangePicker } = DatePicker;
  
  const { Text } = Typography;
  export default class ResetPasswordForm extends Component {
    constructor(props) {
      super(props);
      this.state = this.initialState;
      this.submitForm = this.submitForm.bind(this);
    }
  
    initialState = {
      email: "",
      password: "",
    };
  
    submitForm = (event) => {
      // alert("Successfully Created");
      console.log(this.state);
      const form = {
        email: this.state.email,
        password: this.state.password,
      };
      console.log(form);
      axios
        .post("http://localhost:8082/api/auth/resetpassword", form)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
      // .then((resp) => (window.location.href = "/home"));
    };
  
    render() {
      const { email, password } = this.state;
  
      const formFail = (error) => {
        console.log("Form failed: ", error);
      };
  
      return (
        <Layout className="layout">
          <NavbarU />
  
          <div style={{ marginTop: "50px" }}>
            <Content
              style={{
                padding: "0 50px",
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div className="site-layout-content">
                <br />
                <br />
                <h3>Reset Password</h3>
                <Divider />
                <Form
                  name="basic"
                  initialValues={{ remember: true }}
                  onFinish={this.submitForm}
                  onFinishFailed={formFail}
                >
                  <Form.Item
                    name="email"
                    rules={[
                      {
                        required: true,
                        message: "Please fill in your email",
                      },
                    ]}
                   
                  >
                     <Input
                            placeholder="Email"
                            prefix={<MailOutlined />}
                            inputMode="email"
                            value={email}
                            style={{ borderRadius: "20px" }}
                            onChange={(text)=>this.setState({email:text.target.value})}
  
                        />
                  </Form.Item>
  
                  <Form.Item
                    name="pass"
                    rules={[
                      {
                        required: true,
                        message: "Please fill in your new password",
                      },
                    ]}
                  >
                       <Input
                          placeholder="New Password"
                          prefix={<LockOutlined/>}
                          minLength={8}
                          onChange={(text) =>
                              this.setState({ password: text.target.value })
                            }
                          style={{ borderRadius: "20px" }}
                          value={password}
                          type="password"
                      />
                  </Form.Item>
  
                  <Form.Item>
                    <Button
                      className="button-color"
                      type="primary"
                      htmlType="submit"
                    >
                      Reset Password
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