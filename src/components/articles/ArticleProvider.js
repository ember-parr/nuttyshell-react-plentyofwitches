import React, { useState, createContext } from "react"

export const ArticleContext = createContext()

export const ArticleProvider = (props) => {
    const [articles, setArticles] = useState([])
    const [searchTerms, setSearchTerms] = useState("")

    const getArticles = () => {
        return fetch(`http://localhost:8088/articles?_expand=user`)
        .then(result => result.json())
        .then(setArticles)
    }

    const addArticle = article => {
        return fetch("http://localhost:8088/articles", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(article)
        })
    }

    const getArticleById = (id) => {
        return fetch(`http://localhost:8088/articles/${id}?_expand=user`)
        .then(result => result.json())
    }

    const deleteArticle = articleId => {
        return fetch(`http://localhost:8088/articles/${articleId}`, {
            method: "DELETE"
        })
    }

    const updateArticle = article => {
        return fetch(`http://localhost:8088/articles/${article.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(article)
        })
    }

    return (
        <ArticleContext.Provider value={{
            articles, getArticles, addArticle, getArticleById, deleteArticle, updateArticle, setSearchTerms, searchTerms
        }}>
            {props.children}
        </ArticleContext.Provider>
    )
}