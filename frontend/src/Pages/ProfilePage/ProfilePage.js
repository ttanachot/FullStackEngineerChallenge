import React, { Component } from 'react';
import moment from 'moment';
import { get } from 'lodash';
import { Avatar, Badge, Divider, Descriptions } from 'antd';
import ReviewListTable from './Components/ReviewListTable/ReviewListTable';
import api from '../../Services/api';
import './Profile.css';

class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = { data: {} };
  }

  async componentDidMount() {
    const result = await api.fetchProfile();
    this.setState({ data: result });
  }

  renderUserProfile = (data) => (
    <Descriptions className="MyProfile" title="My Profile" bordered>
      <Descriptions.Item label="Profile image" span={3}><Avatar size={100} icon="user" /></Descriptions.Item>
      <Descriptions.Item label="FullName" span={3}>{`${data.firstName} ${data.lastName}`}</Descriptions.Item>
      <Descriptions.Item label="Position" span={3}>{data.position || 'Manager'}</Descriptions.Item>
      <Descriptions.Item label="Email" span={2}>{data.email}</Descriptions.Item>
      <Descriptions.Item label="Mobile Number" span={2}>{data.phoneNumber}</Descriptions.Item>
      <Descriptions.Item label="Start working date" span={3}>{moment(data.createdAt).format('DD-MMM-YYYY')}</Descriptions.Item>
      <Descriptions.Item label="Status" span={3}>
        <Badge status="processing" text="Active" />
      </Descriptions.Item>
    </Descriptions>
  )

  render () {
    const reviewTopics = get(this.state, 'data.topics', []);
    return (
      <div className="Profile">
        {this.renderUserProfile(this.state.data)}
        <Divider />
        <h3>Reviews</h3>
        <ReviewListTable data={reviewTopics} />
      </div>
    );
  }
}

export default ProfilePage;