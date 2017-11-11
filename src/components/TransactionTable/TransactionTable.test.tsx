import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import TransactionTable from './TransactionTable';
import Transaction from '../../data/models/Transaction';
import { TransactionTableProps } from './TransactionTable';

describe('TransactionTable', () => {
  describe('render', () => {
    let wrapper: ShallowWrapper<TransactionTableProps, {}>;

    beforeEach(() => {
      const alex = {
        id: 1,
        name: 'Alex',
      };
      const cindy = {
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

      wrapper = shallow(<TransactionTable transactions={transactions} />);
    });

    it('should render correctly', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});
