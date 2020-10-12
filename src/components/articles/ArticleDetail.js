import React, { useContext, useEffect, useState } from "react"
import { ArticleContext } from "./ArticleProvider"
import "./Article.css"
import { useParams, useHistory } from "react-router-dom"
import { Jumbotron, Button } from "reactstrap"

export const ArticleDetail = () => {
    const { getArticleById, deleteArticle } = useContext(ArticleContext)
	
	const [article, setArticle] = useState()
	
    const { articleId } = useParams();
    const history = useHistory();

    useEffect(() => {
        getArticleById(articleId)
        .then((response) => {
			setArticle(response)
		})
	}, [])

    return (
        <div>
          <Jumbotron fluid>
          <h1 className="display-3">{article?.newsTitle}</h1>
          <p className="lead">{article?.newsContent}</p>
          <hr className="my-2" />
          <p>URL: {article?.newsURL}</p>
          <p className="lead">
            <Button color="secondary" onClick={
                  () => {
                      deleteArticle(article.id)
                          .then(() => {
                              history.push("/articles")
                          })
                  }}>Delete Article</Button>
            <Button color="info" onClick={() => {
                  history.push(`/articles/edit/${article.id}`)
              }}>Edit Article</Button>
          </p>
          </Jumbotron>
        </div>
      );
}

// const Example = () => {
//     return (
//       <div>
//         <Jumbotron fluid>
//         <h1 className="display-3">{article?.newsTitle}</h1>
//         <p className="lead">{article?.newsContent}</p>
//         <hr className="my-2" />
//         <p>URL: {article?.newsURL}</p>
//         <p className="lead">
//           <Button color="secondary" onClick={
//                 () => {
//                     deleteArticle(article.id)
//                         .then(() => {
//                             history.push("/articles")
//                         })
//                 }}>Delete Article</Button>
//           <Button color="info" onClick={() => {
//                 history.push(`/articles/edit/${article.id}`)
//             }}>Edit Article</Button>
//         </p>
//         </Jumbotron>
//       </div>
//     );
//   };




//   return (
//     <section className="article">
//         <h3 className="article__name">{article?.newsTitle}</h3>
//         <div className="article__breed">{article?.newsContent}</div>
//         <div className="article__location">Location: {article?.newsURL}</div>
//         <div className="article__owner">Customer: {article?.userId}</div>
//         <button onClick={
//             () => {
//                 deleteArticle(article.id)
//                     .then(() => {
//                         history.push("/articles")
//                     })
//             }}>Delete Article
//         </button>
//         <button onClick={() => {
//             history.push(`/articles/edit/${article.id}`)
//         }}>Edit</button>
//     </section>
// )