import React from 'react';
import { connect } from 'react-redux';

import LoginForm from './LoginForm';

const HomeScreen = props => {
  return(
    <div 
      style={{ height: '100vh' }} 
      className="w-100 bg-primary d-flex justify-content-center align-items-center">
    {
      props.isLoggedIn 
        ? <div>Logged In</div> 
        : <LoginForm />
    }
    </div>
  );
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.users.user.isLoggedIn,
  }
}

export default connect(mapStateToProps, {})(HomeScreen);