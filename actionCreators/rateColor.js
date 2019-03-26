import C from '../constants/constants';

const rateColor = (id, rating) => ({
  type: C.RATE_COLOR,
  id,
  rating
});

export default rateColor;
