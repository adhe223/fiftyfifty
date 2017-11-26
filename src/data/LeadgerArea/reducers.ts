import { Action } from 'redux';

import { SUBMITTING_TX, PROCESSED_TX, FETCHING_PEOPLE, FETCHED_PEOPLE } from '../LeadgerArea/actions';
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
    person: 'alexId',
  },
  {
    id: 2,
    description: 'Test 2',
    amount: 2,
    person: 'cindyId',
  },
];

export interface LedgerAreaState {
    submittingTx: boolean;
    fetchingPeople: boolean;
    people: Person[];
    transactions: Transaction[];
  }

const initialState: LedgerAreaState = {
  transactions,
  people,
  submittingTx: false,
  fetchingPeople: false
};

const ledgerArea = (state: LedgerAreaState = initialState, action: any): LedgerAreaState => {
  switch (action.type) {
    case SUBMITTING_TX:
      return {
        ...state,
        submittingTx: true,
      };
    case PROCESSED_TX:
      return {
        ...state,
        submittingTx: false
      };
    case FETCHING_PEOPLE:
      return {
        ...state,
        fetchingPeople: true
      };
    case FETCHED_PEOPLE:
      return {
        ...state,
        fetchingPeople: false,
        people: action.payload.people
      };
    default:
      return state;
  }
};

export default ledgerArea;
