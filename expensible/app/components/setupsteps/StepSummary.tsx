import { Box, Paper, Typography } from "@mui/material";
import React from "react";

interface Props {
  summaryText: string;
  summaryDescription: string;
  bgColour: string;
}

const StepSummary = ({ summaryText, summaryDescription, bgColour }: Props) => {
  const boxClasses = "w-32 " + bgColour;
  return (
    <Box
      height={130}
      width={130}
      my={4}
      alignContent="center"
    >
      <Paper elevation={3} className={boxClasses}>
        <Typography
          variant="subtitle1"
          className="flex items-center justify-center h-32"
        >
          {summaryText}
        </Typography>
      </Paper>
      <Typography
        variant="subtitle1"
        className="max-w-34 my-3 text-wrap text-center"
      >
        {summaryDescription}
      </Typography>
    </Box>
  );
};

export default StepSummary;
