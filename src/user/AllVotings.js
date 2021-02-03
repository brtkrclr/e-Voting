import {
    Button,
    Breadcrumb,
    Divider,
    Table,
    List,
    Space,
    Popconfirm,
  } from "antd";
  import Layout, { Content, Footer } from "antd/lib/layout/layout";
  import React, { Component } from "react";
  import "../App.css"
  import Navbar from "../navbar/Navbar";
  import axios from "axios";
  import { Link } from "react-router-dom";
  import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
  
  export default class AllVotings extends Component {
    constructor(props) {
      super(props);
      this.state = {};
      this.state = {
        votings: [],
        user:[],
      };
    }
  
    componentDidMount() {
      axios
        .get("http://localhost:8081/vote")
        .then((response) => response.data)
        .then((data) => {
          this.setState({ votings: data });
        });
    }
  
   
    render() {
      const columns = [
        { title: "Voting Name", dataIndex: "name", key: "name" },
        { title: "Date", dataIndex: "date", key: "date" },
        {
          title: "Voting Method",
          dataIndex: "votingmethod",
          key: "voting method",
        },
        { title: "Access Type", dataIndex: "accesstype", key: "accesstype" },
        {
          title: "Edit or Delete",
          dataIndex: "",
          key: "x",
          render: (record) => (
            <Space size="middle">
              <Link to="/givevote">
                {" "}
                <a>GiveVote</a>
              </Link>
  
             
            </Space>
          ),
  
        
        },
      ];
  
      const data = [
        {
          key: 1,
          name: "Voting",
          date: 0,
          votingmethod: "Voting Method",
          accesstype: "Access Type",
  
          description: "Description of the voting and options",
        },
      ];
  
      return (
        <Layout className="layout">
        <Navbar />
        <div style={{ marginTop: "10px" }}>
                    <Content style={{ padding: "30px" }}>
                        <div className="site-layout-content">

                            <div className="site-page-header-ghost-wrapper">
                
               <h2>All Votings</h2>
  
                <List itemLayout="horizontal">
                  {this.state.votings.map((vote) => (
                    <List.Item>
                      <List.Item.Meta
                        title={vote.title}
                        description={vote.description}
                      />
                      <Link to={"/givevote/" + vote.id}>
                        <Button type="primary" success>
                          Give Vote
                        </Button>
                      </Link>
                     
                    </List.Item>
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