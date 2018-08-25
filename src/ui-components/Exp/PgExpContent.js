import React, { Component } from 'react';
import { Icon, Row, Col, Avatar, Card } from 'antd';
import 'antd/dist/antd.css';

const { Meta } = Card;

export default class PgExpContent extends Component {

   render() {
      return (
         <div>
            <Row type="flex" justify="space-around">
               <Col span={11}>
                  <Card
                  hoverable
                  cover={<img alt="example" src="https://images.pexels.com/photos/958173/pexels-photo-958173.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />}
                  actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
                  >
                  <Meta
                     style={{ float: 'left' }}
                     avatar={<Avatar   src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" size={50}/>}
                     title={<p style={{ float: 'left', height: '0.5em' }}>Event 1</p>}
                     description="Event description"
                  />
                  </Card>
               </Col>

               <Col span={11}>
                  <Card
                  hoverable
                  cover={<img alt="example" src="https://images.pexels.com/photos/1166414/pexels-photo-1166414.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />}
                  actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
                  >
                  <Meta
                     style={{ float: 'left' }}
                     avatar={<Avatar   src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" size={50}/>}
                     title={<p style={{ float: 'left', height: '0.5em' }}>Event 2</p>}
                     description="Event description"
                  />
                  </Card>
               </Col>
            </Row>

            <br></br>

            <Row type="flex" justify="space-around">
               <Col span={11}>
                  <Card
                  hoverable
                  cover={<img alt="example" src="https://images.pexels.com/photos/708513/pexels-photo-708513.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />}
                  actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
                  >
                  <Meta
                     style={{ float: 'left' }}
                     avatar={<Avatar   src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" size={50}/>}
                     title={<p style={{ float: 'left', height: '0.5em' }}>Event 3</p>}
                     description="Event description"
                  />
                  </Card>
               </Col>
            
               <Col span={11}>
                  <Card
                  hoverable
                  cover={<img alt="example" src="https://images.pexels.com/photos/1338796/pexels-photo-1338796.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />}
                  actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
                  >
                  <Meta
                     style={{ float: 'left' }}
                     avatar={<Avatar   src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" size={50}/>}
                     title={<p style={{ float: 'left', height: '0.5em' }}>Event 4</p>}
                     description="Event description"
                  />
                  </Card>
               </Col>
            </Row>
            
            <br></br>

            <Row type="flex" justify="space-around">
               <Col span={11}>
                  <Card
                  hoverable
                  cover={<img alt="example" src="https://images.pexels.com/photos/867452/pexels-photo-867452.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />}
                  actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
                  >
                  <Meta
                     style={{ float: 'left' }}
                     avatar={<Avatar   src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" size={50}/>}
                     title={<p style={{ float: 'left', height: '0.5em' }}>Event 5</p>}
                     description="Event description"
                  />
                  </Card>
               </Col>
            
               <Col span={11}>
                  <Card
                  hoverable
                  cover={<img alt="example" src="https://images.pexels.com/photos/1168940/pexels-photo-1168940.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />}
                  actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
                  >
                  <Meta
                     style={{ float: 'left' }}
                     avatar={<Avatar   src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" size={50}/>}
                     title={<p style={{ float: 'left', height: '0.5em' }}>Event 6</p>}
                     description="Event description"
                  />
                  </Card>
               </Col>
            </Row>
         </div>
      );
   }
}