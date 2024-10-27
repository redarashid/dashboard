import {
  Box,
  IconButton,
  Paper,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import ChartLine from "../../page/line/ChartLine";
import React from "react";
import { DownloadOutlined } from "@mui/icons-material";
import { Transactions } from "./data";

const Row2 = () => {
  const theme = useTheme();
  return (
    <Stack
      alignItems={"center"}
      direction={"row"}
      flexWrap={"wrap"}
      gap={1}
      mt={1.5}
      flexGrow={"wrap"}>
      <Paper sx={{ maxWidth: 900, flexGrow: 1 }}>
        <Stack
          direction={"row"}
          flexWrap={"wrap"}
          justifyContent={"space-between"}>
          <Box>
            <Typography
              variant="h6"
              color={theme.palette.secondary.main}
              mt={1}
              mb={1}
              fontWeight={"bold"}
              ml={4}>
              Revenue Generated
            </Typography>
            <Typography variant="body2" ml={4}>
              $59,342.32
            </Typography>
          </Box>

          <Box mr={3} mt={2}>
            <IconButton>
              <DownloadOutlined />
            </IconButton>
          </Box>
        </Stack>

        <ChartLine isDashboard={true} />
      </Paper>

      <Box
        sx={{
          minWidth: "250px",
          flexWrap: "wrap",
          maxHeight: 350,
          flexGrow: 1,
          overflow: "auto",
        }}>
        <Paper>
          <Typography
            color={theme.palette.secondary.main}
            fontSize={"18px"}
            fontWeight={"bold"}
            p={1.2}
            variant="h6">
            Recent Transactions
          </Typography>
        </Paper>

        {Transactions.map((item) => {
          return (
            <Paper
              sx={{
                mt: 0.4,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}>
              <Box p={1.2}>
                <Typography variant="body1">{item.txId}</Typography>
                <Typography variant="body2">{item.user}</Typography>
              </Box>
              <Typography variant="body1"> {item.date}</Typography>

              <Typography
                borderRadius={1.4}
                p={1}
                mr={1}
                bgcolor={theme.palette.error.main}
                color={theme.palette.getContrastText(theme.palette.error.main)}
                variant="body2">
                ${item.cost}
              </Typography>
            </Paper>
          );
        })}
      </Box>
    </Stack>
  );
};

export default Row2;
