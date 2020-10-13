/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from "react"
import { ArticleContext } from "./ArticleProvider"
import { useParams, useHistory } from "react-router-dom"
import { Jumbotron, Button, Tooltip} from "reactstrap"

export const ArticleDetail = () => {
    const { getArticleById, deleteArticle } = useContext(ArticleContext)
	
    const [article, setArticle] = useState()
    const [user, setUser] = useState()
	const [tooltipOpen, setTooltipOpen] = useState(false);
    const toggle = () => setTooltipOpen(!tooltipOpen);

    const { articleId } = useParams();
    const history = useHistory();

    useEffect(() => {
        getArticleById(articleId)
        .then((response) => {
            setArticle(response)
            setUser(response.user)
		})
	}, [])

    const userId = parseInt(localStorage.getItem("user"))

    if(parseInt(article?.userId) === userId) {
    return (
        <div>
          <Jumbotron fluid>
          <h1 className="display-3">{article?.newsTitle}</h1>
          <p className="lead">{article?.newsContent}</p>
          <hr className="my-2" />
          <p>URL: <span style={{textDecoration: "underline", color:"blue"}} href="#" id="TooltipExample">{article?.newsURL}</span>.</p>
      <Tooltip placement="right" isOpen={tooltipOpen} target="TooltipExample" toggle={toggle}>
        Copy and paste into browser tab!
      </Tooltip>
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
      )
      
    } else {
        {console.log("user: ", article?.userId)}
        return (
            <div>
              <Jumbotron fluid>
              <h1 className="display-3">{article?.newsTitle}</h1>
              <p className="lead">{article?.newsContent}</p>
              <hr className="my-2" />
              <p>URL: {article?.newsURL}</p>
              <p>Created By: {user?.firstName}</p>
              
              </Jumbotron>
            </div>
          )
    }
}

