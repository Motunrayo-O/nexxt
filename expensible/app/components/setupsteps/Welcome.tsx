import { Box, Typography } from "@mui/material";
import React from "react";
import StepSummary from "./StepSummary";

const Welcome = () => {
  const welcomeText = "Welcome To Expensible, let's get you started!";
  return (
    <div className="">
      <div className="flex my-3 justify-center">
        <Typography variant="h5">{welcomeText}</Typography>
      </div>

      <div className="flex shrink-0 p-6 space-x-40 justify-center h-screen bg-slate-500">
        <StepSummary
          summaryText="1"
          summaryDescription="Review expense categories"
          bgColour="bg-orange-500"
        />
        <StepSummary
          summaryText="2"
          summaryDescription="Upload your first spreadsheet"
          bgColour="bg-lime-500"
        />
        <StepSummary
          summaryText="3"
          summaryDescription="Categorise transactions"
          bgColour="bg-blue-500"
        />

        <StepSummary
          summaryText="4"
          summaryDescription="See your expense insights"
          bgColour="bg-violet-500"
        />
      </div>
    </div>
  );
};

export default Welcome;
