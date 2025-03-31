import { useEffect, useRef } from "react"
import * as echarts from 'echarts'

const MonthlyExpenses = () => {
    const chartRef = useRef(null)
    
    useEffect(() => {
        var myChart = echarts.init(chartRef.current);

        const option = {
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    data: [820, 932, 901, 934, 1290, 1330, 820, 932, 901, 934, 1290, 1330],
                    type: 'line',
                    areaStyle: {},
                    smooth: true
                }
            ]
        };

        myChart.setOption(option)
    }, [])

    return (
        <div>
            <p>Despesas Mensal</p>
            <div ref={chartRef} style={{ width: '100%', height: '500px'}}></div>
        </div>
    )
}

export default MonthlyExpenses