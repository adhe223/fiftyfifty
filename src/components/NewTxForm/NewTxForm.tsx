import React from 'react';
import Person from '../../data/models/Person';
import './NewTxForm.css';

export interface NewTxFormProps {
  people: Person[];
  submittingTx: (personId: String, amount: number, description: string, date: Date) => void;
}

const clearForm = () => {
  (document.getElementsByClassName(
    'new-tx-form--select',
  )[0] as HTMLSelectElement).selectedIndex = 0;
  (document.getElementsByClassName('new-tx-form--amount-input')[0] as HTMLInputElement).value = '';
  (document.getElementsByClassName('new-tx-form--desc-input')[0] as HTMLInputElement).value = '';
};

const NewTxForm: React.StatelessComponent<NewTxFormProps> = props => {
  const onAddClick = () => {
    const personIndex = (document.getElementsByClassName(
      'new-tx-form--select',
    )[0] as HTMLSelectElement).selectedIndex;
    const amount = (document.getElementsByClassName(
      'new-tx-form--amount-input',
    )[0] as HTMLInputElement).value;
    const description = (document.getElementsByClassName(
      'new-tx-form--desc-input',
    )[0] as HTMLInputElement).value;
    const date = new Date();

    props.submittingTx(props.people[personIndex].id, parseInt(amount, 10), description, date);
    clearForm();
  };

  const selectBox = (
    <select className="new-tx-form--select" name="person-select">
      {props.people.map((person, index) => <option key={index}>{person.name}</option>)}
    </select>
  );

  const amtInput = <input type="text" name="amount" className="new-tx-form--amount-input" />;

  const descInput = <input type="text" name="description" className="new-tx-form--desc-input" />;

  const addButton = (
    <button className="new-tx-form--add" onClick={onAddClick}>
      {' '}
      +{' '}
    </button>
  );

  return (
    <div className="new-transaction-form">
      <span>
        {selectBox} paid {amtInput} for {descInput} &nbsp; {addButton}
      </span>
    </div>
  );
};
export default NewTxForm;
