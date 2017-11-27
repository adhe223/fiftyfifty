import React from 'react';

import Transaction from '../../data/models/Transaction';
import Person from '../../data/models/Person';

export interface LedgerStatusProps {
  people: Person[];
  transactions: Transaction[];
}

const LedgerStatus: React.StatelessComponent<LedgerStatusProps> = props => {
  const personOwes = {};

  if (props.transactions.length && props.people.length) {
    props.transactions.forEach(tx => {
      const { amount } = tx;
      const txPerson = tx.person;

      const personalCost = amount / props.people.length;
      props.people.forEach(person => {
        if (person._id === txPerson._id) {
          personOwes[person._id] = personOwes[person._id]
            ? (personOwes[person._id] -= personalCost)
            : -personalCost;
        } else {
          personOwes[person._id] = personOwes[person._id]
            ? (personOwes[person._id] += personalCost)
            : personalCost;
        }
      });
    });
  }

  const rows = props.people.map((person: Person, index) => (
    <tr key={'status-row' + index} className="status-table--row">
      <td key={'status-row' + index + 'td-1'}>{person.name}</td>
      <td key={'status-row' + index + 'td-2'}>{personOwes[person._id] || 0}</td>
    </tr>
  ));

  return (
    <table className="status-table">
      <tbody>
        <tr className="status-table--header-row" key="tr-status-header-row">
          <th>Person</th>
          <th>Amount</th>
        </tr>
        {rows}
      </tbody>
    </table>
  );
};
export default LedgerStatus;
