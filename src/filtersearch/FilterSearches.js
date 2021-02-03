import {Breadcrumb, Button, Menu, Radio} from "antd";
import Layout, { Content } from "antd/lib/layout/layout";
import React, {Component, useState, useEffect} from "react";
import "../App.css";
import { Typography } from 'antd';
import Navbar from "../navbar/Navbar";
import Sider from "antd/es/layout/Sider";
import axios from "axios";
import {Checkbox, Row, Col} from 'antd';
const { Text, Link } = Typography;

function onChange(checkedValues) {
    console.log('checked = ', checkedValues);
}

export default class FilterSearches extends Component{
    constructor(props) {
        super(props);
        this.state = {
            SearchResults: [],
        };
    }

 
    componentDidMount() {
  /*  const {data} =    await axios
      .get("http://localhost:8081/vote")
      .then((response) => response.data)
      .then((data) => {
        this.setState({ votings: data });
      });

      setResults(data.query.search);
 */
        axios
            .post()
            .then((response) => console.log(response.data));
    }


    onChange = e => {
        console.log('radio checked', e.target.value);
        this.setState({
            value: e.target.value,
        });
    };

    render(){
        const radioStyle = {
            display: 'block',
            height: '30px',
            lineHeight: '30px',
        };

        const { collapsed } = this.state;
        return (

            <Layout className="layout">

                <Navbar />

                <div style={{ marginTop: "50px" }}>

                    <Content style={{ padding: "0 50px"}}>

                        <div className="site-layout-content">
                          <Row>
                            <Col span={5}>
                                <Menu defaultSelectedKeys={['filter']}  >
                                    <h3 style={{color: 'cornflowerblue', fontFamily: 'revert'}}>Filter Options: </h3>

                                    <br />
                                    <Menu.Item
                                        name="votingMethod"
                                        rules={[{ required: true, message: "Please input!" }]}
                                    >
                                        <Radio.Group name="radiogroup">
                                            <Radio style={radioStyle}
                                                value={1}
                                                onChange={(text) =>
                                                    this.setState({ votingMethod: text.target.value })
                                                }
                                            >
                                                Participatory
                                            </Radio>
                                            <Radio style={radioStyle}
                                                value={2}
                                                onChange={(text) =>
                                                    this.setState({ votingMethod: text.target.value })
                                                }
                                            >
                                                Educational
                                            </Radio>
                                            <Radio style={radioStyle}
                                                value={3}
                                                onChange={(text) =>
                                                    this.setState({ votingMethod: text.target.value })
                                                }
                                            >
                                                Political
                                            </Radio>
                                        </Radio.Group>

                                    </Menu.Item>
                                    <br/>
                                    <Menu.Item>
                                        <Button type="primary" style={{fontFamily: 'revert', background: 'cornflowerblue'}}>FILTER</Button>
                                    </Menu.Item>

                                </Menu>
                            </Col>
                            <Col span={12}>
                                <d>Search and Filter Results</d>
                            </Col>
</Row>
                        </div>
                    </Content>
                </div>
            </Layout>
        );
    }

};