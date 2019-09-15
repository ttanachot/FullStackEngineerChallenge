import React from 'react';
import { get, map } from 'lodash';
import { Button, Form, Input, Modal } from 'antd';
import './SeeReviewDetailModalButton.css';

class SeeReviewDetailModalButton extends React.Component {
  state = { visible: false, review: {} };

  async componentDidMount() {
    const reviewId = get(this.props, 'reviewee.review.id');
    const review = await this.props.getReview({ reviewId });
    this.setState({ review });
  }

  showModal = () => {
    this.setState({ visible: true });
  };

  handleCancel = e => {
    this.setState({ visible: false });
  };

  renderFormItem = (label, variable, value) => (
    <Form.Item label={label} key={label}>
      {this.props.form.getFieldDecorator(
        `${variable}`,
          {
            initialValue: value,
            rules: [{ required: true, message: 'Please enter review!' }],
          }
        )(<Input.TextArea disabled placeholder="Please enter review" autosize={{ minRows: 7 }}/>)
      }
    </Form.Item>
  );

  render() {
    const topicTitle = get(this.props, 'reviewee.topic.title', '');
    const fullName = `${this.props.reviewee.firstName} ${this.props.reviewee.lastName}`;
    const title = `Detail review - ${fullName}: ${topicTitle}`;
    const questionReviews = get(this.state, 'review.questionReviews');
    const questions = map(questionReviews, review => {
      const value = review.answer;
      const id = get(review, 'question.id');
      const title = get(review, 'question.title');
      return { id, title, value };
    });

    return (
      <div>
        <Button className="SeeReviewDetailButton" type="primary" onClick={this.showModal}>See detail</Button>
        <Modal
          title={title}
          visible={this.state.visible}
          onOk={this.handleCancel}
          onCancel={this.handleCancel}
          maskClosable={false}
        >
          <Form>
            {map(questions, question => this.renderFormItem(question.title, question.id, question.value))}
          </Form>
        </Modal>
      </div>
    );
  }
};

export default Form.create()(SeeReviewDetailModalButton);
