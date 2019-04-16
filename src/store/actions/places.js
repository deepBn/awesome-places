import {ADD_PLACE, DELETE_PLACE} from './actionTypes';

export const addPlace = placeName => {
  return {
    type: ADD_PLACE,
    placeName: placeName
  }
};

export const deletePlace = id => {
  return {
    type: DELETE_PLACE,
    placeId: id
  }
};
