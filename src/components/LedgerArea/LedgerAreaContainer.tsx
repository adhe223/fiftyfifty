import { connect, Dispatch } from 'react-redux';
import LedgerArea from './LedgerArea';
import { StoreState } from '../../types';
import { submittingTx, fetchPeople } from '../../data/LeadgerArea/actions';
import { getTransactions, getPeople } from '../../data/selectors';

const mapStateToProps = (store: StoreState) => {
  return {
    transactions: getTransactions(store),
    people: getPeople(store),
  };
};

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
  return {
    submittingTx: (
      personId: String,
      amount: number,
      description: string,
      date: Date,
    ) => {
      dispatch(submittingTx(personId, amount, description, date));
    },
    fetchPeople: () => {
      dispatch(fetchPeople());
    }
  };
};

const LedgerAreaContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LedgerArea);

export default LedgerAreaContainer;
