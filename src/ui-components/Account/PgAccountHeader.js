import React, { Component } from 'react';
import { Menu, Icon, Input, Row, Col, Dropdown, Button } from 'antd';
import 'antd/dist/antd.css';

const Search = Input.Search;

export default class PageHeader extends Component {
   render() {
      return (
         <Row type="flex" justify="space-between">
            <Col span={4} style={{ textAlign: 'left' }}>
               { this.props.header }
            </Col>
         </Row>
      );
   }
}