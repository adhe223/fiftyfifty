import React from 'react';

import NewTxForm from '../../components/NewTxForm';
import TransactionTable from '../../components/TransactionTable';
import LedgerStatus from '../LedgerStatus';
import Person from '../../data/models/Person';
import Transaction from '../../data/models/Transaction';

export interface LedgerAreaProps {
  transactions: Transaction[];
  people: Person[];
  submittingTx: (personId: string, amount: number, description: string, date: Date) => void;
  fetchPeople: () => {};
}

class LedgerArea extends React.PureComponent<LedgerAreaProps> {
  public componentWillMount() {
    this.props.fetchPeople();
  }

  public render() {
    return (
      <div className="ledger-area">
        <NewTxForm people={this.props.people} submittingTx={this.props.submittingTx} />
        <TransactionTable transactions={this.props.transactions} />
        <LedgerStatus people={this.props.people} transactions={this.props.transactions} />
      </div>
    );
  }
}
export default LedgerArea;
