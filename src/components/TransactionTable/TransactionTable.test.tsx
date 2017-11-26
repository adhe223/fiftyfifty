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
        id: 'alexId',
        name: 'Alex'
      };
      const cindy = {
        id: 'cindyId',
        name: 'Cindy'
      };

      const transactions: Transaction[] = [
        {
          id: 1,
          description: 'Test 1',
          amount: 1,
          date: new Date('1/1/2001'),
          personId: alex.id,
          settled: false
        },
        {
          id: 2,
          description: 'Test 2',
          amount: 2,
          date: new Date('2/2/2002'),
          personId: cindy.id,
          settled: false
        }
      ];

      wrapper = shallow(<TransactionTable transactions={transactions} />);
    });

    it('should render correctly', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});
