import {
    Button,
    DatePicker,
    Divider,
    Form,
    Input,

} from "antd";
import Layout, {Content, Footer} from "antd/lib/layout/layout";
import React, { Component } from "react";
import "../App.css";
import { Typography } from "antd";
import Navbar from "../navbar/Navbar";
import axios from "axios";

import {
    LockOutlined,
    MailOutlined,

} from "@ant-design/icons";
import NavbarU from "../navbar/NavbarU";
import Title from "antd/lib/skeleton/Title";

const { Text } = Typography;

export default class ChangePasswordForm extends Component {
    constructor(props) {
        super(props);
        this.state = this.initialState;
        this.submitForm = this.submitForm.bind(this);
    }

    initialState = {
        email:"",
        password: "",
        newpassword: "",
    };

    submitForm = (event) => {
        // alert("Successfully Created");
        console.log(this.state);
        const form = {
            password: this.state.password,
            newpassword: this.state.newpassword,
        };
        console.log(form);
        axios
            .post("http://localhost:8082/api/auth/changepassword", form)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
        // .then((resp) => (window.location.href = "/home"));
    };

    render() {
        const { email, password, newpassword } = this.state;

        const formFail = (error) => {
            console.log("Form failed: ", error);
        };

        return (
            <Layout className="layout">
                <Navbar />

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
                            <h1 className="title">Change Password</h1>
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
                                    name="oldpass"
                                    rules={[
                                        {
                                            required: true,
                                            message: "Please fill in your current password",
                                        },
                                    ]}
                                >
                                    <Input
                                        placeholder="Current Password"
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
                                            this.setState({ newpassword: text.target.value })
                                        }
                                        style={{ borderRadius: "20px" }}
                                        value={newpassword}
                                        type="password"
                                    />
                                </Form.Item>

                                <Form.Item>
                                    <Button
                                        style={{ borderRadius: "20px" }}
                                        className="button-color"
                                        type="primary"
                                        htmlType="submit"
                                    >
                                        Change Password
                                    </Button>
                                </Form.Item>
                            </Form>
                        </div>
                    </Content>
                </div>
                <Footer style={{ textAlign: "center" }}>©️2021 BallotBox</Footer>
            </Layout>
        );
    }
}