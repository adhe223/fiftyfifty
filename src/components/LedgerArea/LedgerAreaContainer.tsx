import { connect } from 'react-redux';

import LedgerArea from './LedgerArea';
import { StoreState } from 'types';
import Person from 'data/models/Person';
import { submittingTx } from 'data/LeadgerArea/actions';
import { getTransactions, getPeople } from 'data/selectors';
import { Dispatch, Action } from 'redux';

const mapStateToProps = (state: StoreState) => {
  return {
    transactions: getTransactions(state),
    people: getPeople(state),
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
