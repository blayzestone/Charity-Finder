import React from 'react';

import CharityCard from './CharityCard';

const CharityList = ({ charities }) => {
  return (
    <>
      {
        charities.map(charity => (
          <CharityCard key={charity.ein} charity={charity} />
        ))
      }
    </>
  );
}

export default CharityList;