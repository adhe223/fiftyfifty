import { combineReducers } from 'redux';

import ledgerArea from 'data/LeadgerArea/reducers';

const rootReducer = combineReducers({
  ledgerArea,
});

export {
  rootReducer
};
