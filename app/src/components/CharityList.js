import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchCharities } from '../store/actions';

import CharityCard from './CharityCard';

const CharityList = props => {
  useEffect(() => {
    props.fetchCharities();
  }, []);

  return (
    <div>
      {props.isFetching && <div>Fetching charities...</div>}
      {
        props.charities.map(charity => (
          <CharityCard key={charity.ein} charity={charity} />
        ))
      }
    </div>
  );
}

const mapStateToProps = state => {
  return {
    isFetching: state.charity.isFetching,
    charities: state.charity.charities,
  }
}

export default connect(mapStateToProps, { fetchCharities })(CharityList);