import React from "react";
import Chart from "./ChartComponent";
import { Box } from "@mui/material";
import Header from "components/Header";

const Bar = () => {
  return (
    <Box>
      <Header
        title={"Bar Chart"}
        subTitle={"The minimum wage in Germany, France and Spain (EUR/month)"}
      />

      <Chart />
    </Box>
  );
};

export default Bar;
