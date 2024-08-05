"use client";
import React from "react";
import Button from "@mui/material/Button";
import useSetupStore from "./store";
import SelectCategories from "../components/setupsteps/SelectCategories";
import InputTransactions from "../components/setupsteps/InputTransactions";
import CreateRules from "../components/setupsteps/CreateRules";
import ExpenseAnalysisResults from "../components/ExpenseAnalysisResults";
import { Box, Step, StepLabel, Stepper } from "@mui/material";
import Welcome from "../components/setupsteps/Welcome";

const SetupSteps = () => {
  const { currentStep, nextStep, previousStep, userAnswers } = useSetupStore();
  const steps = [
    "Welcome",
    "Select Categories",
    "Input Transactions",
    "Create Rules",
  ];

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return <Welcome />;
      case 1:
        return <SelectCategories />;
      case 2:
        return <InputTransactions />;
      case 3:
        return <CreateRules />;
      default:
        return <ExpenseAnalysisResults />;
    }
  };

  const showCurrentStep = () => {
    console.log("currentStep: " + currentStep);
  };

  const handleNext = () => {
    // TODO: Handle form validation and data collection in step component
    // Update userAnswers based on collected data

    nextStep();
  };

  const handleBack = () => {
    previousStep();
  };

  return (
    <Box sx={{ m: 2 }} className="">
      {currentStep > 0 && (
        <Stepper activeStep={currentStep} className="mb-20">
          {steps.map((label, index) => {
            const stepProps: { completed?: boolean } = {};
            const labelProps: {
              optional?: React.ReactNode;
            } = {};
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
      )}

      {renderStep()}
      <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
        {currentStep > 0 && currentStep < steps.length && (
          <Button sx={{ mr: 1 }} variant="contained" onClick={handleBack}>
            Back
          </Button>
        )}
        <Box sx={{ flex: "1 1 auto" }} />
        {currentStep < 4 && (
          <Button variant="contained" onClick={handleNext}>
            {currentStep === steps.length - 1 ? "Finish" : "Next"}
          </Button>
        )}
      </Box>
      {/* <Button onClick={showCurrentStep}>Show CurrentStep</Button> */}
    </Box>
  );
};

export default SetupSteps;
