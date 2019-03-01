import { combineReducers } from 'redux';
import { pageOneReducer } from	'./pageOne';
import { pageTwoReducer } from	'./pageTwo';

export	const	rootReducer	=	combineReducers({
  pageOne:	pageOneReducer,
  pageTwo:	pageTwoReducer,
});
