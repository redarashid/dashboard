import React from "react";
import { Box, useTheme } from "@mui/material";
import { ResponsiveLine } from "@nivo/line";

const data = [
  {
    id: "japan",
    color: "hsl(154, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 72,
      },
      {
        x: "helicopter",
        y: 95,
      },
      {
        x: "boat",
        y: 51,
      },
      {
        x: "train",
        y: 288,
      },
      {
        x: "subway",
        y: 209,
      },
      {
        x: "bus",
        y: 190,
      },
      {
        x: "car",
        y: 242,
      },
      {
        x: "moto",
        y: 178,
      },
      {
        x: "bicycle",
        y: 253,
      },
      {
        x: "horse",
        y: 260,
      },
      {
        x: "skateboard",
        y: 114,
      },
      {
        x: "others",
        y: 5,
      },
    ],
  },
  {
    id: "france",
    color: "hsl(69, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 160,
      },
      {
        x: "helicopter",
        y: 26,
      },
      {
        x: "boat",
        y: 49,
      },
      {
        x: "train",
        y: 139,
      },
      {
        x: "subway",
        y: 163,
      },
      {
        x: "bus",
        y: 163,
      },
      {
        x: "car",
        y: 37,
      },
      {
        x: "moto",
        y: 23,
      },
      {
        x: "bicycle",
        y: 80,
      },
      {
        x: "horse",
        y: 80,
      },
      {
        x: "skateboard",
        y: 103,
      },
      {
        x: "others",
        y: 248,
      },
    ],
  },
  {
    id: "us",
    color: "hsl(146, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 206,
      },
      {
        x: "helicopter",
        y: 86,
      },
      {
        x: "boat",
        y: 122,
      },
      {
        x: "train",
        y: 104,
      },
      {
        x: "subway",
        y: 148,
      },
      {
        x: "bus",
        y: 24,
      },
      {
        x: "car",
        y: 113,
      },
      {
        x: "moto",
        y: 261,
      },
      {
        x: "bicycle",
        y: 79,
      },
      {
        x: "horse",
        y: 188,
      },
      {
        x: "skateboard",
        y: 226,
      },
      {
        x: "others",
        y: 226,
      },
    ],
  },
  {
    id: "germany",
    color: "hsl(121, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 105,
      },
      {
        x: "helicopter",
        y: 122,
      },
      {
        x: "boat",
        y: 17,
      },
      {
        x: "train",
        y: 147,
      },
      {
        x: "subway",
        y: 168,
      },
      {
        x: "bus",
        y: 271,
      },
      {
        x: "car",
        y: 28,
      },
      {
        x: "moto",
        y: 41,
      },
      {
        x: "bicycle",
        y: 35,
      },
      {
        x: "horse",
        y: 51,
      },
      {
        x: "skateboard",
        y: 229,
      },
      {
        x: "others",
        y: 58,
      },
    ],
  },
  {
    id: "norway",
    color: "hsl(322, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 298,
      },
      {
        x: "helicopter",
        y: 258,
      },
      {
        x: "boat",
        y: 162,
      },
      {
        x: "train",
        y: 266,
      },
      {
        x: "subway",
        y: 267,
      },
      {
        x: "bus",
        y: 12,
      },
      {
        x: "car",
        y: 54,
      },
      {
        x: "moto",
        y: 279,
      },
      {
        x: "bicycle",
        y: 253,
      },
      {
        x: "horse",
        y: 27,
      },
      {
        x: "skateboard",
        y: 270,
      },
      {
        x: "others",
        y: 33,
      },
    ],
  },
];

const ChartLine = () => {
  const theme = useTheme();

  return (
    <Box sx={{ height: "75vh" }}>
      <ResponsiveLine
        data={data}
        theme={{
          text: {
            fontSize: 11,
            fill: "yello",
            outlineWidth: 0,
            outlineColor: "transparent",
          },
          axis: {
            domain: {
              line: {
                stroke: "#777777",
                strokeWidth: 1,
              },
            },
            legend: {
              text: {
                fontSize: 12,
                fill: theme.palette.text.primary,
                outlineWidth: 0,
                outlineColor: "transparent",
              },
            },
            ticks: {
              line: {
                stroke: "#777777",
                strokeWidth: 1,
              },
              text: {
                fontSize: 11,
                fill: theme.palette.text.primary,
                outlineWidth: 0,
                outlineColor: "transparent",
              },
            },
          },
          grid: {
            line: {
              stroke: "#dddddd",
              strokeWidth: 1,
            },
          },
          legends: {
            title: {
              text: {
                fontSize: 11,
                fill: theme.palette.text.primary,
                outlineWidth: 0,
                outlineColor: "transparent",
              },
            },
            text: {
              fontSize: 11,
              fill: theme.palette.text.primary,
              outlineWidth: 0,
              outlineColor: "transparent",
            },
            ticks: {
              line: {},
              text: {
                fontSize: 10,
                fill: theme.palette.text.primary,
                outlineWidth: 0,
                outlineColor: "transparent",
              },
            },
          },
          annotations: {
            text: {
              fontSize: 13,
              fill: theme.palette.text.primary,
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
            link: {
              stroke: "#000000",
              strokeWidth: 1,
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
            outline: {
              stroke: "#000000",
              strokeWidth: 2,
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
            symbol: {
              fill: "#000000",
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
          },
          tooltip: {
            wrapper: {},
            container: {
              background: theme.palette.background.default,
              color: theme.palette.text.primary,
              fontSize: 12,
            },
            basic: {},
            chip: {},
            table: {},
            tableCell: {},
            tableCellValue: {},
          },
        }}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: true,
          reverse: false,
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Transportation",
          legendOffset: 45,
          legendPosition: "middle",
          truncateTickAt: 0,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Count",
          legendOffset: -50,
          legendPosition: "middle",
          truncateTickAt: 0,
        }}
        pointSize={10}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        pointLabel="data.yFormatted"
        pointLabelYOffset={-12}
        enableTouchCrosshair={true}
        useMesh={true}
        legends={[
          {
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: "left-to-right",
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: "circle",
            symbolBorderColor: "rgba(0, 0, 0, .5)",
            effects: [
              {
                on: "hover",
                style: {
                  itemBackground: "rgba(0, 0, 0, .03)",
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    </Box>
  );
};

export default ChartLine;
