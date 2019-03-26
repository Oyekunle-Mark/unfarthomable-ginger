import C from '../constants/constants';

const sortColor = (sortBy) => {
  switch (sortBy) {
    case 'rating':
      return {
        type: C.SORT_COLORS,
        sortBy: 'SORTED_BY_RATING'
      };
    case 'title':
      return {
        type: C.SORT_COLORS,
        sortBy: 'SORTED_BY_TITLE'
      };
    default:
      return {
        type: C.SORT_COLORS,
        sortBy: 'SORTED_BY_DATE'
      };
  }
};

export default sortColor;
