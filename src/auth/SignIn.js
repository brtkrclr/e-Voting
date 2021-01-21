import { Form, Input, Button, Divider } from "antd";
import { MailOutlined, LockOutlined, UserOutlined } from "@ant-design/icons";
import "../App.css"
import React, { useState, useRef } from "react";
import Layout, { Content, Footer } from "antd/lib/layout/layout";
import NavbarU from "../navbar/Navbar";
import { Link, Route } from "react-router-dom";
import Item from "antd/es/list/Item";
import axios from "axios";
import AuthService from "../services/auth.services"
const { Password } = Input;

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const SignIn = (props) => {
  const form = useRef();
  const checkBtn = useRef();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    setMessage("");
    setLoading(true);


      AuthService.login(username, password).then(
        () => {
          props.history.push("/home");
          window.location.reload();
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          setLoading(false);
          setMessage(resMessage);
        }
      );
      setLoading(false);
  };

  return (
    <Layout className="layout">
      <NavbarU />

      <div style={{ marginTop: "50px" }}>
        <Content style={{ padding: "0 50px", textAlign: "center" }}>
          <div className="site-layout-content">
            <h1 className="title">Sign In</h1>
            <Divider />

            <Form
              name="normal_login"
              className="login-form"
              initialValues={{ remember: true }}
              onSubmitCapture={handleLogin}
              ref={form}
            >
              <Form.Item
                name="username"
                rules={[
                  {
                    required: true,
                    message: "Please input your Username!",
                  },
                ]}
              >
                <Input
                  onChange={onChangeUsername}
                  value={username}
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Username"
                  style={{ borderRadius: "20px" }}
                />
              </Form.Item>

              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your Password!",
                  },
                ]}
              >
                <Input.Password
                  value={password}
                  onChange={onChangePassword}
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Password"
                  style={{ borderRadius: "20px" }}
                />
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                  ref={checkBtn}
                >
                  Login
                </Button>
              </Form.Item>
            </Form>
            <Divider style={{ color: "gray" }}>OR</Divider>

            <Item
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Link to="/forgotpasswordform">
                <Button type="text">Forgot Password?</Button>
              </Link>
            </Item>

            <Item
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Don't you have an account?
              <Link to="/signup">
                <Button type="text" style={{ color: "limegreen" }}>
                  Sign Up
                </Button>
              </Link>
            </Item>


          {message && (
            <div className="form-group">
              <div className="alert alert-danger" role="alert">
                {message}
              </div>
            </div>
          )}
          </div>
        </Content>
      </div>
      <Footer style={{ textAlign: "center" }}>©️2021 BallotBox</Footer>
    </Layout>
  );
};

export default SignIn;
