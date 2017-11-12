import { connect } from 'react-redux';
import { Dispatch, Action } from 'redux';

import LedgerArea from './LedgerArea';
import { StoreState } from '../../types';
import Person from '../../data/models/Person';
import { submittingTx } from '../../data/LeadgerArea/actions';
import { getTransactions, getPeople } from '../../data/selectors';

const mapStateToProps = (store: StoreState) => {
  return {
    transactions: getTransactions(store),
    people: getPeople(store),
  };
};

const mapDispatchToProps = (dispatch: Dispatch<Action>) => {
  return {
    submittingTx: (
      person: Person,
      amount: number,
      description: string,
      date: Date,
    ) => {
      dispatch(submittingTx(person, amount, description, date));
    }
  };
};

const LedgerAreaContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LedgerArea);

export default LedgerAreaContainer;
