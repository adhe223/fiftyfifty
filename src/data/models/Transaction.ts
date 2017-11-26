export default interface Transaction {
  id: number;
  description: string;
  date: Date;
  amount: number;
  person: String;
  settled: Boolean;
};
