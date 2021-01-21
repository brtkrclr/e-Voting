import {Form, Input, Button,  Divider, message, PageHeader} from 'antd';
import Layout, {Content, Footer} from "antd/lib/layout/layout";
import React, { Component } from "react";
import "../App.css"
import NavbarU from "../navbar/NavbarU";
import { Typography } from 'antd';
import {MailOutlined, LockOutlined} from '@ant-design/icons';
//import axios from "axios";
import Title from "antd/es/typography/Title";
import Home from "./Home";
const {Password} = Input;
const { Text, Link } = Typography;

export default class PasswordChangedForm extends Component {
  constructor(props) {
    super(props);
  }
  render(){

    const formSuccess = (data) => {
      console.log("Form was finished successfully: ", data);
    }

    const formFail = (error) => {
      console.log("Form failed: ", error);
    }

    return (
        <Layout className="layout">

          <NavbarU />

          <div style={{ marginTop: "50px" ,textAlign:"center"}}>
            <Content style={{ padding: "0 50px" ,textAlign:"center"}}>
              <div className="site-layout-content">
                <br/>
                <br/>
                <Title level={2}>Reset Password</Title>
                <Divider/>
                <Form
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={formSuccess}
                    onFinishFailed={formFail}
                >

                  <Form.Item
                      name="email"
                      rules={[{ required: true, message: "Please input!" }]}
                  >
                    <Input prefix={<MailOutlined />} placeholder="Mail" />
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
          </div>
          <Footer style={{textAlign:"center"}}>©2021 BallotBox</Footer>
        </Layout>
    );
  }
}
