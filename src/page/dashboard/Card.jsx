import React from "react";
import { Paper, Stack, Typography } from "@mui/material";

const Card = () => {
  return (
    <Paper
      sx={{
        minWidth: "333px",
        p: 1.5,
        display: "flex",
        justifyContent: "space-between",
      }}>
      <Stack>
        icon
        <Typography sx={{ fontSize: "12px", pt: "5px" }}>12,361</Typography>
        <Typography sx={{ fontSize: "13px", pt: "5px" }}>
          Emails Sent
        </Typography>
      </Stack>

      <Stack>
        icon
        <Typography>+14%</Typography>
      </Stack>
    </Paper>
  );
};

export default Card;
