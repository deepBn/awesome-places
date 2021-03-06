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
          image: action.image,
          location: action.location
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