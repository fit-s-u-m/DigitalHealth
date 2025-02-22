"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
const chartData = [
  { month: "January", Men: 186, Women: 80 },
  { month: "February", Men: 305, Women: 200 },
  { month: "March", Men: 237, Women: 120 },
  { month: "April", Men: 73, Women: 190 },
  { month: "May", Men: 209, Women: 130 },
  { month: "June", Men: 214, Women: 140 },
];

const chartConfig = {
  Men: {
    label: "Men",
    color: "hsl(var(--chart-1))",
  },
  Women: {
    label: "Women",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export function Chart() {
  return (
    <div className="">
      <Card className="">
        <CardHeader>
          <CardTitle>Monthly Visitors</CardTitle>
          <CardDescription>January - June 2024</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig}>
            <BarChart className="" accessibilityLayer data={chartData}>
              <CartesianGrid className="color-red-400" vertical={false} />
              <XAxis
                dataKey="month"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent indicator="dashed" />}
              />
              <Bar dataKey="Men" fill="#2caa83" radius={4} />
              <Bar dataKey="Women" fill="#2caa83" radius={4} />
            </BarChart>
          </ChartContainer>
        </CardContent>
        <CardFooter className="flex-col items-start gap-2 text-sm">
          <div className="flex gap-2 font-medium leading-none">
            patient satisfaction up by 5.2% this month{" "}
            <TrendingUp className="h-4 w-4" />
          </div>
          <div className="leading-none text-muted-foreground">
            Showing total visitors for the last 6 months
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
