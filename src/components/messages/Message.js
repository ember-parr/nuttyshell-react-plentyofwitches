import React from "react"
import { ListGroupItem, Card, CardBody, CardText, CardGroup, Button } from 'reactstrap'

//create HTML for a single message
export const Message = ({message}) => {

    const userId = parseInt(localStorage.getItem("user"))

    return (
        <ListGroupItem className="message-container">
            <div className="message_user">{message.user.username}:</div>
            <div className="message_text">{message.message}</div>
        </ListGroupItem>
    )
}