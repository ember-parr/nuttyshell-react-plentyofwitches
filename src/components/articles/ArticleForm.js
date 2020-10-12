import React, { useContext, useEffect, useState } from "react"
import { ArticleContext } from "./ArticleProvider"
import { useHistory, useParams } from 'react-router-dom';
import { InputGroup, InputGroupText, InputGroupAddon } from 'reactstrap';

export const ArticleForm = () => {
    const { addArticle, getArticleById, updateArticle } = useContext(ArticleContext)
    const [article, setArticle] = useState({})
    const [isLoading, setIsLoading] = useState(true);
    const {articleId} = useParams();
    const history = useHistory();
    const user = localStorage.getItem("user")

    const handleControlledInputChange = (event) => {
        const newArticle = { ...article }
        newArticle[event.target.name] = event.target.value
        setArticle(newArticle)
    }


    useEffect(() => {
            if (articleId){
                getArticleById(articleId)
                .then(article => {
                    setArticle(article)
                    setIsLoading(false)
                })
            } else {
                setIsLoading(false)
            }
    }, [])

    const constructArticleObject = () => {
        if (parseInt(article.locationId) === 0) {
            window.alert("Please select a location")
        } else {
            setIsLoading(true);
            if (articleId){
                updateArticle({
                    id: article.id,
                    newsTitle: article.newsTitle,
                    newsContent: article.newsContent,
                    newsURL: article.newsURL,
                    userId: parseInt(article.userId)
                })
                .then(() => history.push(`/articles/detail/${article.id}`))
            }else {
                addArticle({
                    newsTitle: article.newsTitle,
                    newsContent: article.newsContent,
                    newsURL: article.newsURL,
                    userId: parseInt(user)
                })
                .then(() => history.push("/articles"))
            }
        }
    }

    return (
        <div>
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Article Name:</InputGroupText>
            </InputGroupAddon>
            <input type="text" id="articleName" name="newsTitle" required autoFocus className="form-control" 
                      placeholder="Article name" 
                      onChange={handleControlledInputChange} 
                      defaultValue={article.newsTitle}/>
          </InputGroup>
          <br />
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Article Summary: </InputGroupText>
            </InputGroupAddon>
            <input type="text" id="articleContent" name="newsContent" required className="form-control" 
                      placeholder="Summary" 
                      onChange={handleControlledInputChange}
                      defaultValue={article.Content}/>
          </InputGroup>
          <br />
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Article URL: </InputGroupText>
            </InputGroupAddon>
            <input type="text" id="articleURL" name="newsURL" required className="form-control" 
                      placeholder="paste url here" 
                      onChange={handleControlledInputChange}
                      defaultValue={article.newsURL}/>
            
          </InputGroup>
  
          <button className="btn btn-info"
                  disabled={isLoading}
                  onClick={event => {
                      event.preventDefault() 
                      constructArticleObject()
                  }}>
              {articleId ? "Save Article" : "Add Article"}</button>
  
        </div>
      );
    
    
}



