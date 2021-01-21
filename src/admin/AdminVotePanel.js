import { Button, DatePicker, Divider, Form, Input, Radio, Switch } from "antd";
import Layout, { Content, Footer } from "antd/lib/layout/layout";
import React, { Component } from "react";
import "../App.css";
import { Typography } from "antd";
import Navbar from "../navbar/Navbar";
import axios from "axios";
import { List, Avatar, Skeleton } from "antd";

import reqwest from "reqwest";

const { Text, Link } = Typography;

const count = 5;
const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat&noinfo`;

export default class AdminVotePanel extends Component {
  state = {
    initLoading: true,
    loading: false,
    data: [],
    list: [],
  };

  componentDidMount() {
    this.getData((res) => {
      this.setState({
        initLoading: false,
        data: res.results,
        list: res.results,
      });
    });
  }

  getData = (callback) => {
    reqwest({
      url: fakeDataUrl,
      type: "json",
      method: "get",
      contentType: "application/json",
      success: (res) => {
        callback(res);
      },
    });
  };

  onLoadMore = () => {
    this.setState({
      loading: true,
      list: this.state.data.concat(
        [...new Array(count)].map(() => ({ loading: true, name: {} }))
      ),
    });
    this.getData((res) => {
      const data = this.state.data.concat(res.results);
      this.setState(
        {
          data,
          list: data,
          loading: false,
        },
        () => {
          // Resetting window's offsetTop so as to display react-virtualized demo underfloor.
          // In real scene, you can using public method of react-virtualized:
          // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized
          window.dispatchEvent(new Event("resize"));
        }
      );
    });
  };
  render() {
    const { initLoading, loading, list } = this.state;
    const loadMore =
      !initLoading && !loading ? (
        <div
          style={{
            textAlign: "center",
            marginTop: 12,
            height: 32,
            lineHeight: "32px",
          }}
        >
          <Button onClick={this.onLoadMore}>loading more</Button>
        </div>
      ) : null;
      
    return (
      <Layout className="layout">
        <Navbar />

        <div style={{ marginTop: "50px" }}>
          <Content style={{ padding: "0 50px" }}>
            <div className="site-layout-content">
              <h2 style={{ textAlign: "center", fontSize: "36px" }}>
                Admin Voting Panel
              </h2>
              <Divider style={{ color: "gray" }} />
              <List
                className="demo-loadmore-list"
                loading={initLoading}
                itemLayout="horizontal"
                loadMore={loadMore}
                dataSource={list}
                renderItem={(item) => (
                  <List.Item
                    actions={[
                      <a key="list-loadmore-edit">edit</a>,
                      <a key="list-loadmore-more">more</a>,
                    ]}
                  >
                    <Skeleton
                      title={false}
                      loading={item.loading}
                      active
                    >
                      <List.Item.Meta
                       
                        title={
                          <a href="https://ant.design">{item.name.last}</a>
                        }
                        description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                      />
                      <div>content</div>
                    </Skeleton>
                  </List.Item>
                )}
              />
            </div>
          </Content>
        </div>
        <Footer style={{ textAlign: "center" }}>©2021 BallotBox</Footer>
      </Layout>
    );
  }
}
