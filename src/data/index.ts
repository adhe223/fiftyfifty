import { combineReducers } from 'redux';
import Person from './models/Person';
import ledgerArea from './LeadgerArea/reducers';

const rootReducer = combineReducers({
  ledgerArea,
});

enum ActionKeys {
  FETCHING_PEOPLE = 'FETCHING_PEOPLE',
  FETCHED_PEOPLE = 'FETCHED_PEOPLE',
  SUBMITTING_TX = 'SUBMITTING_TX',
  PROCESSED_TX = 'PROCESSED_TX',
  OTHER_ACTION = '__any_other_action_type__'
}

type ActionTypes =
  | SubmittingTx
  | ProcessedTx
  | FetchingPeople
  | FetchedPeople
  | OtherAction;

export interface SubmittingTx {
  type: ActionKeys.SUBMITTING_TX;
  payload: {
    personId: string;
    amount: number;
    description: string;
    date: Date;
  };
}

export interface ProcessedTx {
  type: ActionKeys.PROCESSED_TX;
  payload: {
    err: string | undefined;
  };
}

export interface FetchingPeople {
  type: ActionKeys.FETCHING_PEOPLE;
}

export interface FetchedPeople {
  type: ActionKeys.FETCHED_PEOPLE;
  payload: {
    people: Person[];
  };
}

export interface OtherAction {
  type: ActionKeys.OTHER_ACTION;
}

export {
  rootReducer,
  ActionKeys,
  ActionTypes
};
