import React, { Component } from 'react';
import { Icon, Divider, Row, Col, Avatar, Card, Tag, Button, Tabs } from 'antd';
import 'antd/dist/antd.css';
import './PgAccount.css';

import PgCreateContent from "../Create/PgCreateContent";
import PgExpContent from '../Exp/PgExpContent';

const ButtonGroup = Button.Group;
const TabPane = Tabs.TabPane;

export default class PageHeader extends Component {

   render() {
      return (
         <div>
            <Card bordered={false} style={{ margin: '0 1.4em 0 1.4em', height: '-webkit-fill-available' }}>
            {/* padding: '0 1em 0 1em' */}
               <Row type="flex" justify="start">
                  <Col span={8}>
                     <Avatar 
                     size={210} src="http://dl.hiapphere.com/data/icon/201412/HiAppHere_com_com.studio8apps.instasizenocrop.png" />
                  </Col>
                  <Col span={10} style={{ textAlign: 'left' }}>
                     <Row style={{ fontSize: "1.8em" }}>
                        John Doe
                     </Row>
                     <Row>
                        <Tag color="geekblue">Developer</Tag>
                        <Tag color="gold">Designer</Tag>
                        <Tag color="green">Artist</Tag>
                     </Row>
                     <br></br>
                     <Row style={{ color: "#00000073"}}>
                        <Icon type="form" /> 4
                        <Divider type="vertical"></Divider>
                        <Icon type="global"/> 187
                        <Divider type="vertical"></Divider>
                        <Icon type="trophy"/> 24
                     </Row>
                     <Row style={{ color: "#00000073"}}> 
                        <Icon type="mail"/> john.doe@mind.boston
                        <Divider type="vertical"></Divider>
                        <Icon type="mobile"/> 123-456-7890
                     </Row>
                     <Row type="flex" justify="start">
                        <Col>
                           <Icon type="facebook" />
                        </Col>
                        <Col offset={1}>
                           <Icon type="twitter" />
                        </Col>
                        <Col offset={1}>
                           <Icon type="linkedin" />
                        </Col>
                        <Col offset={1}>
                           <Icon type="instagram" />
                        </Col>
                     </Row>
                     <br></br>
                     <Row>
                        <Col>
                           <ButtonGroup>
                              <Button type="primary" icon="user-add" style={{ width: "8em" }}>Follow</Button>
                              <Button type="primary" icon="message" ghost style={{ width: "8em" }}>Message</Button>
                           </ButtonGroup>
                        </Col>
                     </Row>
                  </Col>
               </Row>

               <Divider></Divider>

               <Row>
                  {/* <div className="card-container"> */}
                     <Tabs type="card" tabPosition="left">
                        <TabPane tab="Bio" key="1" style={{ textAlign: 'left' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</TabPane>
                        <TabPane tab="Ideas" key="2">
                           <PgCreateContent></PgCreateContent>
                        </TabPane>
                        <TabPane tab="Projects" key="3">
                           <PgExpContent></PgExpContent>
                        </TabPane>
                     </Tabs>
                  {/* </div> */}
               </Row>
            </Card>
         </div>
      );
   }
}