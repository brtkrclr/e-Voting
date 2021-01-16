import { Button, Menu } from "antd";
import Layout, { Content } from "antd/lib/layout/layout";
import React, {Component} from "react";
import "./App.css";
import { Typography } from 'antd';
import Navbar from "./Navbar";
import Sider from "antd/es/layout/Sider";
import axios from "axios";
import {Row, Col} from 'antd';
const { Text, Link } = Typography;

export default class FilterSearches extends Component{
    constructor(props) {
        super(props);
        this.state = {
            SearchResults: [],
        };
    }

    componentDidMount() {
        axios
            .post()
            .then((response) => console.log(response.data));
    }


    render(){
        const { collapsed } = this.state;
        return (

            <Layout className="layout">

                <Navbar />

                <div style={{ marginTop: "50px" }}>

                    <Content style={{ padding: "0 50px" }}>

                        <div className="site-layout-content">
<Row>
                            <Col span={12}>
                                <Menu defaultSelectedKeys={['filter']}  >
                                    <h1>Filter</h1>
                                    <Menu.Item>
                                        <Button>Personal</Button>
                                    </Menu.Item>
                                    <Menu.Item >
                                        <Button>Student</Button>
                                    </Menu.Item>
                                    <Menu.Item>
                                        <Button>Political</Button>
                                    </Menu.Item>
                                </Menu>
                            </Col>
                            <Col span={12}>
                                <h1>hi</h1>
                            </Col>
</Row>
                        </div>
                    </Content>
                </div>
            </Layout>
        );
    }

};
