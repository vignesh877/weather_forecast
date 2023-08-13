import React from 'react'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS , ArcElement , CategoryScale , LinearScale, PointElement,Title , Filler , Legend , Tooltip, LineElement } from 'chart.js'

ChartJS.register(
    ArcElement,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
)
const WeatherChart = (props ) => {
    const datas = props.datas
    const week = props.week

       const data = {
            labels:week.map(i=>i),
            datasets:[{
                label:"weather report",
                data: datas.map(data => Number(data.main.temp-273.15).toFixed(1)),
                fill:true,
                borderColor : "blue",
                
            }]
        }
        const option = {
            responsive : true,
            plugin :{
                legend : {position :'top'},
                title :{display : true}
            }
        }

   return(
        <Line data={data} options={option}/>
   )
}

export default WeatherChart