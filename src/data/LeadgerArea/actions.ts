import Person from 'data/models/Person';

const SUBMITTING_TX = 'SUBMITTING_TX';
const submittingTx = (
  person: Person,
  amount: number,
  description: string,
  date: Date,
) => {
  return {
    type: SUBMITTING_TX,
    payload: {
      person,
      amount,
      description,
      date,
    },
  };
};

export {
  submittingTx,
  SUBMITTING_TX,
};
