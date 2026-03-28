import React, { useState } from "react";
import { addTransaction } from "../services/api";

const AddTransaction = ({ refresh }) => {
  const [form, setForm] = useState({
    title: "",
    amount: "",
    type: "expense",
    category: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addTransaction(form);
    refresh();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Title"
        onChange={(e) =>
          setForm({ ...form, title: e.target.value })
        }
      />
      <input
        type="number"
        placeholder="Amount"
        onChange={(e) =>
          setForm({ ...form, amount: e.target.value })
        }
      />
      <select
        onChange={(e) =>
          setForm({ ...form, type: e.target.value })
        }
      >
        <option value="expense">Expense</option>
        <option value="income">Income</option>
      </select>

      <button type="submit">Add</button>
    </form>
  );
};

export default AddTransaction;