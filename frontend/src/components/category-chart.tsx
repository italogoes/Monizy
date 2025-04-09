"use client"

import { TrendingUp } from "lucide-react"
import { LabelList, Pie, PieChart } from "recharts"

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

const chartData = [
  { browser: "chrome", visitors: 12, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
  { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
  { browser: "other", visitors: 908, fill: "var(--color-other)" },
]

const chartConfig = {
  chrome: {
    label: "Chrome",
    color: "red",
  },
  safari: {
    label: "Safari",
    color: "blue",
  },
  firefox: {
    label: "Firefox",
    color: "green",
  },
  edge: {
    label: "Edge",
    color: "yellow",
  },
  other: {
    label: "Other",
    color: "purple",
  },
} satisfies ChartConfig

export function CategoryChart() {
  return (
    <Card className="w-full flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Gastos por Categoria</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className=""
        >
          <PieChart>
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <Pie data={chartData} dataKey="visitors" label nameKey="browser">
                <LabelList
                dataKey="browser"
                className="fill-background"
                stroke="none"
                fontSize={12}
                formatter={(value: keyof typeof chartConfig) =>
                  chartConfig[value]?.label
                }
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
