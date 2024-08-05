import React from "react";
import Card from "@mui/material/Card";

const InputTransactions = () => {
  return (
    <Card
      className="min-h-[300px]"
      sx={{ padding: "16px", display: "flex", alignItems: "center" }}
    >
      <span className="text-center">Input Transactions</span>
    </Card>
  );
};

export default InputTransactions;
