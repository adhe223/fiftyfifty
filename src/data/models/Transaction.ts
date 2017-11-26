export default interface Transaction {
  id: number;
  description: string;
  date: Date;
  amount: number;
  personId: string;
  settled: Boolean;
};
