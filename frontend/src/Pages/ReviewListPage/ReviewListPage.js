import React, { Component } from 'react';
import { get, map, find } from 'lodash';
import { Link, withRouter } from 'react-router-dom';
import uuid from 'uuid/v1';
import { Table, Badge, Breadcrumb } from 'antd';
import SeeReviewDetailModalButton from './Components/SeeReviewDetailModal/SeeReviewDetailModalButton';
import AddReviewModalButton from './Components/AddReviewModal/AddReviewModalButton';
import api from '../../Services/api';
import './ReviewListPage.css';

const columns = [
  {
    title: 'Employee No.',
    key: 'employeeNumber',
    dataIndex: 'employeeNumber',
  },
  {
    title: 'Full name',
    key: 'fullName',
    width: '30%',
    render: (text, record) => (<span>{`${record.firstName} ${record.lastName}`}</span>),
  },
  {
    title: 'Email',
    key: 'email',
    dataIndex: 'email',
  },
  {
    title: 'Review Status',
    key: 'isReviewed',
    render: (text, record) => (
      <Badge
        status={record.review ? 'success' : 'error'}
        text={record.review ? 'Reviewed' : 'Not yet'}
      />
    )
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      (record.review)
      ? <SeeReviewDetailModalButton key={uuid()} reviewee={record} getReview={api.fetchReview} />
      : <AddReviewModalButton key={uuid()} reviewee={record} createReview={api.fetchCreateReview} />
    ),
  }
]

class ReviewListPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      topic: {},
    };
  }

  async componentDidMount() {
    const { reviewers } = await api.fetchProfile();
    const topicId = get(this.props, 'match.params.id');
    const topic = await api.fetchTopic({ topicId });
    const reviews = get(topic, 'reviews', []);
    const data = map(reviewers, reviewee => ({ ...reviewee, topic, review: find(reviews, ['revieweeId', reviewee.id]) }));
    this.setState({ data, topic });
  }

  render() {
    return (
      <div className="ReviewListPage">
        <Breadcrumb className="Breadcrumb" separator=">">
          <Breadcrumb.Item><Link to="/profile">Profile</Link></Breadcrumb.Item>
          <Breadcrumb.Item>{this.state.topic.title || `Topic`}</Breadcrumb.Item>
        </Breadcrumb>
        <Table
          className="ReviewListTable"
          rowKey={() => uuid()}
          columns={columns}
          dataSource={this.state.data}
        />
      </div>
    )
  }
}

export default withRouter(ReviewListPage);
