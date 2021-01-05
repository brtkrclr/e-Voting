import { Form, Input, Button, Divider, Result } from "antd";
import Layout, { Content, Footer } from "antd/lib/layout/layout";
import React, { Component } from "react";
import "./App.css";
import NavbarU from "./NavbarU";
import { Typography } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import Item from "antd/es/list/Item";
import Title from "antd/lib/skeleton/Title";
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

        <Content style={{ padding: "0 50px" }}>
          <div className="site-layout-content">
            <h2 style={{ textAlign: "center", fontSize: "36px" }}>
              Reset Password
            </h2>
            <hr />
            <Form
              name="basic"
              initialValues={{ remember: true }}
              onFinish={formSuccess}
              onFinishFailed={formFail}
            >
              <Text>E-mail</Text>
              <Form.Item
                name="email"
                rules={[{ required: true, message: "Please input!" }]}
              >
                <Input prefix={<MailOutlined />} placeholder="New Password" />
              </Form.Item>

              <Text>Password</Text>
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
                  style={{}}
                  placeholder="New Password"
                  prefix={<LockOutlined />}
                  minLength={8}
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
        <Footer style={{ textAlign: "center" }}>©2021 BallotBox</Footer>
      </Layout>
    );
  }
}
