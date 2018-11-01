import React, { Component } from 'react';
import { Icon, Avatar, Card, List, Modal } from 'antd';
import 'antd/dist/antd.css';

import PgProjectTimeline from './PgProjectTimeline';

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

            <Card bordered={false} style={{ margin: '0 2.4em', padding: '0 1em 0 1em' }}>
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
                  extra={<img width={272} alt="logo" src="https://images.pexels.com/photos/1174932/pexels-photo-1174932.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />}
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
      );
   }
}