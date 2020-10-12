import React, { useContext, useEffect, useState } from "react"
import { ArticleContext } from "./ArticleProvider"
import "./Article.css"
import { useHistory, useParams } from 'react-router-dom';
import { InputGroup, InputGroupText, InputGroupAddon, Input } from 'reactstrap';

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


    // see note at bottom of code
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
            //disable the button - no extra clicks
            setIsLoading(true);
            if (articleId){
                //PUT - update
                updateArticle({
                    id: article.id,
                    newsTitle: article.newsTitle,
                    newsContent: article.newsContent,
                    newsURL: article.newsURL,
                    userId: parseInt(article.userId)
                })
                .then(() => history.push(`/articles/detail/${article.id}`))
            }else {
                //POST - add
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
                      event.preventDefault() // Prevent browser from submitting the form
                      constructArticleObject()
                  }}>
              {articleId ? "Save Article" : "Add Article"}</button>
  
        </div>
      );
    
    // return (
    //     <form className="articleForm">
    //         <h2 className="articleForm__title">
    //             {articleId ? "Update Article" : "New Article"}
    //         </h2>
    //         <fieldset>
    //             <div className="form-group">
    //                 <label htmlFor="articleName">Article name: </label>
    //                 <input type="text" id="articleName" name="newsTitle" required autoFocus className="form-control" 
    //                 placeholder="Article name" 
    //                 onChange={handleControlledInputChange} 
    //                 defaultValue={article.newsTitle}/>
    //             </div>
    //         </fieldset>
    //         <fieldset>
    //             <div className="form-group">
    //                 <label htmlFor="articleContent">Article Summary: </label>
    //                 <input type="text" id="articleContent" name="newsContent" required className="form-control" 
    //                 placeholder="Summary" 
    //                 onChange={handleControlledInputChange}
    //                 defaultValue={article.Content}/>
    //             </div>
    //         </fieldset>
    //         <fieldset>
    //             <div className="form-group">
    //                 <label htmlFor="articleURL">Article URL: </label>
    //                 <input type="text" id="articleURL" name="newsURL" required className="form-control" 
    //                 placeholder="paste url here" 
    //                 onChange={handleControlledInputChange}
    //                 defaultValue={article.newsURL}/>
    //             </div>
    //         </fieldset>

    //         <button className="btn btn-primary"
    //             disabled={isLoading}
    //             onClick={event => {
    //                 event.preventDefault() // Prevent browser from submitting the form
    //                 constructArticleObject()
    //             }}>
    //         {articleId ? "Save Article" : "Add Article"}</button>
    //     </form>
    // )
}



// const Example = (props) => {
//     return (
//       <div>
//         <InputGroup>
//           <InputGroupAddon addonType="prepend">
//             <InputGroupText>Article Name:</InputGroupText>
//           </InputGroupAddon>
//           <input type="text" id="articleName" name="newsTitle" required autoFocus className="form-control" 
//                     placeholder="Article name" 
//                     onChange={handleControlledInputChange} 
//                     defaultValue={article.newsTitle}/>
//         </InputGroup>
//         <br />
//         <InputGroup>
//           <InputGroupAddon addonType="prepend">
//             <InputGroupText>Article Summary: </InputGroupText>
//           </InputGroupAddon>
//           <input type="text" id="articleContent" name="newsContent" required className="form-control" 
//                     placeholder="Summary" 
//                     onChange={handleControlledInputChange}
//                     defaultValue={article.Content}/>
//         </InputGroup>
//         <br />
//         <InputGroup>
//           <InputGroupAddon addonType="prepend">
//             <InputGroupText>Article URL: </InputGroupText>
//           </InputGroupAddon>
//           <input type="text" id="articleURL" name="newsURL" required className="form-control" 
//                     placeholder="paste url here" 
//                     onChange={handleControlledInputChange}
//                     defaultValue={article.newsURL}/>
//           <InputGroupAddon addonType="prepend">
//             <InputGroupText>To the Right!</InputGroupText>
//           </InputGroupAddon>
//         </InputGroup>

//         <button className="btn btn-primary"
//                 disabled={isLoading}
//                 onClick={event => {
//                     event.preventDefault() // Prevent browser from submitting the form
//                     constructArticleObject()
//                 }}>
//             {articleId ? "Save Article" : "Add Article"}</button>

//       </div>
//     );
//   };