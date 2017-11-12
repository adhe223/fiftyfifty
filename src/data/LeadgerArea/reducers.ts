import { Action } from 'redux';

import { SUBMITTING_TX } from '../LeadgerArea/actions';
import Person from '../models/Person';
import Transaction from '../models/Transaction';

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

export interface LedgerAreaState {
    submitting: boolean;
    people: Person[];
    transactions: Transaction[];
  }

const initialState: LedgerAreaState = {
  transactions,
  people,
  submitting: false,
};

const ledgerArea = (state: LedgerAreaState = initialState, action: Action): LedgerAreaState => {
  switch (action.type) {
    case SUBMITTING_TX:
      return {
        ...state,
        submitting: true,
      };
    default:
      return state;
  }
};

export default ledgerArea;
