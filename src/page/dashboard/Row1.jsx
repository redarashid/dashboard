// import { Stack, useTheme } from "@mui/material";
// import React from "react";
// import Card from "./Card";
// import EmailIcon from "@mui/icons-material/Email";
// import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
// import PersonAddIcon from "@mui/icons-material/PersonAdd";
// import TrafficIcon from "@mui/icons-material/Traffic";
// import { data1, data2, data3, data4 } from "./data";

// const Row1 = () => {
//   const theme = useTheme();
//   return (
//     <Stack
//       direction={"row"}
//       flexWrap={"wrap"}
//       gap={1}
//       justifyContent={{ xs: "center", sm: "space-between" }}>
//       <Card
//         icon={<EmailIcon
//           sx={{ fontSize: "23px", color: theme.palette.secondary.main }} />}
//         title={"12,361"}
//         subTitle={"Emails Sent"}
//         increase={"+14%"}
//         data={data1} scheme={"nivo"}      />

//       <Card
//         icon={<PointOfSaleIcon
//           sx={{ fontSize: "23px", color: theme.palette.secondary.main }} />}
//         title={"431,225"}
//         subTitle={"Sales obtained"}
//         increase={"+21%"}
//         data={data2} scheme={"accent"}      />

//       <Card
//         icon={<PersonAddIcon
//           sx={{ fontSize: "23px", color: theme.palette.secondary.main }} />}
//         title={"32,441"}
//         subTitle={"New Clients"}
//         increase={"+5%"}
//         data={data3} scheme={"paired"}      />

//       <Card
//         icon={<TrafficIcon
//           sx={{ fontSize: "23px", color: theme.palette.secondary.main }} />}
//         title={"1,325,134"}
//         subTitle={"TrafficIcon"}
//         increase={"+43%"}
//         data={data4} scheme={"pastel1"}      />
//     </Stack>
//   );
// };

// export default Row1;

















import { Stack, useTheme } from "@mui/material";
import React from "react";
import Card from "./Card";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import { data1, data2, data3, data4 } from "./data";

const Row1 = () => {
  const theme = useTheme();
  return (
    <Stack
      direction={"row"}
      flexWrap={"wrap"}
      gap={1}
      justifyContent={{ xs: "center", sm: "space-between" }}>
      
      <Card
        key="emails"
        icon={<EmailIcon sx={{ fontSize: "23px", color: theme.palette.secondary.main }} />}
        title={"12,361"}
        subTitle={"Emails Sent"}
        increase={"+14%"}
        data={data1}
        scheme={"nivo"}
      />

      <Card
        key="sales"
        icon={<PointOfSaleIcon sx={{ fontSize: "23px", color: theme.palette.secondary.main }} />}
        title={"431,225"}
        subTitle={"Sales obtained"}
        increase={"+21%"}
        data={data2}
        scheme={"accent"}
      />

      <Card
        key="newClients"
        icon={<PersonAddIcon sx={{ fontSize: "23px", color: theme.palette.secondary.main }} />}
        title={"32,441"}
        subTitle={"New Clients"}
        increase={"+5%"}
        data={data3}
        scheme={"paired"}
      />

      <Card
        key="traffic"
        icon={<TrafficIcon sx={{ fontSize: "23px", color: theme.palette.secondary.main }} />}
        title={"1,325,134"}
        subTitle={"Website Traffic"}
        increase={"+43%"}
        data={data4}
        scheme={"pastel1"}
      />
    </Stack>
  );
};

export default Row1;
