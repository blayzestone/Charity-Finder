import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchCharities } from '../store/actions';

import CharityCard from './CharityCard';

const CharityList = ({ isFetching, charities, fetchCharities }) => {
  useEffect(() => {
    fetchCharities();
  }, []);

  return (
    <div>
      {isFetching && <div>Fetching charities...</div>}
      {
        charities.map(charity => (
          <CharityCard key={charity.ein} charity={charity} />
        ))
      }
    </div>
  );
}

const mapStateToProps = state => {
  return {
    isFetching: state.charity.isFetching,
  }
}

export default connect(mapStateToProps, { fetchCharities })(CharityList);