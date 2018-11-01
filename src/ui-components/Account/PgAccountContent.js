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
            <Card bordered={false} style={{ margin: '0 1.4em', height: '-webkit-fill-available' }}>
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

               {/* <Divider></Divider> */}

               <br></br>

               <Row>
                  {/* <div className="card-container"> */}
                     <Tabs tabPosition="top" style={{ textAlign: 'left', float: 'left', padding: '0 1em' }}>
                        <TabPane tab="Bio" key="1" style={{ textAlign: 'left' }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna et pharetra pharetra massa massa ultricies mi quis hendrerit. Lacus vestibulum sed arcu non. Egestas integer eget aliquet nibh praesent tristique magna sit. Adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna. Elementum eu facilisis sed odio. Nec sagittis aliquam malesuada bibendum arcu. Sit amet dictum sit amet justo donec. Pellentesque habitant morbi tristique senectus. Viverra mauris in aliquam sem fringilla ut morbi tincidunt augue. Ultricies integer quis auctor elit sed vulputate. Varius vel pharetra vel turpis nunc eget lorem dolor sed. Dignissim cras tincidunt lobortis feugiat. Tellus molestie nunc non blandit massa. Praesent elementum facilisis leo vel fringilla est ullamcorper eget nulla.&#13;&#10;Mollis nunc sed id semper risus. Etiam non quam lacus suspendisse faucibus interdum posuere lorem ipsum. Ac turpis egestas integer eget aliquet nibh praesent tristique. Sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper. Rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt. Sem et tortor consequat id porta nibh venenatis cras. Amet luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor. Tempor orci eu lobortis elementum nibh. Quis viverra nibh cras pulvinar mattis nunc. In est ante in nibh mauris cursus mattis. Porttitor eget dolor morbi non arcu risus quis. Neque gravida in fermentum et sollicitudin ac orci phasellus egestas. Arcu bibendum at varius vel pharetra vel turpis.
                        </TabPane>
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