import { Action } from 'redux';

import { StoreState } from 'types';
import { SUBMITTING_TX } from 'data/LeadgerArea/actions';
import Person from 'data/models/Person';
import Transaction from 'data/models/Transaction';

const alex: Person = {
  id: 1,
  name: 'Alex',
};
const cindy: Person = {
  id: 2,
  name: 'Cindy',
};
const people = [
  alex,
  cindy,
];

const transactions: Transaction[] = [
  {
    id: 1,
    description: 'Test 1',
    amount: 1,
    date: new Date('1/1/2001'),
    person: alex,
  },
  {
    id: 2,
    description: 'Test 2',
    amount: 2,
    date: new Date('2/2/2002'),
    person: cindy,
  },
];

const initialState: StoreState = {
  transactions,
  people,
  submitting: false,
};

const ledgerArea = (state: StoreState = initialState, action: Action): StoreState => {
  switch (action.type) {
    case SUBMITTING_TX:
      return {...state, submitting: true};
    default:
      return state;
  }
};

export default ledgerArea;
