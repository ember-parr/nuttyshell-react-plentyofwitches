/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from "react"
import { ArticleContext } from "./ArticleProvider"
import { ArticleCard } from "./ArticleCard"
import { useHistory } from "react-router-dom"
import { Button, CardColumns } from "reactstrap"

export const ArticleList = () => {
    const { articles, getArticles, searchTerms } = useContext(ArticleContext)

    const [filteredArticles, setFiltered ] = useState([])
    const domHistory = useHistory()

    useEffect(()=> {
        getArticles()
    }, [])

    useEffect(()=> {
        if (searchTerms !== "") {
            const subset = articles.filter(article => article.name.toLowerCase().includes(searchTerms))
            setFiltered(subset)
        } else {
            setFiltered(articles)
        }
    }, [searchTerms, articles])

    return (
        <>
            <h2>News Articles</h2>

            <Button onClick={() => domHistory.push("/articles/create")}>
                Add News Article
            </Button>
            <div className = "articles">
                <CardColumns>
                {
                    filteredArticles.map(article => {
                        return <ArticleCard key={article.id} article={article} />
                    })
                }
                    </CardColumns>
            </div>
        </>
    )
}