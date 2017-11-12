import * as React from 'react';

import Transaction from '../../data/models/Transaction';

export interface TransactionTableProps {
  transactions: Transaction[];
}

const TransactionTable = (props: TransactionTableProps) => {
  const rows = props.transactions.map((transaction: Transaction, index) => (
    <tr key={'row-' + index} className="transaction-table--row">
      <td key={'row-' + index + 'td-1'}>{transaction.date.toString()}</td>
      <td key={'row-' + index + 'td-2'}>{transaction.person.name}</td>
      <td key={'row-' + index + 'td-3'}>{transaction.description}</td>
      <td key={'row-' + index + 'td-4'}>{transaction.amount}</td>
    </tr>
  ));

  return (
    <table className="transaction-table">
      <tbody>
        <tr className="transaction-table--header-row" key="tr-header-row">
          <th>Date</th>
          <th>Person</th>
          <th>Description</th>
          <th>Amount</th>
        </tr>
        {rows}
      </tbody>
    </table>
  );
};

export default TransactionTable;
