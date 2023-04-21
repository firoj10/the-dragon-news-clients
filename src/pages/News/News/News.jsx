import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import EditorsInsights from '../EditorsInsights/EditorsInsights';

const News = () => {
    const news = useLoaderData()
    const {_id, title, details, image_url, category_id} = news;
    return (
      <div>
          <Card >
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
        {details}
          </Card.Text>
          <Link to={`/category/${category_id}`}><Button variant="primary">All News this categories</Button></Link>
    
        </Card.Body>
      </Card>
      <EditorsInsights></EditorsInsights>
      </div>
    );
};

export default News;