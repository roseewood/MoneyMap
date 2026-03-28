import React, { useEffect, useState } from "react";
import { getTransactions } from "../services/api";
import AddTransaction from "./AddTransaction";
import TransactionList from "./TransactionList";

const Dashboard = () => {
  const [transactions, setTransactions] = useState([]);

  const fetchData = async () => {
    const res = await getTransactions();
    setTransactions(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <AddTransaction refresh={fetchData} />
      <TransactionList
        transactions={transactions}
        refresh={fetchData}
      />
    </div>
  );
};

export default Dashboard;