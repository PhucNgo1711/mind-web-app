import React, { Component } from 'react';
import { Icon, Row, Col, Avatar, Card, List, Modal } from 'antd';
import 'antd/dist/antd.css';

import PgProjectTimeline from './PgProjectTimeline';

const { Meta } = Card;

const listData = [];
for (let i = 0; i < 6; i++) {
  listData.push({
    href: 'http://ant.design',
    title: `Project Number ${i + 1}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  });
}

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

export default class PgCreateContent extends Component {
   state = { visible: false }

   showModal = () => {
      this.setState({
         visible: true,
      });
   }

   handleOk = (e) => {
      console.log(e);
      this.setState({
         visible: false,
      });
   }

   handleCancel = (e) => {
      console.log(e);
      this.setState({
         visible: false,
      });
   }

   render() {
      return (
         <div>
            <Modal
               title="Basic Modal"
               visible={this.state.visible}
               onOk={this.handleOk}
               onCancel={this.handleCancel}
            >
               <PgProjectTimeline></PgProjectTimeline>
            </Modal>

            <Card bordered={false} style={{ margin: '0 1.4em 0 1.4em', padding: '0 1em 0 1em' }}>
            <List
               itemLayout="vertical"
               size="large"
               pagination={{
                  onChange: (page) => {
                  console.log(page);
                  },
                  pageSize: 3,
               }}
               dataSource={listData}
               renderItem={item => (
                  <List.Item
                  onClick={ this.showModal }
                  style={{ textAlign: 'left', cursor: 'pointer' }}
                  key={item.title}
                  actions={[<IconText type="star-o" text="156" />, <IconText type="like-o" text="156" />, <IconText type="message" text="2" />]}
                  extra={<img width={272} alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" />}
                  >
                  <List.Item.Meta
                     avatar={<Avatar src={item.avatar} />}
                     title={item.title}
                     description={item.description}
                  />
                  {item.content}
                  </List.Item>
               )}
            />
         </Card>
         </div>

         // <div>
         //    <Row type="flex" justify="space-around">
         //       <Col span={11}>
         //          <Card
         //          hoverable
         //          cover={<img alt="example" src="https://cdn.pixabay.com/photo/2018/08/12/16/59/ara-3601194_1280.jpg" />}
         //          actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
         //          >
         //          <Meta
         //             style={{ float: 'left' }}
         //             avatar={<Avatar   src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" size={50}/>}
         //             title={<p style={{ float: 'left', height: '0.5em' }}>Project 1</p>}
         //             description="Project description"
         //          />
         //          </Card>
         //       </Col>

         //       <Col span={11}>
         //          <Card
         //          hoverable
         //          cover={<img alt="example" src="https://images.pexels.com/photos/1166414/pexels-photo-1166414.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />}
         //          actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
         //          >
         //          <Meta
         //             style={{ float: 'left' }}
         //             avatar={<Avatar   src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" size={50}/>}
         //             title={<p style={{ float: 'left', height: '0.5em' }}>Project 2</p>}
         //             description="Project description"
         //          />
         //          </Card>
         //       </Col>
         //    </Row>

         //    <br></br>

         //    <Row type="flex" justify="space-around">
         //       <Col span={11}>
         //          <Card
         //          hoverable
         //          cover={<img alt="example" src="https://images.pexels.com/photos/708513/pexels-photo-708513.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />}
         //          actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
         //          >
         //          <Meta
         //             style={{ float: 'left' }}
         //             avatar={<Avatar   src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" size={50}/>}
         //             title={<p style={{ float: 'left', height: '0.5em' }}>Project 3</p>}
         //             description="Project description"
         //          />
         //          </Card>
         //       </Col>
            
         //       <Col span={11}>
         //          <Card
         //          hoverable
         //          cover={<img alt="example" src="https://images.pexels.com/photos/1338796/pexels-photo-1338796.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />}
         //          actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
         //          >
         //          <Meta
         //             style={{ float: 'left' }}
         //             avatar={<Avatar   src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" size={50}/>}
         //             title={<p style={{ float: 'left', height: '0.5em' }}>Project 4</p>}
         //             description="Project description"
         //          />
         //          </Card>
         //       </Col>
         //    </Row>
            
         //    <br></br>

         //    <Row type="flex" justify="space-around">
         //       <Col span={11}>
         //          <Card
         //          hoverable
         //          cover={<img alt="example" src="https://images.pexels.com/photos/867452/pexels-photo-867452.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />}
         //          actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
         //          >
         //          <Meta
         //             style={{ float: 'left' }}
         //             avatar={<Avatar   src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" size={50}/>}
         //             title={<p style={{ float: 'left', height: '0.5em' }}>Project 5</p>}
         //             description="Project description"
         //          />
         //          </Card>
         //       </Col>
            
         //       <Col span={11}>
         //          <Card
         //          hoverable
         //          cover={<img alt="example" src="https://images.pexels.com/photos/1168940/pexels-photo-1168940.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />}
         //          actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
         //          >
         //          <Meta
         //             style={{ float: 'left' }}
         //             avatar={<Avatar   src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" size={50}/>}
         //             title={<p style={{ float: 'left', height: '0.5em' }}>Project 6</p>}
         //             description="Project description"
         //          />
         //          </Card>
         //       </Col>
         //    </Row>
         // </div>
      );
   }
}