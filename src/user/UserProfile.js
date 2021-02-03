import {
  Button,
  DatePicker,
  Descriptions,
  Divider,
  Form,
  Input,
  Radio,
  Switch,
} from "antd";
import Layout, { Content } from "antd/lib/layout/layout";
import React, { Component } from "react";
import "../App.css"
import { Typography } from "antd";
import Navbar from "../navbar/Navbar";
import axios from "axios";
import {
  MinusCircleOutlined,
  PlusOutlined,
  UserOutlined,
} from "@ant-design/icons";

import { Link } from "react-router-dom";
import Avatar from "antd/lib/avatar/avatar";
const { Text } = Typography;

export default class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      votings: [],
    };
  }

  componentDidMount() {
    axios
      .post("localhost:8081/vote/post")
      .then((response) => console.log(response.data));
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
     

            <div className="site-layout-content">
              <h2 style={{ textAlign: "left" }}>Profile</h2>
              <Divider style={{ color: "gray" }} />
              <div style={{ textAlign: "center" }}>
                <Avatar size={64} icon={<UserOutlined />} />

                <Descriptions title="User Info" layout="vertical">
                  <Descriptions.Item
                    label="First Name"
                    labelStyle={{ fontWeight: "bold", fontSize: "16px" }}
                  >
                    Name of the user
                  </Descriptions.Item>

                  <Descriptions.Item
                    label="Last Name"
                    labelStyle={{ fontWeight: "bold", fontSize: "16px" }}
                  >
                    Surname of the user
                  </Descriptions.Item>
               

                  <Descriptions.Item
                    label="E-mail"
                    labelStyle={{ fontWeight: "bold", fontSize: "16px" }}
                  >
                    ballotbox@info.com
                  </Descriptions.Item>
                </Descriptions>
                <br/><br></br>
                <Link to="/givevote">
                <Button style={{alignItems:"left"}}>
  Votings Page
</Button>
</Link>
              </div>
            </div>
            
      
      </Layout>
    );
  }
}
