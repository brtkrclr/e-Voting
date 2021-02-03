import Layout, { Content, Footer } from "antd/lib/layout/layout";
import React, { Component, useState } from "react";
import "../App.css";
import Navbar from "../navbar/Navbar";
import axios from "axios";
import { Divider, Space, Table, List, Radio, Input } from "antd";
import { PageHeader } from 'antd';
import { Popconfirm, message, Button } from 'antd';
import { Link } from "react-router-dom";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
const RadioGroup = Radio.Group;
const text = 'Are you sure of the option you chose?';

function confirm() {
    message.info('Your vote has been taken.');
}


export default class GiveVote extends Component {
    constructor(props) {
        super(props);
        this.state = {
          votings: [],
          vote: { }
        };
      }
    async componentDidMount() {
        const vid = this.props.match.params.id;

    console.log(this.props.match.params.id,'asdas')
        console.log(vid);
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
        const OptionsColumns = [
            {
                title: "",
                dataIndex: "type",
                key: "type"
            },
            {
                title: "Select one of them",
                dataIndex: "selectRadio",
                key: "selectRadio",
                render: (text) => (
                    <Input type="radio" value={text} name="Select one of them">
                        {text}
                    </Input>
                )
            }];

        const data = [
            {
                type: 'Option 1',

            },
            {
                type: 'Option 2',
            },
            {
                type: 'Option 3',
            },

        ];
        return (
            <Layout className="layout">
                <Navbar />
                <div style={{ marginTop: "10px" }}>
                    <Content style={{ padding: "30px" }}>
                        <div className="site-layout-content">

                            <div className="site-page-header-ghost-wrapper">
                                <List itemLayout="horizontal">
                                    {this.state.votings.map((vote) => (
                                        <PageHeader
                                            title={vote.title}
                                        >
                                            <List.Item.Meta
                                                description={vote.description}

                                            />

                                            <ul>
                                                {this.state.votings.map((vote) => (
                                                    <ul>
                                                        {(vote?.options ?? []).map((option) => (
                                                            <Button
                                                                onClick={() => console.log("clicked!", option)}
                                                            >
                                                                {option}
                                                            </Button>
                                                        ))}
                                                    </ul>
                                                ))}
                                            </ul>

                                            <Link to="/voteresult">
                                            <Popconfirm
                                                placement="bottomLeft"
                                                title={text}
                                                onConfirm={confirm}
                                                okText="Yes"
                                                cancelText="No"
                                            >
                                                
                                                <Button type="primary" htmlType="submit" block>
                                                    SUBMIT
                                </Button>
                           
                                            </Popconfirm>
                                            </Link>
                                        </PageHeader>


                                    ))}
                                </List>
                            </div>

                        </div>

                    </Content>
                </div>
                <Footer style={{ textAlign: "center" }}>©️2021 BallotBox</Footer>
            </Layout>
        );

    }

}