import { Button, DatePicker, Form, Input, List, Radio, Switch } from "antd";
import Layout, { Content } from "antd/lib/layout/layout";
import React, { Component } from "react";
import "../App.css";
import { Typography } from "antd";
import Navbar from "../navbar/Navbar";
import axios from "axios";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import moment from "moment";

const { Text } = Typography;

export default class EditVoting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      votings: [],
      vote: {
        options:[]
      }
    };
  }
async componentDidMount() {
    const vid = this.props.match.params.id;
    const form = {
      id: this.state.id,
      title: this.state.title,
      description: this.state.description,
      organizer: this.state.organizer,
      startDate: this.state.startDate,
      endDate: this.state.endDate,
      votingType: this.state.votingType,
      options: this.state.options,
    }; 
   
 await axios
      .get(`http://localhost:8081/vote/` + vid )
      .then((response) => response.data)
      .then((data) => {
        console.log(form.id)
        this.setState({ vote: data });
      }); 
 
  
  }


  render() {
    const {
      id,
      title,
      description,
      organizer,
      startDate,
      endDate,
      votingType,
      options,
      vote
    } = this.state;

    const formSuccess = (datas) => {
      console.log("Form was finished successfully: ", datas);
    };

    const formFail = (error) => {
      console.log("Form failed: ", error);
    };

    function disabledDate(current) {
      // Can not select days before today
      return current && current < moment().startOf("day");
    }

    return (
      <Layout className="layout">
        <Navbar />

        <div style={{ marginTop: "50px" }}>
          <Content style={{ padding: "0 50px" }}>
            <div className="site-layout-content">
              <h2 style={{ textAlign: "center", fontSize: "36px" }}>
                Edit Voting
              </h2>
              <hr />
           
                <Form
                  name="basic"
                  initialValues={{ remember: true }}
                  onFinish={formSuccess}
                  onFinishFailed={formFail}
                >
                  <Text>TITLE or MAIN QUESTION</Text>
                  <Form.Item name="title">
                    <Input disabled placeholder={vote.title} />
                  </Form.Item>

                  <Text>DESCRIPTION</Text>
                  <Form.Item name="description">
                    <Input disabled placeholder={vote.description} />
                  </Form.Item>

                  <Text>ORGANIZER</Text>
                  <Form.Item name="organizer">
                    <Input disabled placeholder={vote.organizer} />
                  </Form.Item>

                  <Text>START DATE</Text>
                  <Form.Item
                    name="startDate"
                    rules={[{ required: true, message: "Please input!" }]}
                  >
                    <DatePicker
                      defaultDate={vote.startDate}
                      disabledDate={disabledDate}
                    />
                  </Form.Item>

                  <Text>END DATE</Text>
                  <Form.Item
                    name="endDate"
                    rules={[{ required: true, message: "Please input!" }]}
                  >
                    <DatePicker
                      defaultDate={vote.endDate}
                      disabledDate={disabledDate}
                    />
                  </Form.Item>

                  <Text>TYPE OF VOTING</Text>
                <Form.Item
                  required
                  name="votingType"
                  rules={[{ required: true, message: "Please input!" }]}
                >
                  <Radio.Group name="radiogroup">
                    <Radio.Button
                      value={1}
                      disabled
                      onChange={(text) =>
                        this.setState({ votingType: text.target.value })
                      }
                    >
                      Participatory
                    </Radio.Button>
                    <Radio.Button
                      value={2}
                      disabled
                      onChange={(text) =>
                        this.setState({ votingType: text.target.value })
                      }
                    >
                      Educational
                    </Radio.Button>
                    <Radio.Button
                      value={3}
                      disabled
                      onChange={(text) =>
                        this.setState({ votingType: text.target.value })
                      }
                    >
                      Political
                    </Radio.Button>
                  </Radio.Group>
                </Form.Item>

         {console.log(vote)}

                  <Text>OPTIONS</Text>
                  <ul>
                    {vote.options.map((opt) => (
                      <Form.Item>
                        <Input disabled placeholder={opt} />
                      </Form.Item>
                    ))}
                  </ul> 
                </Form>
           
            </div>
          </Content>
        </div>
      </Layout>
    );
  }
}
