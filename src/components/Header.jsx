import { Box, Typography, useTheme } from "@mui/material";
import React from "react";

const Header = ({ title, subTitle, isDashboard = false }) => {
  const theme = useTheme();
  return (
    <Box mb={isDashboard ? 2 : 4}>
      <Typography
        variant="h5"
        sx={{ color: theme.palette.info.light}}
        fontWeight={"bold"}
        fontSize={22}>
        {title}
      </Typography>
      <Typography variant="body1">{subTitle}</Typography>
    </Box>
  );
};

export default Header;
