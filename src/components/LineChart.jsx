import React from 'react';
import { Line } from 'react-chartjs-2';
import {Chart as ChartJS} from 'chart.js/auto'
import { Col, Row, Typography } from 'antd';

const { Title } = Typography;

const LineChart = ({coinHistory, currentPrice, coinName}) => {
    
    const coinPrice = [];
    const coinTimestamp = [];

    for(let i =coinHistory?.data?.history?.length-1; i>=0; i--){
        coinPrice.push(coinHistory?.data?.history[i].price);
        coinTimestamp.push(new Date(coinHistory?.data?.history[i].timestamp*1000).toLocaleDateString());
    };

    console.log("Coin price", coinPrice);
    console.log("Coin timestamp", coinTimestamp);
    console.log("Coin history / in chart", coinHistory);


    const data = {
        labels: coinTimestamp,
        datasets: [
          {
            label: `Price of ${coinName} in USD`,
            data: coinPrice,
            fill: false,
            backgroundColor: '#ff976b',
            borderColor: '#384E77',
          },
        ],
      };

    const options = {
        scales: {
          y: {
            ticks: {
              beginAtZero: true,
            },
          },
        },
      };

  return (
    <>
      <Row className='chart-header'>
        <Title className='chart-tile' level={2}>
            {coinName} Price Chart
        </Title>
        <Col className='price-container'>
            <Title level={5} className='price-change'>
                {coinHistory?.data?.change}%
            </Title>
            <Title level={5} className='current-price'>
                Current {coinName} Price: ${currentPrice}
            </Title>
        </Col>
      </Row>
      <Line data={data} options={options} />
    </>
  )
}

export default LineChart