import Layout, { Content, Footer } from "antd/lib/layout/layout";
import React, { Component } from "react";
import "../App.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button, Result } from 'antd';

export default class VoteResult extends Component {
    constructor(props) {
        super(props);
        this.state = {
            votings: [],
        };
    }

    render() {
        return (
            <Layout className="layout">
                <div style={{marginTop: "10px"}}>
                    <Content style={{ padding: '0 50px'}}>
                        <div className="site-layout-content">
                            <div>
                            <Result
    status="success"
    title="Your vote has been successfully saved."
    subTitle="Thank you for your vote."
    extra={[
        <Link to="/givevote">   <Button key="returnHome">Return Homepage</Button></Link>,
   <Link to="/userprofile"> <Button key="returnProfile">Return Profile</Button></Link>
     
    ]}
  />
                            </div>
                        </div>
                    </Content>
                </div>
                <Footer style={{textAlign: "center"}}>©️2021 BallotBox</Footer>
            </Layout>
        );

    }

}