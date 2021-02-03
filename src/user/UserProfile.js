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

                <Descriptions title="Your Votes" layout="vertical">
            <Descriptions.Item>burda verdiği oylar listelencek</Descriptions.Item>
                </Descriptions>
                <br/><br></br>
                <Link to="/allvotings">
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
