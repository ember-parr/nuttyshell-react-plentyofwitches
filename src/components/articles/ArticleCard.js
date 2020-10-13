import React from "react"
import { useHistory } from "react-router-dom"
import { Card, Button, CardHeader, CardText, Col, Tooltip, tooltipOpen, toggle } from 'reactstrap';



export const ArticleCard = ({ article }) => {
    const domHistory = useHistory()
    return (
      
        <Col sm="12">
          <Card body>
            <CardHeader>{ article.newsTitle }</CardHeader>
            <CardText>{ article.newsContent }</CardText>
            <Button onClick={() => domHistory.push(`/articles/detail/${article.id}`)}>Details</Button>
          </Card>
        </Col>
      
    );
  };