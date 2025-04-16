
import { LabelList, Pie, PieChart } from "recharts"

import {
  Card,
  CardContent,
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
  { browser: "other", visitors: 408, fill: "var(--color-other)" },
]

const chartConfig = {
  chrome: {
    label: "Chrome",
    color: "oklch(70.4% 0.191 22.216)",
  },
  safari: {
    label: "Safari",
    color: "oklch(72.3% 0.219 149.579)",
  },
  firefox: {
    label: "Firefox",
    color: "oklch(62.3% 0.214 259.815)",
  },
  edge: {
    label: "Edge",
    color: "oklch(62.7% 0.265 303.9)",
  },
  other: {
    label: "Other",
    color: "oklch(76.9% 0.188 70.08)",
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
