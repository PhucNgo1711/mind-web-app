import React, { Component } from 'react';
import { Icon, Row, Col, Avatar, Card } from 'antd';
import 'antd/dist/antd.css';

const { Meta } = Card;

export default class PageHeader extends Component {

   render() {
      return (
         <div>
            <Row type="flex" justify="space-around">
               <Col span={11}>
                  <Card
                  hoverable
                  cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
                  actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
                  >
                  <Meta
                     style={{ float: 'left' }}
                     avatar={<Avatar   src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" size={50}/>}
                     title={<p style={{ float: 'left', height: '0.5em' }}>Project 1</p>}
                     description="Project description"
                  />
                  </Card>
               </Col>

               <Col span={11}>
                  <Card
                  hoverable
                  cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
                  actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
                  >
                  <Meta
                     style={{ float: 'left' }}
                     avatar={<Avatar   src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" size={50}/>}
                     title={<p style={{ float: 'left', height: '0.5em' }}>Project 2</p>}
                     description="Project description"
                  />
                  </Card>
               </Col>
            </Row>

            <br></br>

            <Row type="flex" justify="space-around">
               <Col span={11}>
                  <Card
                  hoverable
                  cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
                  actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
                  >
                  <Meta
                     style={{ float: 'left' }}
                     avatar={<Avatar   src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" size={50}/>}
                     title={<p style={{ float: 'left', height: '0.5em' }}>Project 3</p>}
                     description="Project description"
                  />
                  </Card>
               </Col>
            
               <Col span={11}>
                  <Card
                  hoverable
                  cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
                  actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
                  >
                  <Meta
                     style={{ float: 'left' }}
                     avatar={<Avatar   src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" size={50}/>}
                     title={<p style={{ float: 'left', height: '0.5em' }}>Project 4</p>}
                     description="Project description"
                  />
                  </Card>
               </Col>
            </Row>
            
            <br></br>

            <Row type="flex" justify="space-around">
               <Col span={11}>
                  <Card
                  hoverable
                  cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
                  actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
                  >
                  <Meta
                     style={{ float: 'left' }}
                     avatar={<Avatar   src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" size={50}/>}
                     title={<p style={{ float: 'left', height: '0.5em' }}>Project 5</p>}
                     description="Project description"
                  />
                  </Card>
               </Col>
            
               <Col span={11}>
                  <Card
                  hoverable
                  cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
                  actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
                  >
                  <Meta
                     style={{ float: 'left' }}
                     avatar={<Avatar   src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" size={50}/>}
                     title={<p style={{ float: 'left', height: '0.5em' }}>Project 6</p>}
                     description="Project description"
                  />
                  </Card>
               </Col>
            </Row>
         </div>
      );
   }
}