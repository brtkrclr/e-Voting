import {Form, Input, Button, Divider, message, PageHeader, Alert,} from 'antd';
import Layout, { Content, Footer } from "antd/lib/layout/layout";
import "../App.css";
import NavbarU from "../navbar/NavbarU";
import {MailOutlined, LockOutlined} from '@ant-design/icons';
import React, {useRef, useState} from "react";
import Title from "antd/es/typography/Title";
import { Link } from "react-router-dom";
import AuthService from "../services/auth.services";


const ForgotPasswordForm = (props) => {
    const form = useRef();
    const checkBtn = useRef();
    const [successful, setSuccessful] = useState(false);
    const [message, setMessage] = useState("");
    const [email, setEmail] = useState("");

    const onChangeEmail = (e) => {
        const email = e.target.value;
        setEmail(email);
    };

    const handleSendMail = (e) => {
        e.preventDefault();

        setMessage("Successfull");
        setSuccessful(false);

        AuthService.sendmail(email).then(

            (response) => {
                setMessage(response.data.message);
                setSuccessful(true);

            },
            (error) => {
                const resMessage =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();

                setMessage(resMessage);
                setSuccessful(false);
            }
        );
    };
    


    return (
        <Layout className="layout" style = {{}} >

            <NavbarU />

            <div style={{ marginTop: "50px" }}>
                <Content style={{ padding: "0 50px" ,textAlign:"center", display: "flex",
                    justifyContent: "center",
                    alignItems: "center"}}>

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
                            ref={form}
                            initialValues={{ remember: true }}
                            onSubmitCapture={handleSendMail}
                            name="Form"

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
                                        value={email}
                                        inputMode="email"
                                        style={{ borderRadius: "20px" }}
                                        onChange={onChangeEmail}

                                    />
                                </div>
                            </Form.Item>

                            <Form.Item>

                                <Button
                                    className="button-color"
                                    type="primary"
                                    htmlType="submit"
                                    ref={checkBtn}
                                    style={{ borderRadius: "20px" }}

                                >
                                    Send Login Link
                                </Button>

                            </Form.Item>

                            <Divider style={{ color: "gray" }}>OR</Divider>

                            <Link to='/signin'>
                                <Button type="text" style ={{color: "#9254de"}}>
                                    Create New Account
                                </Button>
                            </Link>

                        </Form>


                    </div>
                </Content>
            </div>
            <Footer style={{textAlign:"center"}}>©️2021 BallotBox</Footer>
        </Layout>

    );

};

export default ForgotPasswordForm;