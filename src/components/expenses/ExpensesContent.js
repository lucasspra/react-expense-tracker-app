import ExpenseItem from "./ExpenseItem";
import "./ExpensesContent.css";

export default function ExpensesContent(props) {
  if (props.items.length === 0) {
    return <h2 className="expenses-content__fallback">Found no expenses</h2>;
  }

  return (
    <ul className="expenses-content">
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
}
