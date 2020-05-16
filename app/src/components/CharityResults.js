import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchCharities } from '../store/actions';
import Header from './Header';
import CharityList from './CharityList';

const CharityResults = ({ isFetching, charities, }) => {

  return (
    <main>
      <Header />
      {isFetching && <div>Fetching charities...</div>}
      {
        <CharityList charities={charities} renderSaveButton={true} />
      }
    </main>
  );
}

const mapStateToProps = state => {
  return {
    charities: state.charity.charities,
    isFetching: state.charity.isFetching,
  }
}

export default connect(mapStateToProps, { fetchCharities })(CharityResults);