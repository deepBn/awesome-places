import {ADD_PLACE, DELETE_PLACE, SELECT_PLACE, DESELECT_PLACE} from '../actions/actionTypes';

const initialState = {
  places: [],
  selectedPlace: null
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
        places: state.places.filter(place => place.id !== state.selectedPlace.id),
        selectedPlace: null
      };
    case SELECT_PLACE:
      return {
        ...state,
        selectedPlace: state.places.find(place => place.id === action.placeId)
      };
    case DESELECT_PLACE:
      return {
        ...state,
        selectedPlace: null
      };
    default:
      return state;
  }
};

export default reducer;