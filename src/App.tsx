import { useState } from "react";
import ExpenseList from "./components/ExpenseList";
import Form from "./components/Form";
import ExpenseFilter from "./components/ExpenseFilter";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");

  const [expenses, setExpenses] = useState([
    { id: 1, description: "test", amount: 10, category: "Utilities" },
    { id: 2, description: "test1", amount: 10, category: "Utilities" },
    { id: 3, description: "test2", amount: 10, category: "Utilities" },
    { id: 4, description: "test3", amount: 10, category: "Utilities" },
  ]);

  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  return (
    <div>
      <div className="mb-3">
        <Form />
      </div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </div>
  );
}

export default App;
