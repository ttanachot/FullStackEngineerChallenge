import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'lodash/fp';
import { Alert, Form, Icon, Input, Button, Checkbox } from 'antd';
import './LoginForm.css';

class NormalLoginForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = { error: null }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        const result = await this.props.login(values);
        const { error } = result;
        if (error) {
          this.setState({ error });
        } else {
          // Redirect to profile page
          this.props.history.push('/profile');
        }
      }
    });
  };

  handleFieldsChange = (e) => {
    this.setState({ error: null });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="LoginForm">
        <h2>Login</h2>
        { this.state.error && <Alert message={this.state.error} type="error" showIcon /> }
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(<Checkbox>Remember me</Checkbox>)}
          <Link className="login-form-forgot" to="/">
            Forgot password
          </Link>
          <div>
            <Button type="primary" style={{ width: '100%' }} htmlType="submit" className="login-form-button">
              Log in
            </Button>
          </div>
          Or <Link to="/">register now!</Link>
        </Form.Item>
      </Form>
    );
  }
}

export default compose(
  withRouter,
  Form.create()
)(NormalLoginForm);
