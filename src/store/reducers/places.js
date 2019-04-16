import {ADD_PLACE, DELETE_PLACE} from '../actions/actionTypes';

const initialState = {
  places: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLACE:
      return {
        ...state,
        places: state.places.concat({
          id: (Math.random() + Math.random()).toString(),
          name: action.placeName,
          image: {uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}
        })
      };
    case DELETE_PLACE:
      return {
        ...state,
        places: state.places.filter(place => place.id !== action.placeId)
      };
    default:
      return state;
  }
};

export default reducer;