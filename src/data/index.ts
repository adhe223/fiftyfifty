import { combineReducers } from 'redux';

import ledgerArea from './LeadgerArea/reducers';

const rootReducer = combineReducers({
  ledgerArea,
});

export {
  rootReducer
};
