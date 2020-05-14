import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import LoginForm from './LoginForm';

const HomeScreen = ({ isLoggedIn }) => {
  const history = useHistory();

  useEffect(() => {
    if (isLoggedIn) {
      history.push('/results');
    }
  }, [isLoggedIn]);

  return(
    <div 
      style={{ height: '100vh' }} 
      className="w-100 bg-primary d-flex justify-content-center align-items-center">
    {
      !isLoggedIn && <LoginForm />
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