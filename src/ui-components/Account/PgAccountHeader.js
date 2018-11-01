import React, { Component } from 'react';
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';

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