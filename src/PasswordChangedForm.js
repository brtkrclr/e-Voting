import { Form, Input, Button, Divider, Result } from "antd";
import Layout, { Content, Footer } from "antd/lib/layout/layout";
import React, { Component } from "react";
import "./App.css";
import NavbarU from "./NavbarU";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import axios from "axios";
import Home from "./Home";
import { withRouter } from "react-router-dom";
const { Password } = Input;

export default class PasswordChangedForm extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const formSuccess = (data) => {
      console.log("Form was finished successfully: ", data);
    };

    const formFail = (error) => {
      console.log("Form failed: ", error);
    };

    const nextPath = (path) => {
      this.props.history.push(path);
    };

    return (
      <Layout className="layout">
        <NavbarU />

        <div style={{ marginTop: "50px" }}>
          <Content style={{ padding: "0 50px", textAlign: "center" }}>
            <div className="site-layout-content">
              <br />
              <br />
              <Result
                status="success"
                title="Your password has been changed successfully!"
                subTitle="You can sign in with your new password."
              />

              <Divider />

              <Form
                name="Form"
                initialValues={{
                  recorder: true,
                }}
                onFinish={formSuccess}
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
                  <div>
                    <Input
                      placeholder="Email"
                      prefix={<MailOutlined />}
                      inputMode="email"
                    />
                  </div>
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
                  <Password
                    placeholder="Password"
                    prefix={<LockOutlined />}
                    minLength={8}
                  />
                </Form.Item>

                <Divider />

                <Form.Item>
                  <Button
                    className="button-color"
                    type="primary"
                    htmlType="submit"
                    style={{}}
                    onClick={() => this.nextPath(Home)}
                  >
                    Sign In
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </Content>
        </div>
        <Footer style={{ textAlign: "center" }}>©2021 BallotBox</Footer>
      </Layout>
    );
  }
}
