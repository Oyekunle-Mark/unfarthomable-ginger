import { createStore, combineReducers } from 'redux';
import colors from './reducers/colors';
import sort from './reducers/sort';
import addColor from './actionCreators/addColor';
import rateColor from './actionCreators/rateColor';
import removeColor from './actionCreators/removeColor';
import sortColor from './actionCreators/sortColor';
import initialState from './dataStore/data';
import CH from './constants/colorConstants';

const store = createStore(
  combineReducers({ colors, sort }),
  initialState
);

const print = action => console.log('Action:', action);

console.log('Default color count:', store.getState().colors.length);
console.log('Initial State:', store.getState());

store.subscribe(() => console.log('New State:', store.getState()));
store.subscribe(() => console.log('Color count:', store.getState().colors.length), '\n');

print('Adding color...');
store.dispatch(addColor(CH.black, 'black', 5));

print('Rating color...');
store.dispatch(rateColor('3315e1p5-3abl-0p523-30e4-8001l8yf4457', 4));

print('Removing color...');
store.dispatch(removeColor('3315e1p5-3abl-0p523-30e4-8001l8yf4457'));

print('Altering sort value...');
store.dispatch(sortColor('SORTED_BY_TITLE'));
