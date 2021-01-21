import {Form, Input, Button,  Divider, message, PageHeader} from 'antd';
import Layout, { Content, Footer } from "antd/lib/layout/layout";
import "../App.css"
import NavbarU from "../navbar/NavbarU";
import {MailOutlined, LockOutlined} from '@ant-design/icons';
import React, { Component } from "react";
import Title from "antd/es/typography/Title";
import { Link } from "react-router-dom";
//import axios from "axios";
// import sign up


export default class ForgotPassword extends Component {
    constructor(props) {
        super(props);
    }

    render(){

        const formSuccess = (data) => {
            console.log("Form was finished successfully: ", data);
        };

        const formFail = (error) => {
            console.log("Form failed: ", error);
        };

        const info = () => {

            message.info('We sent an email with a link to get back into your account..');
        };


        return (
            <Layout className="layout">

                <NavbarU />

                <div style={{ marginTop: "50px" }}>
                    <Content style={{ padding: "0 50px" ,textAlign:"center"}}>
                        <div className="site-layout-content">
                            <LockOutlined style={{fontSize: '60px'}} theme="outlined"/>
                            <br/>
                            <br/>
                            <Title level={3}>Trouble Logging In?</Title>
                            <PageHeader
                                className="site-page-header"
                                subTitle="Enter your email and we'll send you a link to get back into your account"
                            />

                            <Divider/>
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
                                        <Link to='/'>
                                        <Button type="text" style={{ color: "darkblue" }}>
                                            Create New Account
                                        </Button>
                                        </Link>
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
