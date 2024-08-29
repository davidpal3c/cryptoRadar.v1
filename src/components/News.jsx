import React from 'react'
import { Select, Typography, Row, Avatar, Card, Col } from 'antd';
import moment from 'moment';
 
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';

const { Text, Title } = Typography;
const { Option } = Select;

const demoImage = 'http://coinrevolution.com/wp-content/uploads/2020/06/cryptonews.jpg';


const News = ({ simplified }) => {
  const { data: cryptoNews, isLoading } = useGetCryptoNewsQuery({ newsCategory: 'Cryptocurrency', count: simplified ? 6 : 12})

  console.log(cryptoNews)

  if (isLoading) return 'Loading...';
  if (!cryptoNews?.data) return 'No data available';

  return (
    <Row gutter={[24, 24]}>
      {cryptoNews.data.map((news, i) => (
        <Col xs={24} sm={12} lg={8} key={i}>
          <Card hoverable className="news-card">
            <a href={news.url} target="_blank" rel="noreferrer">
              <div className="news-image-container">
                <Title className="news-title" level={5}>{news.title?.length > 50 ? `${news.title.substring(0, 50)}...` : news.title}</Title>
                <img src={news.thumbnail || demoImage } alt="news" className="news-image"/>
              </div>
              <p>{news.title?.length > 100 ? `${news.title.substring(0, 100)}...` : news.title}</p>
              <div className="provider-container">
                <div>
                  <Avatar src={news.source.favicon || demoImage} alt="news" id="news-provider-img"/>
                  <Text className="provider-name">{news.source.name}</Text>
                </div>
                <Text>{moment(news.date).startOf('ss').fromNow()}</Text>
              </div>
            </a> 
          </Card>
        </Col>
       ))}
    </Row>
  )
}

export default News
