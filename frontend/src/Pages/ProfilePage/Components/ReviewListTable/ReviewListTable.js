import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { Table } from 'antd';
import './ReviewListTable.css';

const columns = [
  {
    title: 'Reviews',
    width: '40%',
    key: 'title',
    dataIndex: 'title',
  },
  {
    title: 'Start date',
    width: '25%',
    key: 'startAt',
    dataIndex: 'startAt',
    render: (text) => moment(text).format('DD-MMM-YYYY'),
  },
  {
    title: 'End date',
    width: '25%',
    key: 'endAt',
    dataIndex: 'endAt',
    render: (text) => moment(text).format('DD-MMM-YYYY'),
  },
  {
    title: 'Action',
    width: '10%',
    key: 'action',
    render: (text, record) => (<Link to={`/topic/${record.id}/review`}>Review</Link>)
  },
];

class ReviewListTable extends React.PureComponent {
  onRow = (record, rowIndex) => {
    return {
      onClick: (event) => {
        this.props.history.push(`/topic/${record.id}/review`)
      },
    }
  }

  render() {
    return (
      <Table className="ReviewListTable"
        rowKey="id"
        onRow={this.onRow}
        columns={columns}
        dataSource={this.props.data}
        bordered
      />
    );
  }
};

export default withRouter(ReviewListTable);
