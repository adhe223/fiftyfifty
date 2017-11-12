import { StoreState } from '../types';

const getTransactions = (store: StoreState) => {
  return store.ledgerArea.transactions;
};

const getPeople = (store: StoreState) => {
  return store.ledgerArea.people;
};

export {
  getTransactions,
  getPeople,
};
