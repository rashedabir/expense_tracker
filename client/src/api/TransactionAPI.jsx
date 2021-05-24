import axios from "axios";
import { useEffect, useState } from "react";

function TransactionAPI(token) {
  const [transaction, setTransaction] = useState([]);
  const [callback, setCallback] = useState(false);

  useEffect(() => {
    const getTransaction = async () => {
      const res = await axios.get("/api/transaction", {
        headers: { Authorization: token },
      });
      setTransaction(res.data.transactions);
    };
    getTransaction();
  }, [callback, token]);

  return {
    transaction: [transaction, setTransaction],
    callback: [callback, setCallback],
  };
}

export default TransactionAPI;
