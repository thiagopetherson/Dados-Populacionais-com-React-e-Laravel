import React, { Component } from 'react'; // Importando o React
import { useEffect, useState } from 'react' // Importando o ciclo de vida e os estados do React
import Chart from "react-apexcharts";

export default function Charts(props){
    // console.log(props)

    const [dados, setDados] = useState({
        options: {
          chart: {
            id: "basic-bar"
          },
          dataLabels: {
            offsetY: 0,
            style: {
              fontSize: "16px",
              fontFamily: "Helvetica, Arial, sans-serif",
              fontWeight: "600"
            }
          },
          xaxis: {
            //categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
            categories: props.nomes,
            labels: {
              style: {
                  colors: "#fff",
                  fontSize: '18px',
                  fontFamily: 'Helvetica, Arial, sans-serif',
                  fontWeight: 500,
                  cssClass: 'apexcharts-xaxis-label',
              }
            }
          },
          yaxis: {
            show: false
          }
        },
        series: [
          {
            name: "População",
            // data: [30, 40, 45, 50, 49, 60, 70, 91]
            data: props.populacoes
          }
        ]
    })

    return(
        <div className="grafics">
          <div className="row">
            <div className="mixed-chart">
              <Chart
                options={dados.options}
                series={dados.series}
                type="bar"
                width="1000"
              />
            </div>
          </div>
        </div>
    );
}