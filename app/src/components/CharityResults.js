import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchCharities } from '../store/actions';
import Header from './Header';
import CharityList from './CharityList';

const CharityResults = ({ isFetching, fetchCharities, charities, }) => {
  useEffect(() => {
    fetchCharities();
  }, [fetchCharities]);

  return (
    <main>
      <Header />
      {isFetching && <div>Fetching charities...</div>}
      {
        <CharityList charities={charities} />
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