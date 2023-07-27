import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [showForm, setShowForm] = useState(false);

  // const [userInput, setUserInput] = useState({
  //   title: '',
  //   amount: '',
  //   date: '',
  // });

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   title: event.target.value
    // });

    // setUserInput((prevState) => {
    //   return { ...prevState, title: event.target.value }
    // });
  };

  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   amount: event.target.value
    // });
  };

  const dateChangeHandler = (event) => {
    setDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   date: event.target.value
    // });
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: title,
      amount: +amount,
      date: new Date(date),
    };
    props.expenseDataHandler(expenseData);
    setTitle("");
    setAmount("");
    setDate("");
  };

  const showFormHandler = () => setShowForm(true);
  const HideFormHandler = () => setShowForm(false);
    

  const newExpenseForm = (
    <form onSubmit={formSubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={title} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={amount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" value={date} onChange={dateChangeHandler} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={HideFormHandler}>Cancel</button>
        <button>Add new expense</button>
      </div>
    </form>
  );

  const newExpenseNoForm = (
    <div className="new-expense-no__controls">
      <button onClick={showFormHandler}>Add new expense</button>
    </div>
  );

  return showForm ? newExpenseForm : newExpenseNoForm
};

export default ExpenseForm;
