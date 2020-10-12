import React, { useContext, useEffect, useState } from "react"
import { ArticleContext } from "./ArticleProvider"
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

