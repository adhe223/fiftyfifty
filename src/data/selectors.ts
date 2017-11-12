import { StoreState } from 'types';

const getTransactions = (store: StoreState) => {
  return store.transactions;
};

const getPeople = (store: StoreState) => {
  return store.people;
};

export {
  getTransactions,
  getPeople,
};
