import React from 'react';
import { connect } from 'react-redux';

import Header from './Header';
import CharityList from './CharityList';

const Profile = props => {
  return (
    <>
      <Header />
      <CharityList charities={props.userCharityList} renderSaveButton={false} />
    </>
  )
}

const mapStateToProps = state => {
  return {
    userCharityList: state.users.user.charities,
  }
}

export default connect(mapStateToProps, {})(Profile);