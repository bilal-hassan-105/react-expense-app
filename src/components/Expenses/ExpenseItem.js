import React from "react";

import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

// export default function ExpenseItem({title, amount, date}) {
export default function ExpenseItem(props) {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <Card className="expense-item__price">${props.amount}</Card>
      </div>
    </Card>
  );
}
