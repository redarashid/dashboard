import React from "react";
import ChartLine from "./ChartLine";
import { Box } from "@mui/material";
import Header from "components/Header";

const Line = () => {
  return (
    <Box>
      <Header title={"Line Chart"} subTitle={"Simple Line Chart"} />
      <ChartLine />
    </Box>
  );
};

export default Line;
