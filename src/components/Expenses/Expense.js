import React, { useState } from "react";

import Card from "../UI/Card";
import "./Expense.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpenseChart from "./ExpenseChart";

export default function Expense(props) {
  const [selectedFilter, setSelectedFilter] = useState("2023");

  const filterChangeHandler = (selectedYear) => {
    setSelectedFilter(selectedYear);
    console.log(selectedFilter);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedFilter;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={selectedFilter}
        onChangeFilter={filterChangeHandler}
      />
      {/* { filteredExpenses.length === 0 && <p>No expenses found!</p>}
        { filteredExpenses.length > 0 &&
        filteredExpenses.map((item) => (
          <ExpenseItem
            title={item.title}
            amount={item.amount}
            date={item.date}
            key={item.id}
          />
        ))
      } */}
      <ExpenseChart expenses={filteredExpenses}/>
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
}
