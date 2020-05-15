import React from 'react';

import CharityCard from './CharityCard';

const CharityList = ({ charities, renderSaveButton }) => {
  return (
    <>
      {
        charities.map(charity => (
          <CharityCard key={charity.ein} charity={charity} renderSaveButton={renderSaveButton} />
        ))
      }
    </>
  );
}

export default CharityList;