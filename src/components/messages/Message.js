import React from "react"
import { ListGroupItem } from 'reactstrap'

//create HTML for a single message
export const Message = ({message}) => {
    return (
        <ListGroupItem className="message-container">
            <div className="message_user">{message.user.username}:</div>
            <div className="message_text">{message.message}</div>
        </ListGroupItem>
    )
}