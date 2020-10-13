import React, { useContext, useEffect } from "react"
import { MessageContext } from "./MessageProvider"
import { Message } from "./Message"
import { Button } from 'reactstrap';

//return the HTML for the messageList
export const MessageList = () => {

    //grab messages and getMessages from useContext
    const { messages, getMessages } = useContext(MessageContext)

    //get the messages every time the component runs
    useEffect(() => {
        getMessages()
    }, [])

    //actually return the HTML
    return (
        <div className="messages">
            <h2>Messages</h2>
            {
                messages.map(message => <Message key={message.id} message={message} />)
            }
        </div>
    )

}