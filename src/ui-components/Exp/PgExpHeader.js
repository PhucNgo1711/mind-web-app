import React, { Component } from 'react';
import { Menu, Icon, Input, Row, Col, Dropdown, Button } from 'antd';
import 'antd/dist/antd.css';

const Search = Input.Search;

export default class PgExpHeader extends Component {
   handleMenuFilterLeftClick = (e) => {
      console.log('click', e);
    }

    handleMenuFilterRightClick = (e) => {
      console.log('click', e);
    }

    menuFilterLeft = (
      <Menu onClick={ this.handleMenuFilterLeftClick }>
        <Menu.Item key="1">1st item</Menu.Item>
        <Menu.Item key="2">2nd item</Menu.Item>
        <Menu.Item key="3">3rd item</Menu.Item>
      </Menu>
    );

    menuFilterRight = (
      <Menu onClick={ this.handleMenuFilterRightClick }>
        <Menu.Item key="1">1st item</Menu.Item>
        <Menu.Item key="2">2nd item</Menu.Item>
        <Menu.Item key="3">3rd item</Menu.Item>
      </Menu>
    );

   render() {
      return (
         <Row type="flex" justify="space-between">
            <Col span={4} style={{ textAlign: 'left' }}>
               { this.props.header }
            </Col>
            <Col span={5} offset={8}>
               <Search
                  placeholder={ this.props.searchText }
                  onSearch={value => console.log(value)}
               />
            </Col>
            <Col span={3}>
               <Dropdown overlay={ this.menuFilterLeft }>
                  <Button style={{ width: "-webkit-fill-available" }}>
                  Fields <Icon type="down" />
                  </Button>
               </Dropdown>
            </Col>
            <Col span={3}>
               <Dropdown overlay={ this.menuFilterRight }>
                  <Button style={{ width: "-webkit-fill-available" }}>
                  Locations <Icon type="down" />
                  </Button>
               </Dropdown>
            </Col>
         </Row>
      );
   }
}