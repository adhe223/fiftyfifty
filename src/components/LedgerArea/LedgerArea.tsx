import React from 'react';

import NewTxForm from '../../components/NewTxForm';
import TransactionTable from '../../components/TransactionTable';
import Person from '../../data/models/Person';
import Transaction from '../../data/models/Transaction';

export interface LedgerAreaProps {
  transactions: Transaction[];
  people: Person[];
  submittingTx: (
    person: Person,
    amount: number,
    description: string,
    date: Date,
  ) => void;
}

const LedgerArea: React.StatelessComponent<LedgerAreaProps> = (props) => {
  debugger;
  return (
    <div className="ledger-area">
      <NewTxForm people={props.people} submittingTx={props.submittingTx} />
      <TransactionTable transactions={props.transactions} />
    </div>
  );
};
export default LedgerArea;
