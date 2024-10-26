import { Box, Paper, Stack, Typography, useTheme } from "@mui/material";
import PieChart from "page/pie/PieChart";
import React from "react";

const Row3 = () => {
  const theme = useTheme();
  return (
    <Stack direction={"row"} gap={1.5} flexWrap={"wrap"} mt={1.4}>
      <Paper sx={{ flexGrow: 1, minwidth: "400px", width: "28%" }}>
        <Box>
          <Typography
            color={theme.palette.secondary.main}
            fontWeight={"600"}
            variant="h6"
            sx={{ padding: "30px 30px 0 30px" }}
            fontSize={22}>
            Campaign
          </Typography>
        </Box>

        <PieChart isDashbord={true} />

        <Box>
          <Typography fontSize={22} fontWeight={500} textAlign={"center"}>
            $48,352 revenue generated
          </Typography>
          <Typography textAlign={"center"}>
            Includes extra misc expenditures and costs
          </Typography>
        </Box>
      </Paper>
    </Stack>
  );
};

export default Row3;
