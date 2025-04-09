import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

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
  { month: "Janeiro", receitas: 3000, despesas: 2000 },
  { month: "Fevereiro", receitas: 3000, despesas: 1200 },
  { month: "Março", receitas: 3500, despesas: 2120 },
  { month: "Abril", receitas: 3073, despesas: 2190 },
  { month: "Maio", receitas: 3209, despesas: 2130 },
  { month: "Junho", receitas: 3214, despesas: 1140 },
]

const chartConfig = {
  desktop: {
    label: "Receitas",
    color: "oklch(52.7% 0.154 150.069)",
  },
  mobile: {
    label: "Despesas",
    color: "oklch(50.5% 0.213 27.518)",
  },
} satisfies ChartConfig

export function CompareChart() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Balanço Mensal</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
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
            <Bar dataKey="receitas" fill="var(--color-desktop)" radius={4} />
            <Bar dataKey="despesas" fill="var(--color-mobile)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
