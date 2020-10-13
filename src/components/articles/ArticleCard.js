import React, {useState} from "react"
import { useHistory } from "react-router-dom"
import { Card, Button, CardHeader, CardText, Col, Tooltip } from 'reactstrap';



export const ArticleCard = ({ article }) => {
    const domHistory = useHistory()
    const [tooltipOpen, setTooltipOpen] = useState(false);
    const toggle = () => setTooltipOpen(!tooltipOpen);
    return (
      
        <Col sm="12">
          <Card body>
          <CardHeader>{ article.newsTitle }</CardHeader>
            <CardText>{ article.newsContent }</CardText>
            <CardText>Added by: { article.user.firstName} </CardText>
            <Button onClick={() => domHistory.push(`/articles/detail/${article.id}`)}>Details</Button>
          </Card>
        </Col>
      
    );
  };