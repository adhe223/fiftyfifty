import person from './Person';

export default interface Transaction {
  id: number;
  description: string;
  date: Date;
  amount: number;
  person: person;
}

export interface TransactionPayload {
  description: string;
  date: Date;
  amount: number;
  person: person;
}
