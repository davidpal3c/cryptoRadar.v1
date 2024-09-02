import React from 'react';
import { Line } from 'react-chartjs-2'; // Import the Line component
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Col, Row, Typography } from 'antd';

const { Title: AntTitle } = Typography;

// Register the required components for Chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const LineChart = ({ coinHistory, currentPrice, coinName }) => {
    const coinPrice = [];
    const coinTimestamp = [];

    // for (let i = 0; i < coinHistory?.data?.history?.length; i++) {
    //     coinPrice.push(coinHistory.data.history[i].price);
    //     coinTimestamp.push(new Date(coinHistory.data.history[i].timestamp).toLocaleDateString());
    // }

    for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
        coinPrice.push(coinHistory?.data?.history[i].price);
    }

    for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
        coinTimestamp.push(new Date(coinHistory?.data?.history[i].timestamp).toLocaleDateString());
    }

    // Data object for ChartJS
    const data = {
        labels: coinTimestamp,
        datasets: [
            {
                label: "Price in USD",
                data: coinPrice,
                fill: false,
                backgroundColor: "#0071bd",
                borderColor: "#0071bd",
                borderWidth: 2, // Set border width for the line
                pointRadius: 3, // Show points on the line
                tension: 0.4,
            },
        ],
    };

    // Updated options object for ChartJS v4
    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: true,
            },
            title: {
                display: true,
                text: `${coinName} Price Chart`,
            },
        },
        scales: {
            y: {
                beginAtZero: false,
            },
            x: {
                type: 'category',
                labels: coinTimestamp,
            },
        }
    };

    // console.log(coinHistory);
    // console.log(data);

    return (
        <>
            <Row className="chart-header">
                <AntTitle level={2} className="chart-title">{coinName} Price Chart</AntTitle>
                <Col className="price-container">
                    <AntTitle level={5} className="price-change">{coinHistory?.data?.change}%</AntTitle>
                    <AntTitle level={5} className="current-price">Current {coinName} Price: $ {currentPrice}</AntTitle>
                </Col>
            </Row>
            <Line data={data} options={options} /> 
        </>
    );
}

export default LineChart;
