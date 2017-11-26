import { Dispatch, Action } from 'redux';
import { baseApiUrl } from '../../constants';
import Person from '../models/Person';

const SUBMITTING_TX = 'SUBMITTING_TX';
const submittingTx = (
  personId: String,
  amount: number,
  description: string,
  date: Date,
) => ({
  type: SUBMITTING_TX,
  payload: {
    personId,
    amount,
    description,
    date,
  },
});

const PROCESSED_TX = 'PROCESSED_TX';
const processedTx = (
  err?: String
) => ({
  type: PROCESSED_TX,
  payload: {
    err,
  }
});

const FETCHING_PEOPLE = 'FETCHING_PEOPLE';
const fetchingPeople = () => ({
  type: FETCHING_PEOPLE
});

const FETCHED_PEOPLE = 'FETCHED_PEOPLE';
const fetchedPeople = (
  people: Person[],
) => ({
  type: FETCHED_PEOPLE,
  payload: {
    people
  }
});

const fetchPeople = () => {
  return (dispatch: Dispatch<any>): void => {
    dispatch(fetchingPeople());

    const url = `${baseApiUrl}/people`;
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch customers');
        }
        return response.json();
      })
      .then((people) => dispatch(fetchedPeople(people)))
      .catch((err) => {
        console.log('Error fetching people: ' + err.message);
      });
  };
};

export {
  submittingTx,
  SUBMITTING_TX,
  processedTx,
  PROCESSED_TX,
  fetchPeople,
  fetchingPeople,
  FETCHING_PEOPLE,
  fetchedPeople,
  FETCHED_PEOPLE
};
