import React from "react";
import { Paper, Stack, Typography } from "@mui/material";

const Card = ({icon, title, subTitle, chart, increase}) => {
  return (
    <Paper
      sx={{
        minWidth: "333px",
        p: 1.5,
        display: "flex",
        justifyContent: "space-between",
      }}>
      <Stack>
        {icon}
        <Typography sx={{ fontSize: "12px", pt: "5px" }}>{title}</Typography>
        <Typography sx={{ fontSize: "13px", pt: "5px" }}>{subTitle}</Typography>
      </Stack>

      <Stack>
        {chart}
        <Typography>{increase}</Typography>
      </Stack>
    </Paper>
  );
};

export default Card;
