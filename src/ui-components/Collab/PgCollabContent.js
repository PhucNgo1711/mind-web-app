import React, { Component } from 'react';
import { Icon, Row, Col, Card } from 'antd';
import 'antd/dist/antd.css';

const { Meta } = Card;

export default class PgCollabContent extends Component {

   render() {
      return (
         <div>
            <Row type="flex" justify="space-around">
               <Col span={11}>
                  <Card
                  bordered={ false }
                  hoverable
                  cover={<img alt="example" src="https://images.pexels.com/photos/1340469/pexels-photo-1340469.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />}
                  actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
                  >
                  <Meta
                     style={{ float: 'left' }}
                     title={<p style={{ float: 'left', height: '0.5em' }}>John A.</p>}
                     description={<p style={{ textAlign: 'left' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>}
                  />
                  </Card>
               </Col>

               <Col span={11}>
                  <Card
                  bordered={ false }
                  hoverable
                  cover={<img alt="example" src="https://images.pexels.com/photos/1340509/pexels-photo-1340509.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />}
                  actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
                  >
                  <Meta
                     style={{ float: 'left' }}
                     title={<p style={{ float: 'left', height: '0.5em' }}>John B.</p>}
                     description={<p style={{ textAlign: 'left' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>}
                  />
                  </Card>
               </Col>
            </Row>

            <br></br>

            <Row type="flex" justify="space-around">
               <Col span={11}>
                  <Card
                  bordered={ false }
                  hoverable
                  cover={<img alt="example" src="https://images.pexels.com/photos/937453/pexels-photo-937453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />}
                  actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
                  >
                  <Meta
                     style={{ float: 'left' }}
                     title={<p style={{ float: 'left', height: '0.5em' }}>John C.</p>}
                     description={<p style={{ textAlign: 'left' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>}
                  />
                  </Card>
               </Col>
            
               <Col span={11}>
                  <Card
                  bordered={ false }
                  hoverable
                  cover={<img alt="example" src="https://images.pexels.com/photos/875862/pexels-photo-875862.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />}
                  actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
                  >
                  <Meta
                     style={{ float: 'left' }}
                     title={<p style={{ float: 'left', height: '0.5em' }}>John D.</p>}
                     description={<p style={{ textAlign: 'left' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>}
                  />
                  </Card>
               </Col>
            </Row>
            
            <br></br>

            <Row type="flex" justify="space-around">
               <Col span={11}>
                  <Card
                  bordered={ false }
                  hoverable
                  cover={<img alt="example" src="https://images.pexels.com/photos/1331395/pexels-photo-1331395.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />}
                  actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
                  >
                  <Meta
                     style={{ float: 'left' }}
                     title={<p style={{ float: 'left', height: '0.5em' }}>John E.</p>}
                     description={<p style={{ textAlign: 'left' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>}
                  />
                  </Card>
               </Col>
            
               <Col span={11}>
                  <Card
                  bordered={ false }
                  hoverable
                  cover={<img alt="example" src="https://images.pexels.com/photos/963444/pexels-photo-963444.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />}
                  actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
                  >
                  <Meta
                     style={{ float: 'left' }}
                     title={<p style={{ float: 'left', height: '0.5em' }}>John F.</p>}
                     description={<p style={{ textAlign: 'left' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>}
                  />
                  </Card>
               </Col>
            </Row>
         </div>
      );
   }
}