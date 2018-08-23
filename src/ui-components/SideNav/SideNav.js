import React, { Component } from 'react';
import { Layout, Menu, Icon, Row, Avatar } from 'antd';
import 'antd/dist/antd.css';
import './SideNav.css';

import PgCreateHeader from '../Create/PgCreateHeader';
import PgCreateContent from "../Create/PgCreateContent";
import PgCollabHeader from '../Collab/PgCollabHeader';
import PgCollabContent from '../Collab/PgCollabContent';

const { Header, Content, Footer, Sider } = Layout;

export default class SideNav extends Component {
    state = {
      collapsed: false,
      header: 'Create',
      // header: 'Collaboration',
      searchText: 'Search Projects'
    };
  
    onCollapse = (collapsed) => {
      console.log(collapsed);
      this.setState({ collapsed });
    }

    openAccount = () => {
      this.setState({
        header: 'Account',
        searchText: ''
      })
    }

    openCreate = () => {
      this.setState({
        header: 'Create',
        searchText: 'Search Projects'
      })
    }

    openCollab = () => {
      this.setState({
        header: 'Collaboration',
        searchText: 'Search Creators'
      })
    }

    openExp = () => {
      this.setState({
        header: 'Experience',
        searchText: 'Search Events'
      })
    }

    openMap = () => {
      this.setState({
        header: 'Map',
        searchText: 'Search'
      })
    }

    openSetting = () => {
      this.setState({
        header: 'Setting',
        searchText: ''
      })
    }

    render() {
      let header;
      let pageContent;
      
      if (this.state.header === 'Create') {
        header = (
          <PgCreateHeader header={ this.state.header } searchText={ this.state.searchText }></PgCreateHeader>
        );
    
        pageContent = (
          <PgCreateContent header={ this.state.header }></PgCreateContent>
        );
      }
      else if (this.state.header === 'Collaboration') {
        header = (
          <PgCollabHeader header={ this.state.header } searchText={ this.state.searchText }></PgCollabHeader>
        );
    
        pageContent = (
          <PgCollabContent header={ this.state.header }></PgCollabContent>
        );
      }

      return (
        <Layout style={{ minHeight: '100vh' }}>
          <Sider
            collapsible
            collapsed={ this.state.collapsed }
            onCollapse={ this.onCollapse }
          >
            <div className="logo">
              {/* <img style={{height: inherit}}  src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"></img> */}
              <div style={{ background: '#02223F', height: 'inherit' }}></div>
            </div>
            
            <Row onClick={ this.openAccount } style={{ cursor: 'pointer'}}>
              <Row>
                <Avatar size= {64} style={{ backgroundColor: '#87d068' }} icon="user" />
              </Row>
              
              <Row>
                <p style={{ color: '#fafafa', margin: '0.5em' }}>John Doe</p>
              </Row>                
            </Row>
          
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
              {/* <Menu.Item key="1" style={{padding: '0em 1.7em 0em 0em'}}>
                <Icon type="pushpin" />
                <span>Dashboard</span>
              </Menu.Item> */}
              <Menu.Item key="1" onClick={ this.openCreate } style={{padding: '0em 3.6em 0em 0em'}} >
                <Icon type="rocket" />
                <span>Create</span>
              </Menu.Item>
              <Menu.Item key="2" onClick={ this.openCollab }>
                <Icon type="global" />
                <span>Collaborate</span>
              </Menu.Item>
              <Menu.Item key="3" onClick={ this.openExp } style={{padding: '0em 1.3em 0em 0em'}}>
                <Icon type="eye-o" />
                <span>Experience</span>
              </Menu.Item>
              <Menu.Item key="4" onClick={ this.openMap } style={{padding: '0em 4.3em 0em 0em'}}>
                <Icon type="environment-o" />
                <span>Map</span>
              </Menu.Item>
              <Menu.Item key="5" onClick={ this.openSetting } style={{padding: '0em 3.2em 0em 0em'}}>
                <Icon type="setting" />
                <span>Setting</span>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Header style={{ background: '#fff', padding: '0 2.1em 0 2em', fontSize: '1.5em' }}>
              { header }
            </Header>
            <Content style={{ padding: '24px', background: '#F5F9FC', minHeight: 280 }}>
              { pageContent }
            </Content>
            <Footer style={{ textAlign: 'center' }}>
              M.I.N.D Boston ©2018 Created by Phuc Ngo & Ant UED
            </Footer>
          </Layout>
        </Layout>
      );
    }
  }