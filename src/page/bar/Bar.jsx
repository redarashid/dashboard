import React from "react";
import { ResponsiveBar } from "@nivo/bar";









const data = [
  {
    "country": "AD",
    "hot dog": 31,
    "hot dogColor": "hsl(6, 70%, 50%)",
    "burger": 113,
    "burgerColor": "hsl(91, 70%, 50%)",
    "sandwich": 26,
    "sandwichColor": "hsl(32, 70%, 50%)",
    "kebab": 187,
    "kebabColor": "hsl(261, 70%, 50%)",
    "fries": 53,
    "friesColor": "hsl(315, 70%, 50%)",
    "donut": 60,
    "donutColor": "hsl(269, 70%, 50%)"
  },
  {
    "country": "AE",
    "hot dog": 103,
    "hot dogColor": "hsl(226, 70%, 50%)",
    "burger": 61,
    "burgerColor": "hsl(80, 70%, 50%)",
    "sandwich": 56,
    "sandwichColor": "hsl(38, 70%, 50%)",
    "kebab": 13,
    "kebabColor": "hsl(233, 70%, 50%)",
    "fries": 25,
    "friesColor": "hsl(282, 70%, 50%)",
    "donut": 184,
    "donutColor": "hsl(334, 70%, 50%)"
  },
  {
    "country": "AF",
    "hot dog": 55,
    "hot dogColor": "hsl(173, 70%, 50%)",
    "burger": 166,
    "burgerColor": "hsl(5, 70%, 50%)",
    "sandwich": 151,
    "sandwichColor": "hsl(359, 70%, 50%)",
    "kebab": 95,
    "kebabColor": "hsl(326, 70%, 50%)",
    "fries": 187,
    "friesColor": "hsl(95, 70%, 50%)",
    "donut": 93,
    "donutColor": "hsl(5, 70%, 50%)"
  },
  {
    "country": "AG",
    "hot dog": 64,
    "hot dogColor": "hsl(206, 70%, 50%)",
    "burger": 68,
    "burgerColor": "hsl(245, 70%, 50%)",
    "sandwich": 171,
    "sandwichColor": "hsl(161, 70%, 50%)",
    "kebab": 128,
    "kebabColor": "hsl(58, 70%, 50%)",
    "fries": 109,
    "friesColor": "hsl(208, 70%, 50%)",
    "donut": 134,
    "donutColor": "hsl(237, 70%, 50%)"
  },
  {
    "country": "AI",
    "hot dog": 105,
    "hot dogColor": "hsl(314, 70%, 50%)",
    "burger": 129,
    "burgerColor": "hsl(115, 70%, 50%)",
    "sandwich": 171,
    "sandwichColor": "hsl(263, 70%, 50%)",
    "kebab": 62,
    "kebabColor": "hsl(284, 70%, 50%)",
    "fries": 12,
    "friesColor": "hsl(318, 70%, 50%)",
    "donut": 108,
    "donutColor": "hsl(265, 70%, 50%)"
  },
  {
    "country": "AL",
    "hot dog": 28,
    "hot dogColor": "hsl(6, 70%, 50%)",
    "burger": 5,
    "burgerColor": "hsl(156, 70%, 50%)",
    "sandwich": 188,
    "sandwichColor": "hsl(151, 70%, 50%)",
    "kebab": 13,
    "kebabColor": "hsl(338, 70%, 50%)",
    "fries": 170,
    "friesColor": "hsl(282, 70%, 50%)",
    "donut": 50,
    "donutColor": "hsl(182, 70%, 50%)"
  },
  {
    "country": "AM",
    "hot dog": 118,
    "hot dogColor": "hsl(126, 70%, 50%)",
    "burger": 187,
    "burgerColor": "hsl(268, 70%, 50%)",
    "sandwich": 88,
    "sandwichColor": "hsl(318, 70%, 50%)",
    "kebab": 50,
    "kebabColor": "hsl(259, 70%, 50%)",
    "fries": 92,
    "friesColor": "hsl(232, 70%, 50%)",
    "donut": 137,
    "donutColor": "hsl(87, 70%, 50%)"
  }
]

const Bar = () => {
  return (
    <div>
      <ResponsiveBar
        data={data}
        keys={["hot dog", "burger", "sandwich", "kebab", "fries", "donut"]}
        indexBy="country"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        valueScale={{ type: "linear" }}
        indexScale={{ type: "band", round: true }}
        colors={{ scheme: "accent" }}
        defs={[
          {
            id: "dots",
            type: "patternDots",
            background: "inherit",
            color: "#38bcb2",
            size: 4,
            padding: 1,
            stagger: true,
          },
          {
            id: "lines",
            type: "patternLines",
            background: "inherit",
            color: "#eed312",
            rotation: -45,
            lineWidth: 6,
            spacing: 10,
          },
        ]}
        fill={[
          {
            match: {
              id: "fries",
            },
            id: "dots",
          },
          {
            match: {
              id: "sandwich",
            },
            id: "lines",
          },
        ]}
        borderColor={{
          from: "color",
          modifiers: [["darker", "1.6"]],
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "country",
          legendPosition: "middle",
          legendOffset: 32,
          truncateTickAt: 0,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "food",
          legendPosition: "middle",
          legendOffset: -40,
          truncateTickAt: 0,
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{
          from: "color",
          modifiers: [["darker", 1.6]],
        }}
        legends={[
          {
            dataFrom: "keys",
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 120,
            translateY: 0,
            itemsSpacing: 2,
            itemWidth: 100,
            itemHeight: 20,
            itemDirection: "left-to-right",
            itemOpacity: 0.85,
            symbolSize: 20,
            effects: [
              {
                on: "hover",
                style: {
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
        role="application"
        ariaLabel="Nivo bar chart demo"
        barAriaLabel={(e) =>
          e.id + ": " + e.formattedValue + " in country: " + e.indexValue
        }
      />
    </div>
  );
};

export default Bar;
