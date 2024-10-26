import { Box, Paper, Stack, Typography, useTheme } from "@mui/material";
import ChartLine from "../../page/line/ChartLine";
import React from "react";

const Row2 = () => {
  const theme = useTheme();
  return (
    <Stack direction={"row"} flexWrap={"wrap"} gap={1} flexGrow={"wrap"}>
      <Paper sx={{ border: "2px solid red", maxWidth: 900, flexGrow: 1 }}>
        <ChartLine isDashboard={true} />
      </Paper>

      <Box>
        <Paper sx={{ border: "1px solid red" }}>
          <Typography
            color={theme.palette.secondary.main}
            fontSize={"18px"}
            fontWeight={"bold"}
            p={1.2}
            variant="h6">
            Revenue Generated
          </Typography>
          <Typography>$59,342.32</Typography>
        </Paper>
      </Box>
    </Stack>
  );
};

export default Row2;
