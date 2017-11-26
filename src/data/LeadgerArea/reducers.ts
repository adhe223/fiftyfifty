import { ActionKeys, ActionTypes } from '../index';
import Person from '../models/Person';
import Transaction from '../models/Transaction';

const alex: Person = {
  id: 'alex',
  name: 'Alex',
};
const cindy: Person = {
  id: 'cindy',
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
    date: new Date(),
    settled: false
  },
  {
    id: 2,
    description: 'Test 2',
    amount: 2,
    person: 'cindyId',
    date: new Date(),
    settled: false
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

const ledgerArea = (state: LedgerAreaState = initialState, action: ActionTypes): LedgerAreaState => {
  switch (action.type) {
    case ActionKeys.SUBMITTING_TX:
      return {
        ...state,
        submittingTx: true,
      };
    case ActionKeys.PROCESSED_TX:
      return {
        ...state,
        submittingTx: false
      };
    case ActionKeys.FETCHING_PEOPLE:
      return {
        ...state,
        fetchingPeople: true
      };
    case ActionKeys.FETCHED_PEOPLE:
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
