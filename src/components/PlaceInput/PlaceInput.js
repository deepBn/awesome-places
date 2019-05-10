import React from 'react';

import DefaultInput from '../UI/DefaultInput/DefaultInput';

const placeInput = props => {
  const {placeData, onChangeText} = props;

  return (
    <DefaultInput
      placeholder="Place name"
      value={placeData.value}
      valid={placeData.valid}
      touched={placeData.touched}
      onChangeText={onChangeText}
    />
  );
};

export default placeInput;