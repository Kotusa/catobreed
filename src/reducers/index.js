import { combineReducers } from 'redux';

import { clientApi } from '@api';

import application from './application';

export const rootReducer = combineReducers({
  application,
  [clientApi.reducerPath]: clientApi.reducer,
});
