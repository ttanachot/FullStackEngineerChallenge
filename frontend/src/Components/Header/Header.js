import React from 'react';
import { Avatar, Button } from 'antd';
import { getAccessToken, removeAccessToken } from '../../Utils/auth';
import { Link, withRouter } from 'react-router-dom';
import Logo from '../../images/logo.png';
import './Header.css';

class HeaderComponent extends React.PureComponent {
  onLogout = () => {
    removeAccessToken();
    this.props.history.push('/');
  }

  render() {
    return (
      <div className="Header">
        <Link to='/'><img className="Logo" src={Logo} alt="logo" /></Link>
        {getAccessToken() && (
          <div className="HeaderMenu">
            <Avatar icon="user" style={{ backgroundColor: '#87d068' }} />
            <Button className="SignoutButton" onClick={this.onLogout}>
              Logout
            </Button>
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(HeaderComponent);
