import React from "react";
import { deleteTransaction } from "../services/api";

const TransactionList = ({ transactions, refresh }) => {
  const handleDelete = async (id) => {
    await deleteTransaction(id);
    refresh();
  };

  return (
    <ul>
      {transactions.map((t) => (
        <li key={t._id}>
          {t.title} - ₹{t.amount}
          <button onClick={() => handleDelete(t._id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TransactionList;