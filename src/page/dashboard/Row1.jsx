import {Stack} from "@mui/material";
import React from "react";
import Card from "./Card";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";

const Row1 = () => {
  return (
    <Stack direction={"row"} flexWrap={"wrap"} gap={1} justifyContent={{xs: "center", sm: "space-between"}}>

      <Card icon={EmailIcon} title={"12,361"} subTitle={"Emails Sent"} chart={undefined} increase={"+14%"} />
      <Card icon={PointOfSaleIcon} title={"431,225"} subTitle={"Sales obtained"} chart={undefined} increase={"+21%"} />
      <Card icon={PersonAddIcon} title={"32,441"} subTitle={"New Clients"} chart={undefined} increase={"+5%"} />
      <Card icon={TrafficIcon} title={"1,325,134"} subTitle={"TrafficIcon"} chart={undefined} increase={"+43%"} />

    </Stack>
  );
};

export default Row1;
