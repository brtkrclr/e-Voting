import { Form, Input, Button, Checkbox, Alert, Radio } from "antd";
import { UserOutlined, LockOutlined, MailOutlined, setTwoToneColor } from "@ant-design/icons";
import "../App.css";
import React, { useState, useRef } from "react";
import Layout, {Content, Footer} from "antd/lib/layout/layout";
import NavbarU from "../navbar/NavbarU";
import { Link, Route } from "react-router-dom";
import axios from "axios";
import AuthService from "../services/auth.services";
import { isEmail } from "validator";

const SignUp = (props) => {
  const form = useRef();
  const checkBtn = useRef();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [roles, setRoles] = useState([""]);
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState("");

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };
  const onChangeRoles = (e) => {
    setRoles(e.target.value);
    console.log(roles);
  };

  const handleRegister = (e) => {
    e.preventDefault();

    setMessage("Successful");
    setSuccessful(false);

    AuthService.register(username, email, password, roles).then(
      
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
    <Layout className="layout">
      <NavbarU />

      <div style={{ marginTop: "50px" }}>
        <Content  style={{
          padding: "0 50px",
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
          <div className="site-layout-content">
            <h1 className="title">Sign Up</h1>

            <Form
              ref={form}
              name="normal_login"
              className="login-form"
              initialValues={{ remember: true }}
              onSubmitCapture={handleRegister}
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
                  value={username}
                  onChange={onChangeUsername}
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Username"
                  style={{ borderRadius: "20px" }}
                />
              </Form.Item>
              <Form.Item
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Please input your Email!",
                  },
                ]}
              >
                <Input
                  onChange={onChangeEmail}
                  value={email}
                  prefix={<MailOutlined className="site-form-item-icon" />}
                  placeholder="Email"
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
                <Input
                  value={password}
                  onChange={onChangePassword}
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Password"
                  style={{ borderRadius: "20px" }}
                />
              </Form.Item>

              <Form.Item
                required
                name="roles"
                rules={[
                  {
                    message: "Please select your Role!",
                  },
                ]}
              >
                <Radio.Group name="radiogroup" value={roles}>
                  <Radio
                    value={""}
                    onChange={(text) => setRoles([text.target.value])}
                  >
                    Voter
                  </Radio>
                  <Radio
                    value={"mod"}
                    onChange={(text) => setRoles([text.target.value])}
                  >
                    Organizer
                  </Radio>
                </Radio.Group>
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                  ref={checkBtn}
                  style={{ borderRadius: "20px" }}
                >
                  Sign Up
                </Button>
              </Form.Item>

              <Form.Item>
                <Alert message={message} type={successful} style={{color: "green"}} />
              </Form.Item>
            </Form>
            
          </div>
        </Content>
      </div>
      <Footer style={{ textAlign: "center" }}>©️2021 BallotBox</Footer>
    </Layout>
  );
};

export default SignUp;
