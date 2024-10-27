import { Paper, Stack, Typography, useTheme } from "@mui/material";
import ChartComponent from "page/bar/ChartComponent";
import Geo from "page/geography/Geo";
import PieChart from "page/pie/PieChart";
import React from "react";

const Row3 = () => {
  const theme = useTheme();
  return (
    <Stack
      direction={"row"}
      gap={1.5}
      flexWrap={"wrap"}
      mt={1.4}
      >

      <Paper sx={{ flexGrow: 1, minwidth: "400px", width: "28%" }}>
        <Typography
          color={theme.palette.secondary.main}
          fontWeight={"600"}
          variant="h6"
          sx={{ padding: "30px 30px 0 30px" }}>
          Campaign
        </Typography>

        <PieChart isDashbord={true} />

        <Typography variant="h6" align={"center"} sx={{ mt: "15px" }}>
          $48,352 revenue generated
        </Typography>
        <Typography variant="body2" px={0.7} pb={3} align={"center"}>
          Includes extra misc expenditures and costs
        </Typography>
      </Paper>

      <Paper sx={{ flexGrow: 1, minwidth: "400px", width: "33%" }}>
        <Typography
          color={theme.palette.secondary.main}
          fontWeight={"600"}
          variant="h6"
          sx={{ padding: "30px 30px 0 30px" }}>
          Sales Quantity
        </Typography>

        <ChartComponent isDashbord={true} />
      </Paper>

      <Paper sx={{ flexGrow: 1, minwidth: "400px", width: "33%" }}>
        <Geo isDashbord={true} />
      </Paper>
    </Stack>
  );
};

export default Row3;
