import React from 'react';
import { connect } from 'react-redux';

const HomeScreen = props => {
  return(
    <div>
    {
      props.isLoggedIn ? <div>Logged In</div> : <div>Not Logged In</div>
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