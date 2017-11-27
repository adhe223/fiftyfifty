import { Dispatch } from 'redux';
import {
  ActionKeys,
  FetchingTxs,
  FetchedTxs,
  SubmittingTx,
  ProcessedTx,
  FetchingPeople,
  FetchedPeople,
  ActionTypes
} from '../actions.types';
import { baseApiUrl } from '../../constants';
import Person from '../models/Person';
import Transaction from '../models/Transaction';

const fetchingTxs = (): FetchingTxs => ({
  type: ActionKeys.FETCHING_TXS
});

const fetchedTxs = (transactions: Transaction[]): FetchedTxs => ({
  type: ActionKeys.FETCHED_TXS,
  payload: {
    transactions
  }
});

const fetchTxs = () => {
  return (dispatch: Dispatch<ActionTypes>): void => {
    dispatch(fetchingTxs());

    const url = `${baseApiUrl}/txs/current`;
    const fetchOptions: RequestInit = {
      method: 'GET',
      headers: new Headers(),
      mode: 'cors',
      cache: 'default'
    };

    fetch(url, fetchOptions)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch current transactions');
        }
        return response.json();
      })
      .then(transactions => dispatch(fetchedTxs(transactions)))
      .catch(err => {
        console.log('Error fetching current transactions: ' + err.message);
      });
  };
};

const submittingTx = (
  personId: string,
  amount: number,
  description: string,
  date: Date
): SubmittingTx => ({
  type: ActionKeys.SUBMITTING_TX,
  payload: {
    personId,
    amount,
    description,
    date
  }
});

const processedTx = (err?: string): ProcessedTx => ({
  type: ActionKeys.PROCESSED_TX,
  payload: {
    err
  }
});

const fetchingPeople = (): FetchingPeople => ({
  type: ActionKeys.FETCHING_PEOPLE
});

const fetchedPeople = (people: Person[]): FetchedPeople => ({
  type: ActionKeys.FETCHED_PEOPLE,
  payload: {
    people
  }
});

const fetchPeople = () => {
  return (dispatch: Dispatch<ActionTypes>): void => {
    dispatch(fetchingPeople());

    const url = `${baseApiUrl}/people`;
    const fetchOptions: RequestInit = {
      method: 'GET',
      headers: new Headers(),
      mode: 'cors',
      cache: 'default'
    };

    fetch(url, fetchOptions)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch customers');
        }
        return response.json();
      })
      .then(people => dispatch(fetchedPeople(people)))
      .catch(err => {
        console.log('Error fetching people: ' + err.message);
      });
  };
};

export {
  fetchingTxs,
  fetchedTxs,
  fetchTxs,
  submittingTx,
  processedTx,
  fetchPeople,
  fetchingPeople,
  fetchedPeople
};
