import {
  Form,
  Input,
  Button,
  Divider,
  Result,
  message,
  PageHeader,
} from "antd";
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

export default class ForgotPassword extends Component {
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

    const info = () => {
      message.info(
        "We sent an email with a link to get back into your account.."
      );
    };
    return (
      <Layout className="layout">
        <NavbarU />

        <div style={{ marginTop: "50px" }}>
          <Content style={{ padding: "0 50px" }}>
            <div className="site-layout-content">
              <h2 style={{ textAlign: "center", fontSize: "36px" }}>
                Trouble logging in?
              </h2>

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
                      style={{}}
                    />
                  </div>
                </Form.Item>

                <Form.Item>
                  <a href="">
                    <Button
                      className="button-color"
                      type="primary"
                      htmlType="submit"
                      onClick={info}
                      style={{}}
                    >
                      Send Login Link{" "}
                    </Button>
                  </a>
                </Form.Item>

                <Divider style={{ color: "gray" }}>OR</Divider>
                <div style={{ textAlign: "center" }}>
                  <a href="">
                    <Button type="text" style={{ color: "darkblue" }}>
                      Create New Account
                    </Button>
                  </a>
                </div>
              </Form>
            </div>
          </Content>
        </div>
        <Footer style={{textAlign:"center"}}>©2021 BallotBox</Footer>
      </Layout>
      
    );
  }
}
