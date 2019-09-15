import React from 'react';
import { withRouter } from 'react-router-dom';
import LoginForm from '../../Components/Login/LoginForm';
import api from '../../Services/api';
import { getAccessToken } from '../../Utils/auth';

import './LoginPage.css';

class Login extends React.PureComponent {

  componentDidMount() {
    if (getAccessToken()) {
      this.props.history.push('/profile');
    }
  }

  render() {
    return (
      <div className="LoginPage">
        <LoginForm login={api.fetchLogin} />
      </div>
    );
  }

}

export default withRouter(Login);