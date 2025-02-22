"use client"

import * as React from "react"
import { TrendingUp } from "lucide-react"
import { Label, Pie, PieChart } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

// Updated chartData with Tailwind colors
const chartData = [
  { browser: "chrome", visitors: 275, fill: "#3b82f6" }, // Tailwind blue-500
  { browser: "safari", visitors: 200, fill: "#10b981" }, // Tailwind emerald-500
  { browser: "firefox", visitors: 287, fill: "#ef4444" }, // Tailwind red-500
  { browser: "edge", visitors: 173, fill: "#f59e0b" }, // Tailwind amber-500
  { browser: "other", visitors: 190, fill: "#8b5cf6" }, // Tailwind violet-500
]

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "0-15 years",
    color: "hsl(var(--chart-1))",
  },
  safari: {
    label: "15-30 years",
    color: "hsl(var(--chart-2))",
  },
  firefox: {
    label: "31-45 years",
    color: "hsl(var(--chart-3))",
  },
  edge: {
    label: "45-60 years",
    color: "hsl(var(--chart-4))",
  },
  other: {
    label: "60+ years old",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig

export function PieChartChart() {
  const totalVisitors = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.visitors, 0)
  }, [])

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>monthly visitors - By age</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="visitors"
              nameKey="browser"
              innerRadius={60}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-current text-3xl font-bold text-[#228C6A]" // Tailwind fill and text color for the main text
                        >
                          {totalVisitors.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-current text-sm text-gray-600" // Tailwind fill and text color for the secondary text
                        >
                          Visitors
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Patient satisfaction up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter>
    </Card>
  )
}