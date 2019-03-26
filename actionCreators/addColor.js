import { v4 } from 'uuid';
import C from '../constants/constants';

const addColor = (title, color, rating) => ({
  type: C.ADD_COLOR,
  id: v4(),
  title,
  color,
  rating,
  timestamp: new Date().toString()
});

export default addColor;
