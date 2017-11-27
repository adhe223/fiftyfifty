import Person from './models/Person';
import Transaction from './models/Transaction';

export enum ActionKeys {
  FETCHING_TXS = 'FETCHING_TXS',
  FETCHED_TXS = 'FETCHED_TXS',
  FETCHING_PEOPLE = 'FETCHING_PEOPLE',
  FETCHED_PEOPLE = 'FETCHED_PEOPLE',
  SUBMITTING_TX = 'SUBMITTING_TX',
  PROCESSED_TX = 'PROCESSED_TX',
  OTHER_ACTION = '__any_other_action_type__'
}

export type ActionTypes =
  | SubmittingTx
  | ProcessedTx
  | FetchingPeople
  | FetchedPeople
  | FetchingTxs
  | FetchedTxs
  | OtherAction;

export interface FetchingTxs {
  type: ActionKeys.FETCHING_TXS;
}

export interface FetchedTxs {
  type: ActionKeys.FETCHED_TXS;
  payload: {
    transactions: Transaction[];
  };
}

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
