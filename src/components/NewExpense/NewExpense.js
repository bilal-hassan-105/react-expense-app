import ExpenseForm from "./ExpenseForm";
import './NewExpense.css'

const NewExpense = (props) => {
  const getExpenseData = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }

    props.expenseDataHandler(expenseData);;
  }
  return (
    <div className="new-expense">
      <ExpenseForm expenseDataHandler={getExpenseData} />
    </div>
  );
}

export default NewExpense;