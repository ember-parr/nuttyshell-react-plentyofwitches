import React from "react"

//create HTML for a single message
export const Message = ({message}) => {
    return (
        <div className="message">
            <div className="message_user">{message.user.username}:</div>
            <div className="message_text">{message.message}</div>
        </div>
    )
}