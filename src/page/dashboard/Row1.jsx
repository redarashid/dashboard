import {Stack} from "@mui/material";
import React from "react";
import Card from "./Card";

const Row1 = () => {
  return (
    <Stack direction={"row"} flexWrap={"wrap"} gap={1} justifyContent={{xs: "center", sm: "space-between"}}>

      <Card />
      <Card />
      <Card />
      <Card />
      
    </Stack>
  );
};

export default Row1;
