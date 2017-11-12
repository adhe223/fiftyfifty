import Person from 'data/models/Person';
import Transaction from 'data/models/Transaction';

export interface StoreState {
  submitting: boolean;
  people: Person[];
  transactions: Transaction[];
}
