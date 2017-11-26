import React from 'react';

import Transaction from '../../data/models/Transaction';
import Person from '../../data/models/Person';

export interface LedgerStatusProps {
  people: Person[];
  transactions: Transaction[];
}

const LedgerStatus: React.StatelessComponent<LedgerStatusProps> = props => {
  const personTotals = {};
  const personOwes = {};
  let ledgerTotal = 0;

  props.transactions.forEach(tx => {
    const { amount, personId } = tx;

    personTotals[personId] = personTotals[personId] ? personTotals[personId] : 0;
    personTotals[personId] += amount;
    personOwes[personId] = 0;
    ledgerTotal += amount;
  });

  props.people.forEach(person => {
    const personId = person.id;
    personOwes[personId] = ledgerTotal / props.people.length - personTotals[personId];
  });

  const rows = props.people.map((person: Person, index) => (
    <tr key={'status-row' + index} className="status-table--row">
      <td key={'status-row' + index + 'td-1'}>{person.name}</td>
      <td key={'status-row' + index + 'td-2'}>{personOwes[person.id]}</td>
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
