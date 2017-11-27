import Person from './Person';

export default interface Transaction {
  id: number;
  description: string;
  date: Date;
  amount: number;
  person: Person;
  settled: Boolean;
};
