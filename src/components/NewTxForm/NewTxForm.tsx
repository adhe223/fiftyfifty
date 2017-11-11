import React from 'react';

import Person from 'data/models/Person';

export interface NewTxFormProps {
  people: Person[];
  submittingTx: (
    person: Person,
    amount: number,
    description: string,
    date: Date,
  ) => void;
}

const NewTxForm: React.StatelessComponent<NewTxFormProps> = (props) => {
  const onAddClick = () => {
    const personIndex = (document.getElementsByTagName('person-select')[0] as HTMLSelectElement).selectedIndex;
    const amount = (document.getElementsByTagName('amount')[0] as HTMLInputElement).value;
    const description = (document.getElementsByTagName('description')[0] as HTMLInputElement).value;
    const date = new Date();

    props.submittingTx(props.people[personIndex], parseInt(amount, 10), description, date);
  };

  const selectBox = (
    <select className="new-tx-form--select" name="person-select">
      {props.people.map((person, index) => (
        <option key={index}>{person.name}</option>
      ))}
    </select>
  );

  const amtInput = (
    <input type="text" name="amount" className="new-tx-form--input" />
  );

  const descInput = (
    <input type="text" name="description" className="new-tx-form--input" />
  );

  const addButton = (
    <button className="new-tx-form--add" onClick={onAddClick}> + </button>
  );

  return (
    <div className="new-transaction-form">
      <span>
        {selectBox} paid {amtInput} for {descInput}
        <br/>
        {addButton}
      </span>
    </div>
  );
};
export default NewTxForm;
