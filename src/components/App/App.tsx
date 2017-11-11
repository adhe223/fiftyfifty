import * as React from 'react';
import TransactionTable from '../TransactionTable';
import Person from '../../data/models/Person';
import Transaction from '../../data/models/Transaction';
import './App.css';

class App extends React.Component {
  public render() {
    const alex: Person = {
      id: 1,
      name: 'Alex',
    };
    const cindy: Person = {
      id: 2,
      name: 'Cindy',
    };

    const transactions: Transaction[] = [
      {
        id: 1,
        description: 'Test 1',
        amount: 1,
        date: new Date('1/1/2001'),
        person: alex,
      },
      {
        id: 2,
        description: 'Test 2',
        amount: 2,
        date: new Date('2/2/2002'),
        person: cindy,
      },
    ];

    return (
      <div className="App">
        <TransactionTable transactions={transactions}/>
      </div>
    );
  }
}

export default App;
