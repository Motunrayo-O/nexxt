import { Box, Divider, Stack, Typography } from "@mui/material";
import { PieChart } from "@mui/x-charts";
import { SparkLineChart } from "@mui/x-charts/SparkLineChart";

import React from "react";

const ExpenseAnalysisResults = () => {
  return (
    <div>
      <h1>Here are your results!</h1>
      <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={2}
      >
        <SparkLineChart
          plotType="bar"
          data={[1, 4, 2, 5, 7, 2, 4, 6]}
          height={400}
          width={450}
        />

        <PieChart
          series={[
            {
              data: [
                { value: 10, color: "#4e79a7" },
                { value: 20, color: "#f28e2c" },
                { value: 15, color: "#e15759" },
                { value: 25, color: "#76b7b2" },
                { value: 15, color: "#59a14f" },
                { value: 15, color: "#edc949" },
              ],
              innerRadius: 30,
              outerRadius: 100,
              paddingAngle: 5,
              cornerRadius: 5,
              startAngle: -90,
              endAngle: 180,
              cx: 150,
              cy: 150,
            },
          ]}
          width={400}
          height={500}
        />
      </Stack>
    </div>
  );
};

export default ExpenseAnalysisResults;
