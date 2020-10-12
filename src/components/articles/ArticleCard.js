import React from "react"
import { Link } from "react-router-dom"
// import "./Article.css"
import { useHistory } from "react-router-dom"
import { Card, Button, CardHeader, CardText, Row, Col } from 'reactstrap';

// export const ArticleCard = ({ article }) => (
//     <section className="article">
//         <h3 className="article__card">
//             <Link to={`/articles/detail/${article.id}`}>
//                 { article.newsTitle }
//             </Link>
//         </h3>
//     </section>
// )

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