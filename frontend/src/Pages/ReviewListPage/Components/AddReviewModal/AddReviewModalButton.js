import React from 'react';
import { get, map } from 'lodash';
import { Button, Form, Input, Modal } from 'antd';
import './AddReviewModalButton.css';

class AddReviewModalButton extends React.Component {
  state = { visible: false };

  showModal = () => {
    this.setState({ visible: true });
  };

  handleOk = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const payload = {
          questions: map(values, (val, key) => ({ questionId: key, answer: val })),
          revieweeId: this.props.reviewee.id,
          topicId: this.props.reviewee.topic.id,
        };
        this.props.createReview(payload);
        this.setState({ visible: false });
      }
    });
  };

  handleCancel = e => {
    this.setState({ visible: false });
  };

  renderFormItem = (label, variable, value) => (
    <Form.Item label={label} key={label}>
      {this.props.form.getFieldDecorator(
        `${variable}`,
          {
            // initialValue: value,
            rules: [{ required: true, message: 'Please enter review!' }],
          }
        )(<Input.TextArea placeholder="Please enter review" autosize={{ minRows: 7 }}/>)
      }
    </Form.Item>
  );

  render() {
    const questions = get(this.props, 'reviewee.topic.questions', []);
    const topicTitle = get(this.props, 'reviewee.topic.title', '');
    const fullName = `${this.props.reviewee.firstName} ${this.props.reviewee.lastName}`;
    const title = `Add review - ${fullName}: ${topicTitle}`;

    return (
      <div>
        <Button className="AddReviewButton" type="primary" onClick={this.showModal}>Add review</Button>
        <Modal
          title={title}
          visible={this.state.visible}
          okText="Submit"
          onOk={this.handleOk}
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

export default Form.create()(AddReviewModalButton);
