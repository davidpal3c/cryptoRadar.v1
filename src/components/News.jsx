// 


import React, { useState } from 'react'
import { Select, Typography, Row, Avatar, Card, Col } from 'antd';
import moment from 'moment';
 
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';
import { useGetCryptosQuery } from '../services/cryptoApi';
import Loader from './Loader';  

const { Text, Title } = Typography;
const { Option } = Select;

const demoImage = 'http://coinrevolution.com/wp-content/uploads/2020/06/cryptonews.jpg';


const News = ({ simplified }) => {
  const [newsCategory, setNewsCategory] = useState('Cryptocurrency')
  const { data: cryptoNews } = useGetCryptoNewsQuery({ newsCategory, count: simplified ? 6 : 12})
  const { data } = useGetCryptosQuery(100);

  // console.log(cryptoNews)
 
  // if (isLoading) return 'Loading...';
  if (!cryptoNews?.data) return <Loader />;

  const newsToDisplay = simplified ? cryptoNews.data.slice(0, 6) : cryptoNews.data;

  
  return (
    <Row gutter={[24, 24]}>
      {!simplified && (
        <Col span={24}>
          <Select
            showSearch
            className="Select a Crypto"
            optionFilterProp="children"
            onChange={(value) => setNewsCategory(value)}
            filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
            style={{ width: '30%'}}
          >
            <Option value="Cryptocurrency">Cryptocurrency</Option>
            {data?.data?.coins.map((coin) => <Option value={coin.name}>{coin.name}</Option>)}
            </Select>
        </Col>
      )}
      {newsToDisplay.map((news, i) => (
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
                <Text >{moment(news.date).startOf('ss').fromNow()}</Text>
              </div>
            </a> 
          </Card>
        </Col>
       ))}
    </Row>
  )
}

export default News
