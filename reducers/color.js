import C from '../constants/constants';

const color = (state = {}, action) => {
  switch (action.type) {
    case C.ADD_COLOR:
      return {
        id: action.id,
        title: action.title,
        color: action.color,
        rating: action.rating,
        timestamp: action.timestamp
      };
    case C.RATE_COLOR:
      return (state.id !== action.id) ? state : {
        ...state,
        rating: action.rating
      };
    default:
      return state;
  }
};

export default color;
