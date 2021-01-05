import { Form, Input, Button, Divider, Result } from "antd";
import Layout, { Content } from "antd/lib/layout/layout";
import React, { Component } from "react";
import "./App.css";
import NavbarU from "./NavbarU";
import { Typography } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import Item from "antd/es/list/Item";
const { Password } = Input;
const { Text, Link } = Typography;

export default class PasswordChangedForm extends Component {
  constructor(props) {
    super(props);
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
                  >
                    Sign In
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
