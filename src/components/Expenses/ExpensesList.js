import React from "react";
import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

const ExpensesList = props => {
  if (props.items.length === 0) {
    return (<h2 className="no-expenses-text">No expenses found!</h2>);
  }
  return (
    <ul className="expenses-list">
      {props.items.map((item) => (
        <ExpenseItem
          title={item.title}
          amount={item.amount}
          date={item.date}
          key={item.id}
        />
      ))}
    </ul>
    );
};

export default ExpensesList;